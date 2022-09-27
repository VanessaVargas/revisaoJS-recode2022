//estrutura
let obj = {
    nome: "Matheus",
    idade: 30,
    profissao: "Programador",
    'linguagem utilizada': "JS",
}

//acessando as propriedades
//notação de ponto
console.log(obj.nome);

//notação de array
console.log(obj['linguagem utilizada']);

//alterar valor propriedade
obj.nome = "Vanessa";
console.log(obj);

//deletar uma propriedade
delete obj.idade;
console.log(obj);