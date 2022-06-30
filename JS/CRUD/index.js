const usuario = {
    name : "Yulian",
    email: "knoob0733@gmail.com"
}
const posts = [];

function postAdd(post = {id:posts.length+1, name:usuario.name,conteudo:"Post vazio"}) {
    posts.push(post);
}

postAdd({id: 1,name:usuario.name,conteudo:"Meu primeiro post"});
postAdd({id: 2,name:usuario.name,conteudo:"Segundo primeiro post"});
postAdd({id: 3,name:usuario.name,conteudo:"Terceiro primeiro post"});
console.log(posts);


function postAlterarConteudo(id,conteudo="") {
    const postAlterado = posts.find( (value) => value.id === id );
    try {
        postAlterado.conteudo = conteudo;
    } catch (error) {
        console.error("Erro ao atualizar post")
    }
    
}
postAlterarConteudo(2,"Ola mundo")

