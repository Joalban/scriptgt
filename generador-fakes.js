javascript:var%20D=document;if(window.frames.length>0)D=window.main.document;url=D.URL;if(url.indexOf('screen=info_player')==1){alert('Ir%20al%20perfil%20del%20jugador!');end();}var%20tds=D.getElementsByTagName("TD");var%20K=new%20Array();for(var%20idx=0;idx<100;idx++)K[idx]=new%20Array();var%20C=new%20Array();for(var%20idx=0;idx<tds.length;idx++){var%20xy=tds[idx].innerHTML;if(/^\d+\|\d+$/.test(xy)){C.push(xy);var%20xys=xy.split('|');K[Math.floor(parseInt(xys[0])/100)+Math.floor(parseInt(xys[1])/100)*10].push(xy);}}C=C.join('%20');var%20prefix='<textarea%20cols=80%20rows=10>javascript:sp=0;sw=0;ax=0;arch=0;scout=0;lc=0;march=0;hv=0;ra=0;cat=1;kn=0;snob=0;coords=\'';var%20postfix='\';var%20doc=document;if(window.frames.length>0)doc=window.main.document;url=doc.URL;if(url.indexOf(\'screen=place\')==-1)alert(\'Este%20script%20necesita%20ser%20ejecutado%20en%20la%20Plaza%20de%20reuniones\');coords=coords.split(\'%20\');index=Math.round(Math.random()*(coords.length-1));coords=coords[index];coords=coords.split(\'|\');doc.forms[0].x.value=coords[0];doc.forms[0].y.value=coords[1];insertUnit(doc.forms[0].spear,sp);insertUnit(doc.forms[0].sword,sw);insertUnit(doc.forms[0].axe,ax);insertUnit(doc.forms[0].archer,arch);insertUnit(doc.forms[0].spy,scout);insertUnit(doc.forms[0].light,lc);insertUnit(doc.forms[0].marcher,march);insertUnit(doc.forms[0].heavy,hv);insertUnit(doc.forms[0].ram,ra);insertUnit(doc.forms[0].catapult,cat);insertUnit(doc.forms[0].knight,kn);insertUnit(doc.forms[0].snob,snob);void(0)</textarea><br><br>';var%20S='<b>GuerrasTribales%20Generador%20Fake%20by%20Chawento</b><hr>Todos%20los%20Pueblos:<br>'+prefix+C+postfix;for(var%20idx=0;idx<100;idx++)if(K[idx].length>0){var%20Ks=K[idx].join('%20');S+='<br><br>K'+idx+'%20Pueblos:<br>'+prefix+Ks+postfix;}var%20popup=window.open('about:blank','twfg','width=700,height=500,scrollbars=1');popup.document.open('text/html','replace');popup.document.write(S);popup.document.close();void(0)