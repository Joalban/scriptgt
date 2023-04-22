ScriptAPI.register( 'Informes Masivos', 7.4, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/informass.js"); void(0);*/

javascript: var text= document.getElementById("message").value; text = text.replace(/Informes%20enviados:/g,""); text%20= text.replace(/\[report\]/g, "[report_display]"); text = text.replace(/\[\/report\]/g, "[/report_display]"); document.getElementById("message").value ="Informes Enviados:[spoiler]" + text + "[/spoiler]";
