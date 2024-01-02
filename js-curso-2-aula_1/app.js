/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';*/

/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

let numSecreto = gerarNumAleatorio();

//melhor maneiro para deixar o código, boas praticas 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numSecreto);
}

function gerarNumAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//Desafios
//1. Criar uma função que exibe "Olá, mundo!" no console.
/*function testeDesafio() {
    console.log('Olá, mundo!');
}*/

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
/*function testeDesafio() {
    let nome = prompt('Digite seu nome');
    console.log(`Olá, ${nome}`);
}*/

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
/*function testeDesafio() {
    let valor = parseInt(prompt('Digite um valor'));
    let resultado = valor * 2;
    console.log(`O dobro desse valor é ${resultado}`);
}*/

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
/*function testeDesafio() {
    let valor1 = parseInt(prompt('Digite o 1º valor'));
    let valor2 = parseInt(prompt('Digite o 2º valor'));
    let valor3 = parseInt(prompt('Digite o 3º valor'));
    let resultado = (valor1 + valor2 + valor3) / 3;
    console.log(`A média desse valor é ${resultado}`);
}*/

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
/*function testeDesafio() {
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite um número');
    let comparar = numero1 > numero2 ? numero1 : numero2;
    console.log(`Os numéros digitados foram ${numero1} e ${numero2} e o maior foi ${comparar}`);
}*/

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
/*function testeDesafio() {
    let valor = parseInt(prompt('Digite um valor'));
    let resultado = valor * valor;
    console.log(`O dobro desse valor é ${resultado}`);
}*/