//map, filter e reduce - mapeiam e criam um novo array
//map
let numeros = [1, 2, 3, 4, 5];
const duplicar = (x) => x * 2;

let duplicados = numeros.map(duplicar);
console.log (duplicados);

//segundo exemplo - com objetos
const produtos = [
    { id: 1, categoria: "limpeza", nome: "amaciante"}, 
    { id: 2, categoria: "limpeza", nome: "detergente"},
    { id: 3, categoria: "alimento", nome: "ovo"},
    { id: 4, categoria: "alimento", nome: "alface"},
]

const ids = produtos.map((p) => p.nome );
console.log(ids);

/*
//como seria no React
function List() {
    return (
        <ul>
            {produtos.map((p => (
                <li key={p.id}>{p.nome}</li>
            ))}
        </ul>
    )
}
*/

//filter 
const isAlimento = (produto) => produto.categoria === "alimento";
const alimentos = produtos.filter(isAlimento);

console.log(alimentos);

//map e filter
const idsAlimento = produtos
.filter((p) => p.categoria === "alimento")
.map((p) => p.id);

console.log(idsAlimento);

//reduce
const num = [1, 2, 3, 4];
const somar = (acumulado, x) => acumulado + x;
const total = numeros.reduce(somar);

console.log(total);

//forEach(): executando uma função para cada elemento
cores = ["Verde", "Azul", "Vermelho"];

function imprimir(item) {
    console.log(item);
}

cores.forEach(imprimir);

//mapeando elementos específicos
coresIniciadasComV = [];
novoIndice = 0;

function selecionarCores (item, indice) {
    if (cores[indice].indexOf("V") == 0) {
        coresIniciadasComV[novoIndice] = cores[indice];
        novoIndice++;
    }
}

cores.forEach(selecionarCores);
console.log(coresIniciadasComV);
