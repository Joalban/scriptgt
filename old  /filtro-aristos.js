$('#units_table tbody:not(:first)').each(function (i, e) {
  if(!$(e).find('span.has_tooltip')[0])e.parentNode.removeChild(e);
});
