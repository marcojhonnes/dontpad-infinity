Sejam bem vindos a aula 06 de javascript 2024

=================================================
Exercicios 

FUNÇÕES DOUG:
https://drive.google.com/drive/folders/1jlkBO_VtiG3sVJikqqsMo_RAHtQA810s?usp=drive_link


124 livros:
https://drive.google.com/drive/folders/1MzB9zDLBZiZ7BsZ774a0hLU7a4oJTsZZ?usp=sharing


// Ex01. Criem uma função que recebe 3 notas como parametro, e retorna
// a média entre as notas.

function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}


const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 9.0;

const media = calcularMedia(nota1, nota2, nota3);
console.log(`A média das notas é: ${media.toFixed(2)}`);

-----------------------------------------------------------------------------------------------------
// Ex02. Faça um programa que o usuário digite dois numeros em dois inputs, e ao clicar em "Somar"
deve mostrar a soma dos valores

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Soma de Dois Numeros </title>
</head>
<body>
    <h1> Soma de Dois Numeros  </h1>
    <label for="numero1">Numero 1: </label>
    <input type="number" id="numero1"> <br>
    <label for="numero2">Numero 2: </label>
    <input type="number" id="numero2">
    <button onclick="mostrarSoma()"> Somar </button>

    <h2 id="resultado"> </h2>

    <script>
        // Defina a função somar: "function somar(numero1, numero2)" que vai retornar a soma dos valores
        function somar(numero1, numero2) {
            return numero1 + numero2
        }

        function mostrarSoma() {
            // Busque o valor do numero1
            let numero1 = Number(document.getElementById('numero1').value)

            // Busque o valor do numero2
            let numero2 = Number(document.getElementById('numero2').value)

            // Capture o elemento com o Id "resultado" e chame a função soma para mostrar o resultado
            let soma = somar(numero1, numero2)

            let resultado = document.getElementById('resultado')
            resultado.innerText = `Resultado: ${soma}`
        }
    </script>
</body>
</html>

-----------------------------------------------------------------------------------------------------
// Ex03. Faça um programa que o usuário digite peso e a altura em dois inputs, e ao clicar em "Calcular"
deve mostrar a soma dos valores

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Soma de Dois Numeros </title>
</head>
<body>
    df[(df['Temperatura'] > 50) & (df['Umidade'] > 100)] [['Estação', 'Índice UV']]


    <h2 id="resultado"> </h2>

    <script>
        // Defina a função calcularImc: "function calcularImc(peso, altura)" que vai retornar o IMC
        // Formula: peso / (altura * altura)

        function mostrarImc() {
            // Busque o valor do peso

            // Busque o valor da altura

            // Capture o elemento com o Id "resultado" e chame a função calcularImc para mostrar o resultado
        }
    </script>
</body>
</html>


=================================================
funcoes1.js


function somarValores(valores) {
    let soma = 0
    
    for (let valor of valores) {
        soma += valor
    }

    return soma
}

let array1 = [65, 23, 76, 87, 56, 98, 45]
let array2 = [3, 7, 9, 3, 87, 45, 78]

let soma1 = somarValores(array1)
let soma2 = somarValores(array2)

console.log(soma1)
console.log(soma2)

------------------------------------------------------------
funcoes2.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Funções 1 </title>
</head>
<body>
    <h1> Saudacao </h1>
    <label for="nome">Nome: </label>
    <input type="text" id="nome" placeholder="Digite seu nome: ">
    <button onclick="mostrarSaudacao()"> Enviar </button>

    <h2 id="mensagem"> </h2>

    <script>
        function saudacao(nome) {
            return `Olá ${nome}, Seja Bem Vindo!`
        }

        function mostrarSaudacao() {
            // Buscando o nome
            let nome = document.getElementById('nome').value

            // Buscando o elemento com o id "mensagem"
            let mensagem = document.getElementById('mensagem')

            // Colocando o resultado da função saudação.
            mensagem.innerText = saudacao(nome)
        }
    </script>
</body>
</html>


























