function createEstrela() {
    let max    = 4;
    let min    = 2;
    let size   = Math.floor(Math.random()* ( max-min ) + min);
    let left   = Math.floor(Math.random()*window.innerWidth-size);//-size por causa do tamanho da estrela
    let top    = Math.floor(Math.random()*window.innerHeight-(size));
    let html   = `
        <div 
            class='estrela' 
            style='
                --left:${left}px;
                --top:${top}px;
                --size:${size}px'
        ></div>`;
    return html;
}
for (let i = 0; i < 300; i++) {
    if(i<80){
        document.getElementsByClassName("frente")[0].innerHTML = 
            createEstrela() + document.getElementsByClassName("frente")[0].innerHTML;
    }
    else{
        document.getElementsByClassName("ceu")[0].innerHTML    = 
            createEstrela() + document.getElementsByClassName("ceu")[0].innerHTML;
    }
}

