javascript:var doc=document;
if(window.frames.length>0)doc=window.main.document;
url=doc.URL;
link='http://'+getWorld(url)+'.tribalwarsmap.com/es/history/player/';
link+=getID(url);
function getID(url){
var start=url.indexOf("id=")+3;
var end=url.indexOf('&screen=info',start);
var id;
if(end>0)id=url.substring(start,end);
else{id=url.substring(start)}return id;}
function getWorld(url){start=url.indexOf("es");
return url.substring(start,url.indexOf('.',start))}
if(url.indexOf('screen=info_player')==-1)
{link="";alert('Ejecutar en Perfil Jugador.')
}
if(link!="")window.open(link); void(0);