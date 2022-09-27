//funcao sem retorno
//executam document.write ou console.log
function cumprimento() {
    console.log ("Olá");
}

cumprimento();

//funcao com retorno
function saudacao() {
    return "Olá de novo";
}
console.log(saudacao());

//funcao anônima - função sem nome de função, utilizada como variável

//arrow function
const quadrado = (num) => num * num;

console.log(quadrado(2));

//funcao simples
function quadrado2(num) {
    let resposta = num * num;
    return resposta;
}

console.log(quadrado2(3));