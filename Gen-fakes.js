var D=document;
if(window.frames.length>0)D=window.main.document;
url=D.URL;
if(url.indexOf ('screen=info_player')==-1)	{
	alert('Go perfil de un jugador');
	end();
}
var tds=D.getElementsByTagName("TD");
var K=new Array();
for(var idx=0;idx<100;idx++)K[idx]=new Array();
var C=new Array();
for(var idx=0;idx<tds.length;idx++){
	var xy=tds[idx].innerHTML;
	if(/^\d+\|\d+$/.test(xy)){
		C.push(xy);
		var xys=xy.split('|');
		K[Math.floor(parseInt(xys[0])/100)+Math.floor(parseInt(xys[1])/100)*10].push(xy);
	}
}
C=C.join(' ');
var prefix='<textarea onclick = "select();" cols=80 rows=10>javascript:units = [0,0,0,0,50,0,0,0,1,0]; coords=\'';
var postfix='\';
tn = ["spear","sword","axe","archer", "spy","light","marcher","heavy","ram","catapult"]; 
var doc=document;
if (window.frames.length>0)doc=window.main.document;
url=doc.URL;
if(url.indexOf("screen=place")==-1)alert ("Script a ejecutar desde Plaza de Reuniones");
coords=coords.split(" ");
index=Math.round (Math.random()*(coords.length-1));
coords=coords[index];
coords=coords.split("|");
doc.forms[0].x.value=coords[0];
doc.forms[0].y.value=coords[1];
for(x=0;x<units.length;x++)	{
	insertUnit(document.forms[0].elements[tn[x]],units[x]);
}
void(0);
</textarea><br><br>';

var S='
<link rel="stylesheet" type="text/css" href="http://es1.guerrastribales.es/merged/game.css"/>
<b>TW| Generator de Fakes</b><br/><hr><br>
<table>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_spear.png?1" title="Lancero" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_sword.png?1" title="Espada" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_axe.png?1" title="Hacha" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_archer.png?1" title="Arquero" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_spy.png?1" title="Espia" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_light.png?1" title="Ligero" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_marcher.png?1" title="Arquero Montado" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_heavy.png?1" title="Pesado" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_ram.png?1" title="Ariete" alt="" class=""/></th>
<th style="text-align:center"  width="35"><img src="graphic/unit/unit_catapult.png?1" title="Catapulta" alt="" class=""/></th>
<tr>
	<td class="unit-item"><input value = "0" id = "spear" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "sword" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "axe" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "archer" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "spy" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "light" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "marcher" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "heavy" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "ram" type = "text" size = "5"/></td>
	<td class="unit-item"><input value = "0" id = "catapult" type = "text" size = "5"/></td>
	<td><button onclick="javascript: setUnit();void(0);">OK</button>
</tr>
</table>
<script>
function setUnit()	{
	var units = [];
	var tn = ["spear","sword","axe","archer", "spy","light","marcher","heavy","ram","catapult"]; 
    for(y=0;y<10;y++)	{
		units.push(document.getElementById(tn[y]).value);
	}
	var txt = document.getElementsByTagName("textarea");
	for(u=0;u<txt.length;u++)	{
		var twotwo = document.getElementsByTagName("textarea")[u].value.split(/coords=\'/);
		document.getElementsByTagName("textarea")[u].value = "javascript: units= [" + units + "]; coords=\'" + twotwo[1];
	}
}

</script>
<hr>Todos los Pueblos:<br>'+prefix+C+postfix;for(var idx=0;idx<100;idx++)if(K[idx].length>0){var Ks=K[idx].join(' ');
S +='<br><br>C'+idx+' Pueblos:<br>'+prefix+Ks+postfix;}
var popup=window.open ('','twfg','width=640,height=480,scrollbars=1');
popup.document.open ('text/html','replace');
popup.document.write(S);
popup.document.close();