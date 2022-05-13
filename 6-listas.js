console.log(`Trabalhando com Listas`);

const salvador = `Salvador`;
const saoPaulo = `Sao Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const portoAlegre = `Porto Alegre`;
const fortaleza = `Fortaleza`;

console.log(`Destino disponíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro, portoAlegre,fortaleza);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
listaDeDestinos.push(`Porto Alegre`);
listaDeDestinos.push(`Florianopolis`);

console.log(listaDeDestinos);
