javascript: var sep = [";", "#"];
if (document.URL.indexOf("screen=overview_villages") > 0) {
    var wtd = prompt("Seleccionar [export] para Exportar,  [import] para Importar", 'export');
    if (wtd == "import") {
        inputlist();
    } else {
        outputlist();
    }
} else {
    alert("Script se ejecuta desde Vision General -> Combinado");
}
function outputlist() {
    var vlist = new String();
    var inputs = document.getElementsByTagName('span');
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].id.indexOf('label_text') != -1) {
            var arr = inputs[i].innerHTML.split(" ");
            vlist = vlist + inputs[i].id.slice(11) + sep[1];
            for (x = 0; x < arr.length - 2; x++) {
                vlist = vlist + arr[x] + ' ';
            }
            vlist = vlist + sep[0];
        }
    }
    if (vlist) {
        output = window.open('', '', 'height=300,width=300');
        output.document.open();
        output.document.write('<textarea rows="10" cols="30" onclick="javascript:select();">' + vlist + '</textarea>');
        output.document.close();
    }
}
function inputlist() {
    var vils = new Array();
    var reply = prompt('Introducir la lista exportada con anterioridad', '');
    p = reply.split(sep[0]);
    for (i = 0; i < p.length; i++) {
        m = p[i].split(sep[1]);
        vils[m[0]] = m[1];
    }
    var inputs = document.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].id.indexOf('edit_input') != -1) {
            if (vils[inputs[i].id.slice(11)]) {
                inputs[i].value = vils[inputs[i].id.slice(11)];
                inputs[i + 1].click();
            }
        }
    }
 }
