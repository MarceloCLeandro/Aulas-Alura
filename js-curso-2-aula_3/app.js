let listaDeNumSorteados = [];
let limiteDaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDaLista + 1);
    let quantidadeElementosLista = listaDeNumSorteados.length;
    if (quantidadeElementosLista == limiteDaLista) {
        listaDeNumSorteados = [];
    }
    if (listaDeNumSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumSorteados.push(numeroEscolhido);
        console.log(listaDeNumSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


let listaCompras = [];

listaCompras.push("Maçã");
listaCompras.push("Arroz");
listaCompras.push("Leite");
listaCompras.push("Pão");
listaCompras.push("Carne");

console.log(listaCompras[1]);
console.log(listaCompras[3]);
console.log(listaCompras.length);

let frutas = ["Maçã", "Uva", "Laranja"];

console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"
frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

// Desafio 
//1º Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2º Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes 
//elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

//3º Adicione à lista linguagensDeProgramacao os seguintes 
//elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

console.log(linguagensDeProgramacao);

//4º Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['Marcelo', 'Karine', 'Lucas'];

console.log(listaNomes[0]);

//5º Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNomes1 = ['Marcelo', 'Karine', 'Lucas'];

console.log(listaNomes1[1]);
//6º Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomes2 = ['Marcelo', 'Karine', 'Lucas'];

console.log(listaNomes2[2]);