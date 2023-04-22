Javascript:
var current= new Date()
var day_night=current.getHours()
if (day_night<=12)
document.write("<img src='http://flmnetwork.com/content/generators/sig-generator/temp/FLMNetworkSig4ec9aaedcff62.png'>")
else
document.write("<img src='http://flmnetwork.com/content/generators/sig-generator/temp/FLMNetworkSig4ec9aaedcff62.png'>")

var menu;
function option() {
    menu = prompt("Centro de Operacion, escoja la opcion deseada.\n\nTodos los scripts funcionan, que haya arqueros en el mundo o no\n\n1. Centro Ofensivo\n2. Centro Defensivo\n3. CO Fake Generador\n4. Attack Selector\n5. Dale's OP Generator\n6. Nuke Generator\n\n", "1");
}
option();
var scriptlocations = ["http://scriptgt.125mb.com/gt/centro/co.js", "http://scriptgt.125mb.com/gt/centro/cd.js", "http://scriptgt.125mb.com/gt/centro/co-fake.js", 
"http://scriptgt.125mb.com/gt/attack-selector.js"];
if (scriptlocations[menu - 1] != undefined) {
    $.getScript(scriptlocations[menu - 1]);
    void (0);	
} 		 
     
else {
    option();
}

void (0);





