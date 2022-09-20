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
*/

let usuario = "Vanessa";
let senha = 1234;

if (usuario == "Vanessa" || senha == 1235) {
    console.log ("Usuário autenticado");
} else {
    console.log ("Erro de autenticação");
}

