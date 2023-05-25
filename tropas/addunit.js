if(typeof cookieName === 'undefined')
  var cookieName="farmeruk";
var doc=document;
var url=document.URL;
if(url.search(/screen=barracks/)!= -1 &&
if(url.search(/screen=stable/)!= -1 &&
if(url.search(/screen=garage/)!= -1 &&
   url.search(/try=confirm/)===-1 &&
   document.forms[0].x.value===""
   && document.forms[0].y.value==="") {
    if(window.frames.length>0) {
        doc=window.main.document;
    }
    url=document.URL;
    if(url.indexOf('screen=place')==-1) {
        alert('Ejecutar desde Cuartel/Cuadra/Taller!');
    }
    coords_ataque=coords_ataque.split(" ");
    var index=0;
    farmcookie=document.cookie.match('(^|;) ?'+ cookieName +'=([^;]*)(;|$)');
    if(farmcookie!=null) {
        index=parseInt(farmcookie[2]);
    }
    if(index>=coords_ataque.length) {
        index = confirm('Tropas en Cola Terminado, Continuar?') ? 0 : -1;
    }
    if(index>=0) {
        coords_ataque=coords_ataque[index];
        coords_ataque=coords_ataque.split("|");
        index=index+1;
        cookie_date=new Date(2099,11,11);
        document.cookie =cookieName+"="+index + ";expires="+cookie_date.toGMTString ();
        doc.forms[0].x.value=coords_ataque[0];
        doc.forms[0].y.value=coords_ataque[1];
        try{
            var j = $('input#unit_input_spear').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].spear,Math.min(spear,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_sword').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].sword,Math.min(sword,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_axe').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].axe,Math.min(axe,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_archer').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].archer,Math.min(archer,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_spy').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].spy,Math.min(spy,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_light').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].light,Math.min(light,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_marcher').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].marcher,Math.min(marcher,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_heavy').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].heavy,Math.min(heavy,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_ram').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].ram,Math.min(ram,j));
        }catch(e){};
        try{
            var j = $('input#unit_input_catapult').next().text().match(/\((\d+)\)/)[1];
            insertUnit(doc.forms[0].catapult,Math.min(catapult,j));
        }catch(e){};
        try{apoiar?document.forms[0].support.click():document.forms[0].attack.click()}catch(e){document.forms[0].attack.click()};
    }
} else if(url.search(/screen=place/)!= -1 &&
          url.search(/try=confirm/)===-1 &&
          parseInt(doc.forms[0].x.value)>0 &&
          parseInt(doc.forms[0].x.value)<999 &&
          parseInt(doc.forms[0].y.value)>0 &&
          parseInt(doc.forms[0].y.value)<999) {
            try{apoiar?document.forms[0].support.click():document.forms[0].attack.click()}catch(e){document.forms[0].attack.click()};
} else if(url.search(/screen=place/)!= -1 && url.search(/try=confirm/)!=-1) {
    document.forms[0].submit.click();
}else{
    alert('Ejecutar desde Cuartel/Cuadra/Taller!!');
}
void(0);