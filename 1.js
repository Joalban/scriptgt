var D=document;
if(window.frames.length>0)D=window.main.document;url=D.URL;
if(url.indexOf('screen=info_player')==1){alert('Ir al perfil del jugador');end();}
var tds=D.getElementsByTagName("TD");
var K=new Array();
for(var idx=0;idx<100;idx++)K[idx]=new Array();
var C=new Array();
for(var idx=0;idx<tds.length;idx++){var xy=tds[idx].innerHTML;if(/^\d+\|\d+$/.test(xy)){C.push(xy);
var xys=xy.split('|');K[Math.floor(parseInt(xys[0])/100)+Math.floor(parseInt(xys[1])/100)*10].push(xy);}}C=C.join(' ');
var prefix='<textarea cols=80 rows=10>javascript:coords=\'';
var postfix='\';var doc = document;if(window.frames.length>0)doc=window.main.document;url=doc.URL;if(url.indexOf(\'screen=place\')==-1){alert(\'Este script se usa desde la plaza\');}else{coords=coords.split(\' \');index=Math.round(Math.random()*(coords.length-1));coords=coords[index];coords=coords.split(\'|\');var n=prompt("1.Spear   2.Ram   3.Archer   4.sword  ", "1");doc.forms[0].x.value = coords[0];doc.forms[0].y.value = coords[1];n = parseInt(n);if(n == 1) {insertUnit(doc.forms[0].spear, 1);}else if(n == 2) {insertUnit(doc.forms[0].ram, 1);}else if(n == 3) {insertUnit(doc.forms[0].archer, 1);}else if(n == 4) {insertUnit(doc.forms[0].sword, 1);}}</textarea><br><br>';
var S='<b>GT Generador fakes Chawento v1.0</b><hr>Todos los Pueblos:<br>'+prefix+E+postfix;
for(var idx=0;idx<100;idx++)if(K[idx].length>0){var Ks=K[idx].join(' ');S+='<br><br>K'+idx+' Pueblos:<br>'+prefix+Ks+postfix;}var popup=window.open('about:blank','twfg','width=640,height=480,scrollbars=1');
popup.document.open('text/html','replace');popup.document.write(S);popup.document.close();
var S='<b>GT Generador fakes Chawento v1.0</b><hr>Todos los Pueblos:<br>'+prefix+E+postfix;
for(var idx=0;idx<100;idx++)if(K[idx].length>0){var Ks=K[idx].join(' ');S+='<br><br>K'+idx+' Pueblos:<br>'+prefix+Ks+postfix;}var popup=window.open('about:blank','twfg','width=640,height=480,scrollbars=1');
popup.document.open('text/html','replace');popup.document.write(S);popup.document.close();


