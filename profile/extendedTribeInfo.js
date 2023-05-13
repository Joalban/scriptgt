/*
 * Script Name: Extended Tribe Info
 * Version: v1.2.0
 * Last Updated: 2023-04-03
 * Author: RedAlert
 * Author URL: https://twscripts.dev/
 * Author Contact: RedAlert#9859 (Discord)
 * Approved: t14075898
 * Approved Date: 2020-07-04
 * Mod: JawJaw
 */

/*--------------------------------------------------------------------------------------
 * This script can NOT be cloned and modified without permission from the script author.
 --------------------------------------------------------------------------------------*/

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;

// Script Config
var scriptConfig = {
    scriptData: {
        prefix: 'extendedTribeInfo',
        name: 'Extended Tribe Info',
        version: 'v1.2.0',
        author: 'RedAlert',
        authorUrl: 'https://twscripts.dev/',
        helpLink:
            'https://forum.tribalwars.net/index.php?threads/extended-tribe-info.285566/',
    },
    translations: {
        en_DK: {
            'Extended Tribe Info': 'Extended Tribe Info',
            Help: 'Help',
            'Script must be executed from a Tribe overview!':
                'Script must be executed from a Tribe overview!',
            'Villages Coords': 'Villages Coords',
            'TW Stats': 'TW Stats',
            'TW Map Stats': 'TW Map Stats',
            'TW Map': 'TW Map',
            'Player Links': 'Player Links',
            'TW Tribe Stats': 'TW Tribe Stats',
            'TW Map Tribe Stats': 'TW Map Tribe Stats',
            'TW Map Tribe': 'TW Map Tribe',
            'Tribe Villages Coordinates': 'Tribe Villages Coordinates',
            'village/s': 'village/s',
            'Mailing List': 'Mailing List',
            'Points Graph': 'Points Graph',
            'Random Ram Only Fake Script': 'Random Ram Only Fake Script',
            'Sequantial Ram Only Fake Script':
                'Sequantial Ram Only Fake Script',
            'Random Cat Only Fake Script': 'Random Cat Only Fake Script',
            'Sequantial Cat Only Fake Script':
                'Sequantial Cat Only Fake Script',
        },
        ro_RO: {
            'Extended Tribe Info': 'Informatii Trib Extinse',
            Help: 'Ajutor',
            'Script must be executed from a Tribe overview!':
                'Scriptul trebuie rulat din pagina Însuşiri(trib)',
            'Villages Coords': 'Coordonatele Satelor',
            'TW Stats': 'TW Stats',
            'TW Map Stats': 'TW Map Stats',
            'TW Map': 'TW Map',
            'Player Links': 'Player Links',
            'TW Tribe Stats': 'TW Tribe Stats',
            'TW Map Tribe Stats': 'TW Map Tribe Stats',
            'TW Map Tribe': 'TW Map Tribe',
            'Tribe Villages Coordinates': 'Coordonatele Satelor Tribului',
            'village/s': 'sat/e',
            'Mailing List': 'Lista mesaje',
            'Points Graph': 'Puncte Grafic',
            'Random Ram Only Fake Script': 'Random Ram Only Fake Script',
            'Sequantial Ram Only Fake Script':
                'Sequantial Ram Only Fake Script',
            'Random Cat Only Fake Script': 'Random Cat Only Fake Script',
            'Sequantial Cat Only Fake Script':
                'Sequantial Cat Only Fake Script',
        },
        fr_FR: {
            'Extended Tribe Info': 'Info Tribu en détail',
            Help: 'Aide',
            'Script must be executed from a Tribe overview!':
                "Le script doit être exécuté depuis le profil d'une tribu!",
            'Villages Coords': 'Coord. Villages',
            'TW Stats': 'TW Stats',
            'TW Map Stats': 'TW Map Stats',
            'TW Map': 'TW Map',
            'Player Links': 'Liens joueurs',
            'TW Tribe Stats': 'TW - Stats Tribu',
            'TW Map Tribe Stats': 'TW Map - Stats Tribu',
            'TW Map Tribe': 'TW Map - Tribu',
            'Tribe Villages Coordinates': 'Coordonnées villages tribu',
            'village/s': 'village(s)',
            'Mailing List': "Carnet d'adresse tribu",
            'Points Graph': 'Graph des points',
            'Random Ram Only Fake Script': 'Fake script aléatoire (bélier)',
            'Sequantial Ram Only Fake Script': 'Fake script ordonné (bélier)',
            'Random Cat Only Fake Script': 'Fake script aléatoire (catapulte)',
            'Sequantial Cat Only Fake Script':
                'Fake script ordonné (catapulte)',
        },
		es_ES: {
            'Extended Tribe Info': 'Info Tribu',
            Help: 'Aide',
            'Script must be executed from a Tribe overview!':
                "Ejeccutar desde Perfil Tribu!",
            'Villages Coords': 'Coord. Pueblos',
            'TW Stats': 'TW Stats',
            'TW Map Stats': 'TW Map Stats',
            'TW Map': 'TW Map',
            'Player Links': 'Enlaces Jugadores',
            'TW Tribe Stats': 'TW - Stats Tribu',
            'TW Map Tribe Stats': 'TW Map - Stats Tribu',
            'TW Map Tribe': 'TW Map - Tribu',
            'Tribe Villages Coordinates': 'Coord Pueblo Tribu',
            'village/s': 'pueblo(s)',
            'Mailing List': "Lista MP",
            'Points Graph': 'Graficos',
            'Random Ram Only Fake Script': 'FakePro Espias',
            'Sequantial Ram Only Fake Script': 'FakePro Arietes)',
            'Random Cat Only Fake Script': 'FakePro Catapultas)',
            'Sequantial Cat Only Fake Script':
                'Fake script ordonné (catapulte)',
        },
    },
    allowedMarkets: [],
    allowedScreens: ['info_ally'],
    allowedModes: [],
    isDebug: DEBUG,
    enableCountApi: true,
};

$.getScript('https://twscripts.dev/scripts/twSDK.js', async function () {
    // Initialize Library
    await twSDK.init(scriptConfig);
    const scriptInfo = twSDK.scriptInfo();
    const isValidScreen = twSDK.checkValidLocation('screen');
    const allyId = twSDK.getParameterByName('id');

    // Globals
    const { villages } = await fetchWorldData();

    if (isValidScreen && allyId !== '') {
        initTribeInfo();
    } else {
        UI.ErrorMessage(
            twSDK.tt('Script must be executed from a Tribe overview!')
        );
    }

    // Initialize Script
    function initTribeInfo() {
        if (jQuery('.tribe-info-shown').length < 1) {
            const headersToAdd = `
                <th width="260px">${twSDK.tt('Points Graph')}</th>
                <th>${twSDK.tt('Villages Coords')}</th>
                <th>${twSDK.tt('Player Links')}</th>
            `;

            let tribeVillages = [];
            let tribeMembers = [];

            jQuery('#content_value table tr:eq(0) table:eq(1) tr:first').append(
                headersToAdd
            );
            jQuery('#content_value table tr:eq(0) table:eq(1) tr')
                .not('tr:eq(0)')
                .each(function () {
                    const currentPlayerName = jQuery(this)
                        .find('td:eq(0)')
                        .find('a')
                        .text()
                        .trim();
                    const currentPlayerLink = jQuery(this)
                        .find('td:eq(0)')
                        .find('a')
                        .attr('href');
                    const [_, currentPlayerId] =
                        currentPlayerLink.split('&id=');
                    const currentPlayerVillages = villages.filter((village) => {
                        return (
                            parseInt(village[4]) === parseInt(currentPlayerId)
                        );
                    });
                    const currentPlayerVillagesCoords =
                        currentPlayerVillages.map(
                            (village) => village[2] + '|' + village[3]
                        );

                    const currentPlayerVillagesString =
                        currentPlayerVillagesCoords.join(' ').trim();

                    const twStatsLink = buildTWStatsProfileUrl(currentPlayerId);
                    const twMapStatsLink = buildTWMapPlayerUrl(currentPlayerId);
                    const twMapLink = buildMapPlayerUrl(currentPlayerId);

                    const playerPointsGraph = buildGraphImageUrl(
                        currentPlayerId,
                        'playergraph',
                        'points'
                    );

                    const rowData = `
                        <td width="260px">
                            <img src="${playerPointsGraph}" class="player-points-graph" />
                        </td>
                        <td>
                            <textarea readonly>${currentPlayerVillagesString}</textarea>
                        </td>
                        <td>
                            <a href="${twStatsLink}" target="_blank" rel="noopener noreferrer" class="btn">
                                ${twSDK.tt('TW Stats')}
                            </a><br>
                            <a href="${twMapStatsLink}" target="_blank" rel="noopener noreferrer" class="btn">
                                ${twSDK.tt('TW Map Stats')}
                            </a><br>
                            <a href="${twMapLink}" target="_blank" rel="noopener noreferrer" class="btn">
                                ${twSDK.tt('TW Map')}
                            </a>
                        </td>
                    `;

                    tribeVillages.push(...currentPlayerVillages);
                    tribeMembers.push(currentPlayerName);

                    jQuery(this).append(rowData);
                });

            // tribe coords list
            const tribeVillageCoords = tribeVillages.map(
                (village) => village[2] + '|' + village[3]
            );
            const tribeVillageCoordsString = tribeVillageCoords
                .join(' ')
                .trim();

            // tribe links
            const twTribeStatsLink = buildTWStatsTribeUrl(allyId);
            const twTribeMapStatsLink = buildTWMapTribeUrl(allyId);
            const twTribeMapLink = buildMapTribeUrl(allyId);

            // tribe graphs
            const graphPoints = buildGraphImageUrl(
                allyId,
                'tribegraph',
                'points'
            );
            const graphVillages = buildGraphImageUrl(
                allyId,
                'tribegraph',
                'villages'
            );
            const graphMembers = buildGraphImageUrl(
                allyId,
                'tribegraph',
                'members'
            );
            const graphOd = buildGraphImageUrl(allyId, 'tribegraph', 'od');
            const graphOda = buildGraphImageUrl(allyId, 'tribegraph', 'oda');
            const graphOdd = buildGraphImageUrl(allyId, 'tribegraph', 'odd');

            // tribe mailing list
            const mailingList = tribeMembers.join(';');

            // fake scripts
            const regex = '/\\d+/';
            
			const randomOnlyRams = `javascript:var lanca =00; var espada=00;var barbaro=00;var arqueiro=00; var explorador=05;var cavalaria_leve=00;var cavalaria_arqueira=00;var cavalaria_pesada=00;var catapulta=00;var ariete=00;var coords_ataque='${tribeVillageCoordsString}';var apoiar=false;var aviso=true;var cookieName="fakeapoio";var repetir_ataques = 1;$.getScript("https://cdn.jsdelivr.net/gh/Joalban/scriptgt@main/fakepro.js");void(0);`;
            const sequentialOnlyRams = `javascript:var lanca =00; var espada=00;var barbaro=00;var arqueiro=00; var explorador=05;var cavalaria_leve=00;var cavalaria_arqueira=00;var cavalaria_pesada=00;var catapulta=00;var ariete=05;var coords_ataque='${tribeVillageCoordsString}';var apoiar=false;var aviso=true;var cookieName="fakeapoio";var repetir_ataques = 1;$.getScript("https://cdn.jsdelivr.net/gh/Joalban/scriptgt@main/fakepro.js");void(0);`;
            const randomOnlyCats = `javascript:var lanca =00; var espada=00;var barbaro=00;var arqueiro=00; var explorador=05;var cavalaria_leve=00;var cavalaria_arqueira=00;var cavalaria_pesada=00;var catapulta=05;var ariete=00;var coords_ataque='${tribeVillageCoordsString}';var apoiar=false;var aviso=true;var cookieName="fakeapoio";var repetir_ataques = 1;$.getScript("https://cdn.jsdelivr.net/gh/Joalban/scriptgt@main/fakepro.js");void(0);`;
            const sequentialOnlyCats = `javascript:coords='${tribeVillageCoordsString}';var doc=document,index=0;url=doc.URL,Timing.pause();var cookieparams=doc.cookie.match(/GenFakeScript0=index([0-9]*)/);if(null!=cookieparams&&(index=1*cookieparams[1]),-1==url.indexOf("screen=place")){var r=confirm("This script needs to be run from the rally point Press OK to reset index.");1==r&&(index=0)}coords=coords.split(" ");var restart=!1;index>=coords.length&&(index=0,restart=!0);var d=new Date;d.setDate(d.getDate()+5),doc.cookie="GenFakeScript0=index"+(index+1)+";expires="+d.toGMTString(),restart&&alert("End of coord list is reached. Starting over"),coords=coords[index],coords=coords.split("|"),doc.forms.units.x.value=coords[0],doc.forms.units.y.value=coords[1],1*doc.getElementsByName("spy")[0].parentNode.textContent.match(${regex})[0]>=1&&(insertUnit(doc.forms.units.spy,0),insertUnit(doc.forms.units.spy,1)),1*doc.getElementsByName("catapult")[0].parentNode.textContent.match(${regex})[0]>0&&(insertUnit(doc.forms.units.catapult,0),insertUnit(doc.forms.units.catapult,1));`;

            const content = `
                <div class="ra-mb15">
                    <a href="${twTribeStatsLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        ${twSDK.tt('TW Tribe Stats')}
                    </a>
                    <a href="${twTribeMapStatsLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        ${twSDK.tt('TW Map Tribe Stats')}
                    </a>
                    <a href="${twTribeMapLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        ${twSDK.tt('TW Map Tribe')}
                    </a>
                </div>
                <div class="ra-mb15 ra-display-grid">
                    <img src="${graphPoints}">
                    <img src="${graphVillages}">
                    <img src="${graphMembers}">
                    <img src="${graphOd}">
                    <img src="${graphOda}">
                    <img src="${graphOdd}">
                </div>
                <div class="ra-mb15">
                    <label for="tribeVillagesCoords">
                        ${twSDK.tt('Tribe Villages Coordinates')} (${
                tribeVillageCoords.length
            } ${twSDK.tt('village/s')})
                    </label>
                    <textarea class="ra-textarea" id="tribeVillagesCoords" readonly>${tribeVillageCoordsString}</textarea>
                </div>
                <div class="ra-mb15">
                    <label for="tribeMailingList">
                        ${twSDK.tt('Mailing List')}
                    </label>
                    <textarea class="ra-textarea" id="tribeMailingList" readonly>${mailingList}</textarea>
                </div>
                <div class="ra-mb15">
                    <label for="randomRamOnly">
                        ${twSDK.tt('Random Ram Only Fake Script')}
                    </label>
                    <textarea class="ra-textarea" id="randomRamOnly" readonly>${randomOnlyRams}</textarea>
                </div>
                <div class="ra-mb15">
                    <label for="sequentialRamOnly">
                        ${twSDK.tt('Sequantial Ram Only Fake Script')}
                    </label>
                    <textarea class="ra-textarea" id="sequentialRamOnly" readonly>${sequentialOnlyRams}</textarea>
                </div>
                <div class="ra-mb15">
                    <label for="randomRamOnly">
                        ${twSDK.tt('Random Cat Only Fake Script')}
                    </label>
                    <textarea class="ra-textarea" id="randomRamOnly" readonly>${randomOnlyCats}</textarea>
                </div>
                <div>
                    <label for="sequentialRamOnly">
                        ${twSDK.tt('Sequantial Cat Only Fake Script')}
                    </label>
                    <textarea class="ra-textarea" id="sequentialRamOnly" readonly>${sequentialOnlyCats}</textarea>
                </div>
            `;

            const customStyle = `
                .ra-display-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 15px; }
            `;

            twSDK.renderBoxWidget(
                content,
                scriptConfig.scriptData.prefix,
                'ra-extended-tribe-info',
                customStyle
            );
        }
    }

    // Helper: Build map player URL
    function buildMapPlayerUrl(playerId) {
        return `//${
            game_data.market === 'en' ? '' : game_data.market + '.'
        }twstats.com/${game_data.world}/index.php?page=map&pi0=${playerId}&pc0=002bff&zoom=300&centrex=500&centrey=500&nocache=1&fill=000000`;
    }

    // Helper: Build TW Stats Player Profile Url
    function buildTWStatsProfileUrl(playerId) {
        return `//www.twstats.com/in/${game_data.world}/player/${playerId}`;
    }

    // Helper: Build TribalWars Maps player url
    function buildTWMapPlayerUrl(playerId) {
        return `http://${
            game_data.world
        }.tribalwarsmap.com/${game_data.market === 'en' ? '' : game_data.market}/history/player/${playerId}#general`;
    }

    // Helper: Build map tribe URL
    function buildMapTribeUrl(tribeId) {
        return `//${
            game_data.market === 'en' ? '' : game_data.market + '.'
        }twstats.com/${game_data.world}/index.php?page=map&ti0=${tribeId}&tc0=002bff&zoom=300&centrex=500&centrey=500&nocache=1&fill=000000`;
    }

    // Helper: Build TW Stats Tribe Profile Url
    function buildTWStatsTribeUrl(tribeId) {
        return `//www.twstats.com/in/${game_data.world}/tribe/${tribeId}`;
    }

    // Helper: Build TribalWars Maps tribe url
    function buildTWMapTribeUrl(tribeId) {
        return `http://${
            game_data.world
        }.tribalwarsmap.com/${game_data.market === 'en' ? '' : game_data.market}/history/tribe/${tribeId}#general`;
    }

    // Helper: Build graph image URL
    function buildGraphImageUrl(id, type, graph) {
        return `//${
            game_data.market === 'en' ? '' : game_data.market + '.'
        }twstats.com/${game_data.world}/image.php?type=${type}&graph=${graph}&id=${id}`;
    }

    // Helper: Fetch all required world data
    async function fetchWorldData() {
        try {
            const villages = await twSDK.worldDataAPI('village');
            return { villages };
        } catch (error) {
            UI.ErrorMessage(error);
            console.error(`${scriptInfo} Error:`, error);
        }
    }
});
