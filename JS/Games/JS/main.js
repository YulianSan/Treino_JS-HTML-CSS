const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function main(){
    canvas.width  = document.body.clientWidth-20;
    canvas.height = document.body.clientHeight-20;
    
    ctx.fillStyle = "#00a";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    desenharPirata(150,150);
    
    requestAnimationFrame(main);
}
main();