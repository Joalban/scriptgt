function ajax(targetUrl)	{
		var xmlhttp;
		if (window.XMLHttpRequest)	{
			xmlhttp=new XMLHttpRequest();
			}
		else	{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		xmlhttp.open("GET",targetUrl,false);
		xmlhttp.send("");
		req = document.createElement("body");
		req.innerHTML = xmlhttp.responseText;
		vil = req.innerHTML.match(/\/game.php\?village=\d+&amp;screen=place&amp;try=confirm&amp;type=same&amp;report_id=\d+/);
		return vil;
}
function getWorld()	{
	world = window.location.href;
	var doc = world.substring(world.lastIndexOf("http"));
	var start = doc.indexOf("http");
	var end = doc.indexOf(".");
	var server;
	server = doc.substring(start, end);
	return server;
}
function getMoney()	{
	var bod = document.getElementById('content_value');
	var rapportsTable = bod.getElementsByTagName('table')[3];
	for(var i=1; i < rapportsTable.rows.length; i++)
		{
			var commandUrl = rapportsTable.rows[i].cells[0].getElementsByTagName('a')[0].href;
			var command = ajax(commandUrl);
			var txtUrl = getWorld() + '.guerrastribales.es' + command;
			var url = txtUrl.replace(/&amp;/gi,'&');
			
			window.open(url);
			
		}

			
			
}
getMoney();
