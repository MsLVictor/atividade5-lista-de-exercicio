// 4) Um funcionário de uma empresa recebe aumento salarial anualmente. 

// - Sabe-se que:Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// - Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
// - A partir de 1997 (inclusive), os aumentos salariais sempre serão exigidos ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. 
// - Após concluir isto, faça uma segunda versão do seu código que permite ao usuário informar o salário inicial do funcionário. Utilize obrigatoriamente a função prompt() para receber o salário inicial.

let salarioAtual = 10000n;
let anoAtual = new Date().getFullYear();
const anoInicio = 1995;
let percentual = 15n;

for (let ano = 1996; ano <= anoAtual; ano++){
    salarioAtual += (salarioAtual * percentual) / 10000n;

    percentual *= 2n;
}

const salarioString = salarioAtual.toString();
const centavos = salarioString.slice(-2);
const reais = salarioString.slice(0, -2);

console.log(`O salário atual do funcionário é R$ ${reais},${centavos} no ano de ${anoAtual}`);


