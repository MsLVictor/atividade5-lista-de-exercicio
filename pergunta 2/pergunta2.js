// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. Utilize obrigatoriamente a função prompt() para coletar os números.

let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i+1) + "º número."));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

}

console.log("Você digitou " + pares + " números pares e " + impares + " impares.")


