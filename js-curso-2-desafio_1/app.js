let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarBotConsole() {
    console.log('O botão foi clicado');
}

function verificarBotAlerta() {
    console.log('Eu amo JS');
}

function verificarBotPromp() {
    let cidade = prompt('Escreva o nome de uma Cidade do Brasil');
    console.log(`Estive em ${cidade} e lembrei de você`);
}

function verificarBotASoma() {
    let valor1 = parseInt(prompt('Digite um número'));
    let valor2 = parseInt(prompt('Digite outro número'));

    let resultado = valor1 + valor2;

    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}