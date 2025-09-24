let anoAtual2 = new Date().getFullYear();
let percentual2 = 15n;


let salarioInicialInput = parseFloat(prompt("Digite o salário inicial (Ex: 1000): "));
let seuSalario2 = BigInt(Math.floor(salarioInicialInput * 100));




for (let ano = 1996; ano <= anoAtual2; ano++) {
    
    seuSalario2 += (seuSalario2 * percentual2) / 10000n;
    
    
    percentual2 *= 2n;
}
  
const salarioString2 = seuSalario2.toString();
const centavos2 = salarioString2.slice(-2);
const reais2 = salarioString2.slice(0, -2) || '0';

alert(`O salário atual do funcionário é R$ ${reais2},${centavos2} no ano de ${anoAtual2}`);
