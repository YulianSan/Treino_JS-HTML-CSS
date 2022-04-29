//pegar o click do usuário
document.getElementsByTagName("button")[0]
    .onclick=
    ()=>{
        console.log("oila")
        document.getElementsByClassName("bambu")[0]
            .style.animation = "olhar-ceu-bambu 2s linear";
        
        document.body.style.animation = "olhar-ceu 2s forwards";

        setTimeout(()=>{
            document.getElementsByClassName("tanzaku maior")[0]
                .style.animation= "sugir 3s linear";
        },500);

        setTimeout(()=>{
            var novoTanzaku = document.getElementsByClassName("tanzaku maior")[0];
            novoTanzaku.style.animation="rodar 1s linear infinite";
            novoTanzaku.classList.remove("maior");
            document.getElementsByClassName("galho")[3]
                .appendChild(novoTanzaku);
            document.body.style.animation = "olhar-frente 2s forwards";
        },3500);
    }