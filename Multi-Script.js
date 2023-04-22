javascript: 
var numscript = parseInt(prompt("1 = Extraer Coordinadas Especificas (MAPA)" + "\n" + "2 = Extraer Horarios Envio por Coordenadas (VISION COMBINADA)" + "\n" + "3 = Attack Selector (PERFIL)" + "\n" + "4 = Generador Fake-Ataque (PERFIL)" + "\n" + "5 = Mandar Recursos Preestabelcidos a Coordenadas (MERCADO)"));

switch (numscript) {
	case 1:
	$.getScript("https://www.scriptgt.125mb.com/gt/BBcode-pueblo.js");
	break;
	
	case 2:
	$.getScript("https://www.scriptgt.125mb.com/gt/planeador-de-ataque.js");
	break;
	
	case 3:
	$.getScript("https://www.scriptgt.125mb.com/gt/Attack-selector.js");
	break;
	
	case 4:
	$.getScript("https://www.scriptgt.125mb.com/gt/Fake-Ataque.js");
	break;

	case 5:
	$.getScript("https://www.scriptgt.125mb.com/gt/Recursos-Coord.js");
	break;

	default:
	alert("Solo hay 5 Scripts!!");
		}


void(0);