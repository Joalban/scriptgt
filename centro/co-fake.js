var table = document.getElementById("villages_list");
if (document.URL.indexOf('screen=info_player') == -1) {
    alert('Ir al Perfil del Jugador!');
    end()
}

while (table.tBodies[0].rows.length > 100 && table.tBodies[0].rows.length < 102) {
    /*This checks to see if its over 100 rows (if it is, then it means that annoying button is there, which you need to get rid of*/
    var str = table.tBodies[0].rows[100].getElementsByTagName("td")[0].getElementsByTagName("a")[0].getAttribute("onclick").replace("return false", "");
    var patt1 = /\d+/g;
    var x = (str.match(patt1));
    Player.getAllVillages(this, '/game.php?village=' + x[0] + '&screen=info_player&ajax=fetch_villages&player_id=' + x[1]);
    table.tBodies[0].deleteRow(100);
    $.getScript("http://www.hemispheria.net/scripts/offdef/centro/co-fake.js"); void (0);
    end();
}

function zeroPad(number, length) {
    var n = number.toString();
    while (n.length < length) {
        n = "0" + n;
    }
    return n;
}

function findK(village) {
    var x = village.split("|")[0];
    var y = village.split("|")[1];
    return Math.floor(parseInt(x) / 100) + Math.floor(parseInt(y) / 100) * 10
}
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "")
}
function removeDuplicateElement(arrayName) {
    var newArray = new Array();
    label: for (var i = 0; i < arrayName.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j] == arrayName[i]) continue label
        }
        newArray[newArray.length] = arrayName[i]
    }
    return newArray
}
//--------------------------------------------//
var coord = "";
var totalK = [];
for (x = 0; x < table.tBodies[0].rows.length; x++) {
    var row = table.tBodies[0].rows[x];
    var cell = row.getElementsByTagName("td");
    coord += cell[1].textContent + " ";
    totalK[x] = zeroPad(findK(cell[1].textContent),2)
}
var allK = removeDuplicateElement(totalK);
allK = allK.sort();
//--------------------------------------------//
var starttext = "<textarea cols=80 rows=10 onFocus='this.select()'>";
var endtext = "</textarea>";
var startscript = "Javascript: var coords = '";
var fakescript = "';$.getScript('http://www.hemispheria.net/scripts/Generador.js');void(0);";
var data = "<b>CO Fake Generador Generator v1.0</b><hr>Todos los Pueblos:<br>" + starttext + startscript + trim(coord) + fakescript + endtext + "</br>";

for (y = 0; y < allK.length; y++) {
    var tempvillage = "";
    for (x = 0; x < table.tBodies[0].rows.length; x++) {
        var row = table.tBodies[0].rows[x];
        var cell = row.getElementsByTagName("td");
        if (findK(cell[1].textContent) == allK[y]) {
            tempvillage += cell[1].textContent + " "
        }
    }
    data += "<b> K" + allK[y] + "</br>" + starttext + startscript + trim(tempvillage) + fakescript + endtext + "</br>"
}
var popup = window.open('about:blank', 'cofg', 'width=640,height=480,scrollbars=1');
popup.document.open('text/html', 'replace');
popup.document.write(data);
popup.document.close();
void (0);




