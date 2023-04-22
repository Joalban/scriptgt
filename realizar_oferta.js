var table = $('[id$=_table]').filter(':not(#group_table)').get(0);
var rows = [];
var ii = ($('[src*=note.png],[class*=note-icon]').length > 0) ? 1 : 0;
var q;table.tBodies[0].rows[0].innerHTML += "<th><b>Realizar Ofertas</b></th>";
for (q = 1; q < table.tBodies[0].rows.length; q++) {
  var row = table.tBodies[0].rows[q];
  vid = row.getElementsByTagName('a')[0].href.match(/village\=\d+/);
  row.innerHTML += '<td><a href="game.php?' + vid + '&screen=market&mode=other_offer"> Realizar Ofertas </a></td>';
  var coords = $.trim($(row.cells[ii]).text()).match(/\d+\|\d+/g);
  coords = coords ? coords[coords.length - 1] : null;
  rows[q - 1] = [coords, row];
}
for (q = 0; q < rows.length; q++) {
  table.tBodies[0].appendChild(rows[q][1]);
}