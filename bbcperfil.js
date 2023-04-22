ScriptAPI.register( 'BBcode Perfil v 1.0', 8.3, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/bbcperfil.js"); void(0);*/

javascript:
if (typeof(claim) == "undefined") var claim = 1;
if(game_data.screen!='info_player') location.search = '?village='+ game_data.village.id + '&screen=info_player&id='+ game_data.player.id;
table = $('table');
for(i=0; i<table.length; i++) {
	if(table[i].className=='main') {
		sub = table[i+2].getElementsByTagName('th')[0];
		sub.innerHTML = '[player]' + sub.innerHTML + '[/player]';
		sub = table[i+2].getElementsByTagName('a')[0];
		sub.parentNode.innerHTML = '[ally]' + sub.innerHTML + '[/ally]';
		sub = table[i+3].getElementsByTagName('th');
		sub[0].innerHTML = 'Nº.';
		sub[0].setAttribute('width','40');
		sub[1].innerHTML = 'Pueblo';
		sub[1].setAttribute('width','220');
		if (claim == 1) var codigo_bb = ["[claim]", "[/claim]"];
		else var codigo_bb = ["[claim]", "[/claim]"];
		sub = table[i+3].getElementsByTagName('td');
		for(j=0; j<sub.length; j++) {
			sub[j].innerHTML = j / 3 + 1;
			sub[++j].innerHTML = codigo_bb[0] + sub[j++].innerHTML + codigo_bb[1];
		}
		break;
	}
}void (0);
