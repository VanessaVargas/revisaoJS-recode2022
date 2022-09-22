//ARRAY
//posição começa no 0
let cores = ["azul", "vermelho", "amarelo"];
console.log(cores);

//MÉTODOS
let pessoas = [];

console.log(pessoas);

//push() - para adicionar
pessoas.push("João", "Maria");
console.log(pessoas);
pessoas.push("Ana");


//slice() - remover e criar novo elemento, mantém o array original
pessoas.push("Luis", "Fernanda");
console.log(pessoas);
//resultado = pessoas.slice(1, 3);

//console.log(resultado);

//remover elementos do array
//pop() - remove o último elemento
//pessoas.pop();
//console.log(pessoas);

//shift() - retira o primeiro elemento
//pessoas.shift();
//console.log(pessoas);

//splice() - remover elementos específicos 
//pessoas.splice(1,1);
//console.log(pessoas);

//sort() - método de ordenação
pessoas.sort();

console.log(pessoas);

//propriedade lenght - quantidade de elementos do array
console.log(pessoas.length);