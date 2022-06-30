function soma(a){
    return function (b) {
        return a + b;
    }
}

// var somando = soma(1)(2);
var somando = soma(1);
var somando2 = somando(2);
console.log(somando2);

//arrow function
const arrowFn = v => v+10;//quando ele n tem {} e so tem uma expressão ele já da um retorno automatico
const arrowFn2 = v =>{
    if(isNaN(v)){
        return v;
    }
    return "É um número :("
}
console.log(arrowFn(10));//retorna 20
console.log(arrowFn2(2));// retorna É um número :(

(()=>{
    this.name = "arrow function"
    const getArrow = ()=> this.name;//ele pega o contexto que está sendo criado
    
    function getName(){//vai pegar o contexto que está sendo chamado
        return this.name;
    }
    console.log(getName());//pega o contexto desse escopo

    const user = {
        name: "Name no objeto de execução",
        getName,
        getArrow
    }

    console.log(user.getArrow());//pega o contexto de onde foi criado
    console.log(user.getName());//pega o contexto de onde está sendo chamado
})();

console.log("--------------- iterator e yield ----------------")
function* oi(params) {//precisa do * na frente de function
    let a=0;
    while(a<=10){
        yield a++;
    }
}
const ele = oi();
console.log(ele.next());
console.log(ele.next());
console.log(ele.next());
// console.log(ele.throw(1));