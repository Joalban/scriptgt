/*"lanca","espada","barbaro","arqueiro","explorador","cavLeve","CavArqueiro","CavPesada","Ariete","Catapulta"
Script modifcado por Relaxeaza
*/
if(game_data.mode!='mass')$(location).attr('href',game_data.link_base_pure+'train&mode=mass');
function D(a,b){
    v=[];
    if(a.length==b.length){
        for(t=0;t<a.length;t++){
            if(b[t]!=0){v[t]=a[t]*1.0/b[t]}else{v[t]=0}}}return v
}
function Q(r){
    v=[0,0,0,0,0,0,0,0,0,0];
    for(u=3;u<r.cells.length;u++){
        try{v[u-3]=parseInt(r.cells[u].childNodes[1].childNodes[1].firstChild.title,10)}catch(e){}
        if(isNaN(v[u-3])){v[u-3]=0}
    }
    return v
}
function R(r){
    v=[0,0,0,0];
    var s=r.cells[1].textContent.split("\n");
    var f=r.cells[2].innerHTML.split("/");
    v[0]=parseInt(s[1].replace(".",""),10)-res[0];v[1]=parseInt(s[2].replace(".",""),10)-res[1];
    v[2]=parseInt(s[3].replace(".",""),10)-res[2];v[3]=f[1]-f[0]-farm;
    return v
}
function P(r){v=[0,0,0,0,0,0,0,0,0,0];
    for(u=3;u<r.cells.length;u++){
        try{v[u-3]=parseInt(r.cells[u].childNodes[1].textContent.split("\n")[2],10)}catch(e){}
        if(isNaN(v[u-3])){v[u-3]=0}
    }
    return v
}
c=$("table.vis");
c=c[2].rows;
if($("#mass_train_table [src*=unit_archer]").length==0){
f=["spear","sword","axe","spy","light","heavy","ram","catapult"];
s=[[50,30,10,1],
  [30,30,70,1],
  [60,30,40,1],
  [50,50,20,2],
  [125,100,250,4],
  [200,150,600,6],
  [300,200,200,5],
  [320,400,100,8]]
}else{
    f=["spear","sword","axe","archer","spy","light","marcher","heavy","ram","catapult"];
    s=[[50,30,10,1],
      [30,30,70,1],
      [60,30,40,1],
      [100,30,60,1],
      [50,50,20,2],
      [125,100,250,4],
      [250,100,150,5],
      [200,150,600,6],
      [300,200,200,5],
      [320,400,100,8]]
}
for(r=1;r<c.length;r++){
    b=[];
    z=[0,0,0,0];
    for(i=0;i<f.length;i++){
        b[i]=units[i]-(Q(c[r])[i]+P(c[r])[i]);
        if(b[i]<0){b[i]=0}for(j=0;j<4;j++){
            z[j]+=s[i][j]*b[i]
        }
    };
    a=D(R(c[r]),z),h=a[0];
    for(t=1;t<a.length;t++){
        if(a[t]<h){h=a[t]}
    }
    if(h>1.0){
        h=1.0
    }
    for(i=0;i<f.length;i++){
        n=b[i]*h;if(n<0){
            n=0
        }
        if(n>1){
            if(c[r].cells[3+i].childNodes[3]){
                x=c[r].cells[3+i].childNodes[3];
                    x.value=parseInt(n,10)
            }
        }
    }
}
end();