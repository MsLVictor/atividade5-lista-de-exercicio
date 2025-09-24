// 6) Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital, tempo inicial em meses e taxas de juros mensais, fornecidas pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os valores necessários.
// Use uma fórmula: M = C * (1+i)tOnde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

function calcularInvestimento(){
    
    let c = parseFloat(prompt("Informe o capital inicial investido:"));
    let i = parseFloat(prompt("Informe a taxa de juros mensal em porcentagem:"));
    let t = parseFloat(prompt("Informe o tempo do investimento em meses:"));

    let taxaJurosDecimal = i / 100;

    let m = c * Math.pow((1 + taxaJurosDecimal), t);

    alert("O montante final do seu investimento é: R$ " + m.toFixed(2));
}

calcularInvestimento();