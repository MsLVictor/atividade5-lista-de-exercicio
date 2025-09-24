// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let contagem = parseInt(prompt("Quantos números deseja adicionar na lista? "));

let menorValor;
let maiorValor;
let soma = 0;

for (let i = 0; i < contagem; i++) {
    const numero = parseInt(prompt("Digite o " + (i+1) + "º número."));

    if (i === 0){
        menorValor = numero;
        maiorValor = numero;
    }

    if (numero < menorValor) {
        menorValor = numero
    } else if (numero > maiorValor) {
        maiorValor = numero;
    }

    soma += numero;
}

alert(" O Menor valor é " + menorValor + ". O maior valor é: " + maiorValor + ". E a soma de todos os valores é " + soma + ".");