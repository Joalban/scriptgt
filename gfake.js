ScriptAPI.register( 'G Fake v 1.0', 8.0, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/offdef/gfake.js"); void(0);*/

javaScript: 
var doc = document;         
if(window.frames.length>0) doc = window.main.document; url=doc.URL;        
if(url.indexOf('screen=place') == -1) { alert('Ejecutar desde Plaza de Reuniones'); } 
else {coords = coords.split(' '); 
index = Math.round(Math.random() * (coords.length - 1)); 
coords = coords[index]; coords = coords.split('|');
var n = prompt("1.Spear   2.Ram   3.Archer   4.sword   5.Light   6.Catapult", "1"); 
doc.forms[0].x.value = coords[0];                 
doc.forms[0].y.value = coords[1];                   
n = parseInt(n);                 
if(n == 1) { insertUnit(doc.forms[0].spear, 1); } 
else if(n == 2) {insertUnit(doc.forms[0].ram, 1);} 
else if(n == 3) {insertUnit(doc.forms[0].archer, 1);} 
else if(n == 4) {insertUnit(doc.forms[0].sword, 1);}
else if(n == 5) {insertUnit(doc.forms[0].light, 1);}
else if(n == 6) {insertUnit(doc.forms[0].catapult, 1);}}