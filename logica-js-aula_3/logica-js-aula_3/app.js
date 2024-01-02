/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
*/

//oparador ternário
/*let palavraPessoa = "";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}

//atualizando para operador ternário
let palavraPessoa = quantidadePessoas == 1 ? 'pessoa' : 'pessoas'
alert(`Este local comporta a quantidade de ${quantidadePessoas} de ${palavraPessoa}`);
*/

//Desafios
//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
//console.log('Boas vindas');

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
/*let nome = 'Marcelo';
console.log(`Olá ${nome}!`);*/

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
/*let nome = 'Marcelo';
alert(`Olá ${nome}!`);*/

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
/*let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);*/

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o 
//resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
/*let valor1 = 9;
let valor2 = 5;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);*/

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
/*let valor1 = 9;
let valor2 = 5;

let resultado = valor1 - valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);*/

//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
/*let idade = prompt('Quantos anos você tem ?');
if (idade >= 18) {
    alert('Parabéns você é Maior de idade')
} else {
    alert('Você ainda é Menor de idade =(')
}*/

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
/*let numero = prompt('Digite um número, pode ser Positivo ou Negativo');
if (numero > 0) {
    alert('Este número é Positivo')
} else {
    if (numero < 0) {
        alert('Este número é Negativo')
    } else {
        alert('Zero não é nem Positivo nem Negativo')
    }
}*/

//9. Use um loop while para imprimir os números de 1 a 10 no console.
/*let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++
}*/

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
/*let nota = 3;
if (nota >= 7) {
    alert('Aprovado');
} else {
    alert('Reprovado');
}*/

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
/*let numeroRandom = Math.random();
console.log(numeroRandom);*/

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
/*let numeroRandom = parseInt(Math.random() * 10 + 1);
console.log(numeroRandom);*/

//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
/*let numeroRandom = parseInt(Math.random() * 1000 + 1);
console.log(numeroRandom);*/