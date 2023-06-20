/*
IMC é sigla para Indice da Massa Corpórea,
parametros adotados pela Organização Mundial de saúde
para calcular o peso ideal de cada pessoa.

Base de calculo do IMC.

Dividindo o peso (Kg) pela
altura ao quadrado(em m),seguindo
seguindo está base de calculo:

IMC = peso / (altura x altura).

Retornando os seguintes valores para o usuário:

Resultado do Calc   |  Resposta para o usuário
Abaixo de 17,00     |  Abaixo do peso
Entre 17,00 e 18,49 |  Peso ideal
Entre 18,50 e 24,99 |  Acima do peso
Entre 25,00 e 29,99 |  Obesidade I
Entre 30,00 e 39,99 |  Obesidade II

*/

const peso = 100;
const altura = 1.7;
const imc = Number((peso / (altura * altura)).toFixed(2)); // toFixed retorna as casas decimais pedidas aqui pedimos apenas duas apos o ponto.

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso");
        break;

    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
        break;

    case imc >= 18.50 && imc <= 24.99:
        console.log("Peso ideal");
        break;

    case imc >= 25 && imc <= 29.99:
        console.log(" Acima do peso");
        break;

    case imc >= 30 && imc <= 34.99:
        console.log(" Obesidade I");
        break;

    case imc >= 34.99 && imc <= 39.99:
        console.log(" Obesidade II");
        break;

}