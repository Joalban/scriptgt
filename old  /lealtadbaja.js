ScriptAPI.register( 'Lealtad Baja v 1.0', 8.0, 'Black Dragon', 'tw@hemispheria.net' );
/*Javascript:$.getScript("http://www.hemispheria.net/scripts/pueblo/lealtadbaja.js"); void(0);*/

docTable = document.getElementById('combined_table');
for(i=docTable.rows.length-1;i>0;i--)	{
	var docRow = docTable.rows[i];
	$.ajax(
			{
				type:"POST",
				async:false,
				url:docTable.rows[i].getElementsByTagName('a')[0].getAttribute('href'),
				success:function(e)	{
					if(!$('th:contains("Lealtad")',e).text())	{
						docRow.parentNode.removeChild(docRow);
					}
				}
			}
		);
}
