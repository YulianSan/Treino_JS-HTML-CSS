function desenharPirata(x=0,y=0){
    
    ctx.fillStyle = colors.corPele;
    ctx.fillRect(x-10,y+40,20,20);//40 90
    
    ctx.fillStyle = colors.corPreta;
    ctx.beginPath();
    ctx.fillRect(x-35,y+60,70,20);//40 90
    ctx.arc(x-40,y+80,20,0,Math.PI,true);
    ctx.fill();

    ctx.fillStyle = colors.corPele;
    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI);// 50 50
    ctx.fill();
}