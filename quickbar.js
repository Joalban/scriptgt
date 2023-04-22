javascript: 

var doc = (window.frames.length > 0) ? window.main.document: document;
var worldid=doc.URL.match(/en\d+/);
var nas ='namehere = [';
var ias ='imageurl = [';
var sas ='hrefval = [';
var fla = '';
var noimage =0;
var infoTable = doc.getElementById("quickbar");
var itlength = infoTable.rows.length;


for (var i = 0;i < itlength;i++)
   {
    nas += '"';
    ias += '"';
    sas += '"';
    noimage=0;
    if (doc.getElementById('quickbar_'+i).getElementsByTagName('a')[0].text){
    tempnas = doc.getElementById('quickbar_'+i).getElementsByTagName('a')[0].text; if (tempnas !== 'delete'){
    nas += tempnas;} else {noimage = 1; nas += ' ';}}

    if (doc.getElementById('quickbar_'+i).getElementsByTagName("img")[0]){ias += doc.getElementById('quickbar_'+i).getElementsByTagName("img")[0].src;} else {ias += '';}

    if (doc.getElementById('quickbar_'+i).getElementsByTagName('a')[0].href){
    tempsas = doc.getElementById('quickbar_'+i).getElementsByTagName('a')[0].href;
    tempsas = tempsas.replace(/'\\'/g,"\\\\");
    tempsas = tempsas.replace(/"/g,'\\"');
    sas +=tempsas;
}

    nas += '",';
    ias += '",';
    sas += '",';
    tempnas = '';
    tempsas = '';
  }
nas=nas.replace(/,$/,"");
ias=ias.replace(/,$/,"");
sas=sas.replace(/,$/,"");

nas +='];';
ias +='];';
sas +='];';

var S0 = "javascript:";
var S1 = (nas + ias + sas);
var S2 = "function c(){  var a=document;  if(window.frames.length>0)a=window.main.document;  var b=a.createElement('script');  b.type='text/javascript';  b.src='http://miss-file.agilityhoster.com/js/distributor_private_releases.js';  a.getElementsByTagName('head')[0].appendChild(b) ; }   c();";

OUTPUT = (S0 + S1 + S2); 

var popup = window.open('about:blank', 'twfg');
popup.document.open('text/html', 'replace');
popup.document.write(OUTPUT);
popup.document.close();
void (0);