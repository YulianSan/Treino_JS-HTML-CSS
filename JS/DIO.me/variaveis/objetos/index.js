const myObject = {
    FirstName:"Yulian",
    LastName:"Almanza",
    age:17,
    getFullName(){
        return this.FirstName+ " " +this.LastName;
    }
};

console.log(`Maneiras de chamar uma propriedade de um objeto\n${myObject.FirstName}\n${myObject['FirstName']}`);
//pode se chamar com . ou com [''] tipo uma string
console.log(myObject["getFullName"]());

delete myObject.age;//deleta uma propriedade de um objeto
console.log(myObject.age);//vai retornar um undefined

console.log(Object.keys(myObject));//retorna todos os nomes de cada propriedade desse objeto 
console.log(Object.values(myObject));//retorna todos os valores de cada propriedade
console.log(Object.entries(myObject));//retorna um array que contem outro array com o nome e valor de cada propriedade
console.log({...myObject,...{create:"2022-05-08 22:34:12"}});//junta dois objetos

Object.freeze(myObject);//deixa congelado um objeto, deixando impossível a troca de dados, alteração ou criação
myObject.newData = "oi";//não vai funcionar
console.log(myObject.newData);//retorna undefined

const myObject2 = { FirstName: "Singed" };
Object.seal(myObject2);//deixa apenas fazer alterações, não deixa criar e deletar

myObject2.newData = "oi";//não vai funcionar
delete myObject2.FirstName;//não vai funcionar
myObject2.FirstName="Yulian - 2";//funciona
console.log(myObject2);

console.log(myObject.hasOwnProperty("FirstName"));// vê se um objeto tem uma propriedade

for(let key in myObject){//percorrer um objeto
    console.log(myObject[key]);
}
