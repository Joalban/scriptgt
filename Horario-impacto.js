$('#date_arrival').after('<br / ><span id="time"></span>');
var time = $('table.vis tr:contains("Durée")').text().match(/\d{1,3}:\d{2}:\d{2}/).toString();
timeDyn(time);
void(0);
function timeDyn(time) {
	var strTime=$('#serverTime').text();
	var timeArray = strTime.split(':');
	var travArray = time.split(':');
	var H = parseInt(timeArray[0], 10) + parseInt(travArray[0], 10);
	var M = parseInt(timeArray[1], 10) + parseInt(travArray[1], 10);
	var S = parseInt(timeArray[2], 10) + parseInt(travArray[2], 10);
	if(S >= 60)	{M += 1;S -= 60;}
	if (S < 10)	{S = "0" + S;}
	if(M >= 60)	{H += 1;M -= 60;}
	if (M<10)	{M = "0" + M;}
	while (H >=24)	{H -= 24;}
	if (H < 10)	{H = "0" + H;}
	$('#time').html(H+':'+M+':'+S);
	setTimeout(function() {
		timeDyn(time);
	}, 100);
}