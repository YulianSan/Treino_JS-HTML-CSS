//var, let, const
//var n respeita blocos EX if(){ }, blocos são tudo aqui que está dentro de {}, mas ele respeita a de funções

//1 - exemplo Uso em If
var test = "oi";

(() => {
    console.log(`Valor 1 - ${test}`);// o resultado é undefined pois temos uma instancia da variável no if
    //var se comporta assim: ele se coloca no topo da função, mas sem valor, so em valor quando se coloca nele
    if(true){
        var test = "io if";// coloca um valor a test, esse valor é valido para toda a função, não respeita o escopo if{}
        console.log(`Valor 2 - ${test}`);
    }
    console.log(`Valor 3 - ${test}`);
})();

//operações aritmética

console.log(10**-3);//retorna 2 elevado a 3, @return 0.001

//&& e ||
console.log( false  || (()=> 10 )() );//apenas executa a segunda instrução se a primeira for false
console.log( true   || (()=> 10 )() );
console.log( true   && (()=> 10 )() );//executa a segunda quando a primeira for true
console.log( false  && (()=> 10 )() );

(() => {
    let test = "inicio -end";
    console.log(`Valor 1 - ${test}`);// mostra o valor de test
    if(true){
        let test = "no if";//cria outra variável test para esse bloco, so pode ser usado essa variável aqui dentro
        console.log(`Valor 2 - ${test}`);
    }
    console.log(`Valor 3 - ${test}`);//usa a variavel desse escopo, a com valor igual a "inicio -end"
})();

//2 - exemplo Uso em For

for (var i = 0; i < 5; i++) {
    setTimeout(()=>console.log(`oi ${i}`),1000);//retorna oi - 5, 5 vezes pois var n respeeita o bloco, e como se estivesse usando uma variável global
}
console.log(i);//funciona fora do escopo for, ele n repeita

for (let i = 0; i < 5; i++) {
    setTimeout(()=>console.log(`oi ${i}`),1000);//retorna oi 0, 1, 2, 3, 4. Respeita o bloco, é como se estivesse criando uma variável para cada loop
}