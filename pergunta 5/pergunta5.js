// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido. Utilize obrigatoriamente a função prompt() para receber o salário inicial.

function CalcularCirculo () {
    const raio = parseFloat(prompt("Digite o raio do círculo: "));
    const pi = Math.PI;
    
    const area = pi * Math.pow(raio, 2);
    const perimetro = 2 * pi * raio;

    alert(`
            Resultados para um círculo com raio ${raio}:
            Área: ${area.toFixed(2)}
            Perímetro: ${perimetro.toFixed(2)}
        `)
}

CalcularCirculo();