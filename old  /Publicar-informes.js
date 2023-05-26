var text = document.getElementById("message").value;
text = text.replace(/Informes enviados:/g,"");
text = text.replace(/\[report\]/g, "[report_display]");
text = text.replace(/\[\/report\]/g, "[/report_display]");
document.getElementById("message").value = "Informes enviados: [spoiler]" + text + "[/spoiler]";
