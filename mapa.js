ScriptAPI.register( 'TW Mapa v 1.0', 8.0, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/mapa.js"); void(0);*/

javascript:
var doc=document;
if(window.frames.length>0)doc=window.main.document;url=doc.URL;link='http://es.twstats.com/'+getWorld(url)+'/index.php?page=map&centrex=500&centrey=500';link+='&zoom=150&grid=1';link+='&player_1_id='+getID(url)+'&player_1_colour=e012e0';color='00FF00';
function getID(url){var start=url.indexOf("id=")+3;
var end=url.indexOf('%26',start);
var id;if(end>0)id=url.substring(start,end);
else{id=url.substring(start);}return id;}
function getWorld(url){start=url.indexOf("es");
return url.substring(start,url.indexOf('.',start));}
function getCoords(){str=doc.title;mid=str.lastIndexOf('|');x=str.substring(str.lastIndexOf('(')+1,mid);y=str.substring(mid+1,str.lastIndexOf(')')); return 'centrex='+x+'&centrey='+y;}if(url.indexOf('screen=info_player')!=-1){link+='&player_0_id='+getID(url)+'&player_0_colour='+color;}else if(url.indexOf('screen=info_ally')!=-1){link+='&tribe_0_id='+getID(url)+'&tribe_0_colour='+color;}else if(url.indexOf('screen=info_village')!=-1){link+='&village_0_id='+getID(url)+'&village_0_colour='+color;}else {link="";alert('Ejecutar desde Perfil Jugador o Tribu');}
if(link!="")window.open(link);end();
void(0);