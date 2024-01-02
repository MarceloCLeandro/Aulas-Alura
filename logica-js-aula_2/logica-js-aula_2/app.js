/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++
    }
}
*/

// atividade controlador
/*
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}
*/


//loop infinito
/*let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
let soma = 0;
let contador = 1;

while(contador <= qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador++
}

let media = soma / qtdNumeros;

console.log(media);
*/

//Desafio
//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*let contador = 1;

while(contador < 11){
    console.log('exibir ' + contador);
    contador++
}
*/

//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
/*let contador = 10;

while(contador >= 0){
    console.log('exibir ' + contador);
    contador--
}
*/

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*let contagemRegressiva = parseInt(prompt('Digite um número para iniciar a Contagem Regressiva '));
while (contagemRegressiva >= 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--
}
*/

//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
/*let contagemProgressiva = parseInt(prompt('Digite um número para iniciar a Contagem Regressiva '));
let contador = 0;
while (contador <= contagemProgressiva) {
    console.log(contador);
    contador++
}
*/

/*let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

let temMaça = false;
let temBanana = true;

// se tem maça ou tem banama…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
*/