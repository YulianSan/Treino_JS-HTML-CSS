const teclas = document.getElementsByClassName("tecla");

const funcoesTeclas = {
    a(){
        teclas[0].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[0].classList.toggle("ativo")
        },200)
    },
    s(){
        teclas[1].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[1].classList.toggle("ativo")
        },200)
    },
    d(){
        teclas[2].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[2].classList.toggle("ativo")
        },200)
    },
    f(){
        teclas[3].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[3].classList.toggle("ativo")
        },200)
    },
    g(){
        teclas[4].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[4].classList.toggle("ativo")
        },200)
    },
    h(){
        teclas[5].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[5].classList.toggle("ativo")
        },200)
    },
    j(){
        teclas[6].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[6].classList.toggle("ativo")
        },200)
    },
    k(){
        teclas[7].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[7].classList.toggle("ativo")
        },200)
    },
    l(){
        teclas[8].classList.toggle("ativo")
        setTimeout(()=>{
            teclas[8].classList.toggle("ativo")
        },200)
    }
}

window.addEventListener("keydown",(e)=>{
    
    if(funcoesTeclas.hasOwnProperty(e.key.toLowerCase()))
        funcoesTeclas[e.key.toLowerCase()]();

    else return false;
    
})