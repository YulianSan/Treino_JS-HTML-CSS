const divs = document.querySelectorAll("div");//isso é um node list, não um array
const arrDivs = Array.from(divs);//transforma em um array
console.log(arrDivs);


console.log("----------- Add and Remove -----------------")

const animals =["Cavalo","Pica-pau","Cachorro","Vaca","Hiena"];

animals.push("Peixe");//add um novo elemento no final dele
console.log(animals);
animals.pop();//remove o ultimo elemento, o "Peixe"

animals.unshift("Sapo");//add no início do array
console.log(animals);
animals.shift();


console.log("----------- slice() -----------------")
console.log(animals.slice(0,2));//0 e aonde começa e o 2 é quantos elementos ele vai pegar
console.log(animals.slice(2))//passando apenas um parametro ele faz isso: 2-> aonde começa e ele retorna até o final do array
console.log(animals.slice(-2));//com valores negativos ele faz o inverso, pega de traz para frente, retorna os dois últimos elementos


console.log("----------- splice() -----------------")//remove ou altera elementos de um array
animals.splice(2);//ele faz como o slice(), pega de segundo elemento e vai ate o final, a diferença é que ele remove esses elementos
console.log(animals);//como dei um splice do 2 até o final, ele so tem os indices 0 e 1

animals.splice(1,0,"Gato");//na posição 1 vc remove 0 elementos e coloca o "Gato" nessa posição. Com isso ele já move os elemeto a frente dele
console.log(animals);

console.log("------------- iterar ------------------")
animals.forEach((v,i,arr)=>{//v é o valor, i o indice e o arr o array que está sendo usado
    console.log(`Animal ${v} no índice ${i} no array ${arr}`);
})

const animaisMutantes = animals.map( animal => animal + " Mutante");//tipo um foreach, mas com retorno de um novo array
console.log(...animaisMutantes);

console.log(animals.indexOf("Gato"));//pega o indice

console.log(animals.some(v => v.length>5));//ele retorna true ou false se a condição para algum elemento for verdadeira
console.log(animals.every(v => v.length>5));//todos tem que satisfazer essa condição para retornar true
