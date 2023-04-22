ScriptAPI.register( 'BBcode Pueblo v 1.0', 8.3, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/pueblo/bbcode-pueblo.js"); void(0);*/

var win = (window.frames.length > 0) ? window.main : window;
var coords = [];
var outputID = 'villageList';
var encodeID = 'cbBBEncode';
var popupID = 'opPopUp';
var isEncoded = true;
function fnClean() {
  coords = [ ];
  fnRefresh();
}
function fnRefresh() {
  win.$('#' + outputID).attr('value', coords.map(function (e) {
    return isEncoded ? '[claim]' + e + '[\/claim]' : e;
  }).join(isEncoded ? '\n' : ' '));
}
win.$(win.document).ready(function () {
  if (win.$('#' + outputID).length <= 0) {
    if (win.game_data.screen == 'map') {
      TWMap.popup.unregister();
			var srcHTML=
				'<div id="coord_picker">'+
					/*'<span style="color:blue;text-decoration:underline;">dalesmckay\'s co-ordinate picker v7.1:</span><br/><br/>'+*/
					'<input type="checkbox" id="cbBBEncode" onClick="isEncoded=this.checked;fnRefresh();"'+(isEncoded?'checked':'')+'/>BB-Codes '+
          '<input type="checkbox" id="opPopUp" onclick="this.checked?TWMap.popup.register():TWMap.popup.unregister();"/> Popup '+
          '<a href="javascript:void(0);" onclick="fnClean();">» Limpiar</a>'+
					'<textarea id="'+outputID+'" cols="40" rows="10" value="" onFocus="this.select();"/>'+
				'</div>';
      ele = win.$('.minimap_container').after(win.$(srcHTML));
      win.TWMap.map._handleClick = function (e) {
        win.$('#'+popupID).attr('checked')?TWMap.popup.register:TWMap.popup.unregister();
        if (this.mover && this.mover.moveDirty) return false;
        var pos = this.coordByEvent(e);
        if(TWMap.villages[pos.join('')]) {
          var coord = pos.join('|');
          var ii = coords.indexOf(coord);
          if (ii >= 0) {
            coords.splice(ii, 1);
          } else {
            coords.push(coord);
          }

          fnRefresh();
        }
        return false;
      };
    } else {
      alert("Ejecute Script en MAPA\n Redireccionando al MAPA ahora...");
      self.location = win.game_data.link_base_pure.replace(/screen\=\w*/i, "screen=map");
    }
  }
});