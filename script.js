/*
function outraMensagem() {
    document.write ("Outro exemplo!");
}

//Caixas de mensagem
//alert
//alert ("Estou usando o alert!");

//prompt
//prompt ("Quer um prompt?");

//let nome = prompt ("Qual é o seu nome?");
//document.write(nome + ", seja bem vindo!");

//confirm
//confirm("mensagem");
/*
function confirma() {
    let opcao = confirm ("Deseja confirmar?");
    document.write ("Sua escolha foi: " + opcao);
}


let usuario = "Vanessa";
let senha = 1234;

if (usuario == "Vanessa" || senha == 1235) {
    console.log ("Usuário autenticado");
} else {
    console.log ("Erro de autenticação");
}


//SWITCH
let opcao = 9;

switch (opcao) {
    case 1:
        console.log ("Primeira opção");
        break;
    case 2:
        console.log ("Segunda opção");
        break;
    case 3:
        console.log ("Terceira opção");
        break;
    default:
        console.log ("Opção inválida");
        break;
}

//LOOPS (WHILE, FOR)
let tabuada = 4;
let contador = 1;

//WHILE
while (contador <= 10) {
    console.log(tabuada, "x", contador, "=", tabuada * contador++);
}

//DO...WHILE
do {
    console.log(contador);
    contador++;
}while (contador <= 10);

//FOR
for (contador=1; contador <= 10; contador++) {
    console.log (tabuada, "x", contador, "=", tabuada * contador);
}
*/

//FOR/IN e FOR/OFF
//FOR/IN (propriedades de um objeto)
let carro = {modelo: "Corsa", marca: "VW", ano: 2020 };

for (let caracteristica in carro) {
    console.log (caracteristica + ":" + carro[caracteristica]);
}

//FOR/OF
let letras = ["a", "b", "c"];

for (let i of letras) {
    console.log(i);
}
