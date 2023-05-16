/*
 * Script Name: Fake Script Client
 * Version: v1.2.0
 * Last Updated: 2023-01-26
 * Author: RedAlert
 * Author URL: https://twscripts.dev/
 * Author Contact: RedAlert#9859 (Discord)
 * Approved: N/A
 * Approved Date: 2022-04-24
 * Mod: JawJaw
 */

/*--------------------------------------------------------------------------------------
 * This script can NOT be cloned and modified without permission from the script author.
 --------------------------------------------------------------------------------------*/

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;
if (typeof config !== 'object') config = null;

// Script Config
var scriptConfig = {
    scriptData: {
        prefix: 'fakeScriptClient',
        name: 'Fake Script Client',
        version: 'v1.2.0',
        author: 'RedAlert',
        authorUrl: 'https://twscripts.dev/',
        helpLink:
            'https://forum.tribalwars.net/index.php?threads/fake-script-client.288771/',
    },
    translations: {
        en_DK: {
            'Fake Script Client': 'Fake Script Client',
            Help: 'Help',
            'You need to provide a configuration to run this script!':
                'You need to provide a configuration to run this script!',
            'Redirecting...': 'Redirecting...',
            'All villages were extracted, now start from the first!':
                'All villages were extracted, now start from the first!',
            'Invalid configuration provided!':
                'Invalid configuration provided!',
            'No more troops to send. Going to next village...':
                'No more troops to send. Going to next village...',
        },
    },
    allowedMarkets: [],
    allowedScreens: ['place'],
    allowedModes: [],
    isDebug: DEBUG,
    enableCountApi: false,
};

if (typeof window.twSDK === 'undefined') {
    jQuery.ajax({
        type: 'GET',
        url: 'https://twscripts.dev/scripts/twSDK.js',
        success: initFakeScript,
        dataType: 'script',
        cache: true,
    });
} else {
    initFakeScript();
}

async function initFakeScript() {
    await twSDK.init(scriptConfig);
    const scriptInfo = twSDK.scriptInfo();
    const gameScreen = twSDK.getParameterByName('screen');
    const gameMode = twSDK.getParameterByName('try');

    const { villages, players, tribes } = await fetchWorldData();

    // Check that there is a script config provided
    if (config === null) {
        UI.ErrorMessage(
            twSDK.tt('You need to provide a configuration to run this script!')
        );
        return;
    }

    // Entry Point
    if (gameScreen === 'place' && gameMode === null) {
        const coordinates = twSDK.getDestinationCoordinates(
            config,
            tribes,
            players,
            villages
        );

        runScript(config, coordinates);
    } else {
        UI.InfoMessage(twSDK.tt('Redirecting...'));
        twSDK.redirectTo('place');
    }

    // Here is where the fake script does it's work
    function runScript(config, coordinates) {
        const { sendMode, unitsAndAmounts, whatSend } = config;

        // prepare transformed unit amounts object
        let unitAmountsTransformed = {};
        unitsAndAmounts.forEach((item) => {
            const { unit, amount } = item;
            unitAmountsTransformed = {
                ...unitAmountsTransformed,
                [unit]: amount,
            };
        });

        // fill target field
        if (sendMode === 'sequential') {
            index = 0;
            fakecookie = document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');
            if (fakecookie != null) index = parseInt(fakecookie[2]);
            if (index >= coordinates.length)
                UI.ErrorMessage(
                    twSDK.tt(
                        'All villages were extracted, now start from the first!'
                    )
                );
            if (index >= coordinates.length) index = 0;
            coordinates = coordinates[index];
            coordinates = coordinates.split('|');
            index = index + 1;
            cookie_date = new Date(2050, 1, 1);
            document.cookie =
                'farm=' + index + ';expires=' + cookie_date.toGMTString();
            document.getElementById('inputx').value = coordinates[0];
            document.getElementById('inputy').value = coordinates[1];
        } else if (sendMode === 'random' || sendMode === 'selective_random') {
            const randomIndex = Math.floor(Math.random() * coordinates.length);
            const coordSplit = coordinates[randomIndex].split('|');
            document.getElementById('inputx').value = coordSplit[0];
            document.getElementById('inputy').value = coordSplit[1];
        }

        // fill unit fields
        getWhatUnitsToSend(whatSend, unitAmountsTransformed);
    }

    // Helper: What units to send
    function getWhatUnitsToSend(whatSend, unitsAndAmounts) {
        Array.from(document.querySelectorAll('.unitsInput')).forEach(function (
            x
        ) {
            x.value = 0;
        });

        const spyCount = parseInt(
            document
                .getElementById('unit_input_spy')
                .getAttribute('data-all-count')
        );
        const ramsCount = parseInt(
            document
                .getElementById('unit_input_ram')
                .getAttribute('data-all-count')
        );
        const catsCount = parseInt(
            document
                .getElementById('unit_input_catapult')
                .getAttribute('data-all-count')
        );

        switch (whatSend) {
            case 'custom':
                var count;
                for (var unit in unitsAndAmounts) {
                    if (unitsAndAmounts.hasOwnProperty(unit)) {
                        if (
                            unitsAndAmounts[unit] > 0 &&
                            typeof document.forms[0][unit] != 'undefined'
                        ) {
                            count = document
                                .getElementById(`unit_input_${unit}`)
                                .getAttribute('data-all-count');
                            if (count > 0 && unitsAndAmounts[unit] < count) {
                                document.forms[0][unit].value = Math.min(
                                    unitsAndAmounts[unit],
                                    count
                                );
                            } else {
                                goToNextVillage();
                            }
                        }
                    }
                }
                break;
            case 'selective_send_all':
                var count;
                for (var unit in unitsAndAmounts) {
                    if (unitsAndAmounts.hasOwnProperty(unit)) {
                        count = document
                            .getElementById(`unit_input_${unit}`)
                            .getAttribute('data-all-count');
                        document.forms[0][unit].value = Math.abs(
                            count - unitsAndAmounts[unit]
                        );
                    }
                }
                break;
            case 'send_all':
                selectAllUnits(1);
                break;
            case 'ram_then_catapult':
                if (ramsCount >= 1) {
                    document.getElementById('unit_input_ram').value = 1;
                    if (spyCount >= 1) {
                        document.getElementById('unit_input_spy').value = 1;
                    }
                } else if (catsCount >= 1) {
                    document.getElementById('unit_input_catapult').value = 1;
                    if (spyCount >= 1) {
                        document.getElementById('unit_input_spy').value = 1;
                    }
                } else {
                    goToNextVillage();
                }
                break;
            case 'catapult_then_ram':
                if (catsCount >= 1) {
                    document.getElementById('unit_input_catapult').value = 1;
                    if (spyCount >= 1) {
                        document.getElementById('unit_input_spy').value = 1;
                    }
                } else if (ramsCount >= 1) {
                    document.getElementById('unit_input_ram').value = 1;
                    if (spyCount >= 1) {
                        document.getElementById('unit_input_spy').value = 1;
                    }
                } else {
                    goToNextVillage();
                }
                break;
            default:
                UI.ErrorMessage(twSDK.tt('Invalid configuration provided!'));
                return;
        }
    }

    // Helper: Move to next village
    function goToNextVillage() {
        setTimeout(function () {
            const nextVillageLink = document
                .getElementById('village_switch_right')
                ?.getAttribute('href');

            if (nextVillageLink) {
                UI.InfoMessage(
                    twSDK.tt('No more troops to send. Going to next village...')
                );
                window.location.assign(nextVillageLink);
            }
        }, 500);
    }

    // Helper: Fetch all required world data
    async function fetchWorldData() {
        try {
            const villages = await twSDK.worldDataAPI('village');
            const players = await twSDK.worldDataAPI('player');
            const tribes = await twSDK.worldDataAPI('ally');
            return { villages, players, tribes };
        } catch (error) {
            UI.ErrorMessage(error);
            console.error(`${scriptInfo} Error:`, error);
        }
    }
}
