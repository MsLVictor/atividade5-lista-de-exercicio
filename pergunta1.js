// 1) Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1,5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let paisA = 80000;
let paisB = 200000;

const taxaPaisA = 3;
const taxaPaisB = 1.5;

let ano = 2025;
let contador = 0;


while (paisA < paisB) {
    paisA = (paisA * taxaPaisA / 100) + paisA;
    paisB = (paisB * taxaPaisB / 100) + paisB;
    ano++;
    contador++;

    console.log("Estamos no ano de " + ano);
    console.log("Pais A agora tem " + paisA + "Habitantes.");
    console.log("Pais B agora tem " + paisB + "Habitantes")
};


console.log("Demoramos " + contador + " anos para ultrapassar a quantidade de habitantes do País B.")