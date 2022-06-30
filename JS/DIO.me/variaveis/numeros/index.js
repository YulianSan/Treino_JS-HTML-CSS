var Numero = 1000.20390;
console.log(Numero.toFixed(2)); //quantos números vão ficar depois da vírgula @return 1000.20;
console.log(Numero.toPrecision(1));//quantos números ele terá @return 1e+3, "e" significa quantos zeros ele tem;
console.log(typeof Numero.toString());//converte um número em string @return string;
console.log(parseFloat(Numero));//converte em um float, ele ignora os 0 no final
console.log(parseInt(Numero));//converte em um inteiro, ele ignora todos os valores depois da vírgula
