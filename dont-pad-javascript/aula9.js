Sejam bem vindos a aula 7 de Javascript

-----------------------------------------------------------------------------------------

Ex01. Faça um programa que peça o peso e a altura de uma pessoa através do input, 
calcule seu IMC e mostre em uma div com o id "resultado"
Formula: peso / (altura * altura)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora IMC</title>
    <style>
        .resultado {
            color: red;
            font-weight: 700;
        }
    </style>
  </head>
  <body>
    <h1>Calculadora IMC</h1>
    <div>
      <label for="peso"> Peso </label>
      <input type="number" id="peso" step="0.01" />
    </div>
    <div>
      <label for="altura"> Altura </label>
      <input type="number" id="altura" step="0.01" />
    </div>
    <button onclick="calcularIMC()">Calcular</button>
    <br />
    <br />
    <div id="resultado"></div>

    <script>
      function calcularIMC() {
        let peso = Number(document.getElementById("peso").value);
        let altura = Number(document.getElementById("altura").value);

        let imc = peso / (altura * altura)

        let divResultado = document.getElementById('resultado')

        // Alterando Estilo
        // divResultado.style.color = 'blue'
        // divResultado.style.fontWeight = 700

        // Adicionando uma classe Pré Estilizada no CSS
        divResultado.classList.add('resultado')
        
        divResultado.textContent = `O seu imc é ${imc.toFixed(2)}`
      }
    </script>
  </body>
</html>

--------------------------------------------------------------------------------------------------------------------------------------

Ex02. Faça um programa que peça dois numeros em de mostre a multiplicação entre eles na tela

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Multiplição </title>
</head>
<body>
    <h1> Multiplicação </h1>
    <div>
        <input type="number" id="numero1" placeholder="1º Numero">
        <span> x </span>
        <input type="number" id="numero2" placeholder="2º Numero">
    </div>
    <button onclick="multiplicar()"> Calcular </button>

    <h2>Resultado: <span id="resultado"></span> </h2>

    <script>
        function multiplicar() {
            let numero1 = Number(document.getElementById('numero1').value)
            let numero2 = Number(document.getElementById('numero2').value)

            let multiplicacao = numero1 * numero2
            
            let spanResultado = document.getElementById('resultado')
            spanResultado.textContent = multiplicacao
        }
    </script>
</body>
</html>

---------------------------------------------------------------------------------------------------------------------------------

Ex03. Faça um programa que peça um valor em Dolar e quando o usuário clicar em "Converter" mostre o valor em Real
Considere o Câmbio como $1 = R$5.50

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Cambio Dolar p Real </title>
</head>
<body>
    <h1> Conversor de Moedas </h1>
    <div>
        <input type="number" id="dolar" placeholder="US$">
        <span> = </span>
        <strong> R$ <span id="real"> </span></strong>
    </div>
    <button onclick="converterDolarParaReal()"> Converter </button>

    <script>
        function converterDolarParaReal() {
            const cotacaoDolar = 5.5

            let valorDolar = Number(document.getElementById('dolar').value)
            let valorReal = valorDolar * cotacaoDolar

            const spanReal = document.getElementById('real')
            spanReal.textContent = valorReal.toFixed(2)
        }
    </script>
</body>
</html>

-----------------------------------------------------------------------------------------

Ex04. Faça um programa de simulação de juros simples, o seu programa deve ter os campos:

- valor aplicado (number)
- taxa de juros (number)
- mes ou ano (select)
- tempo de aplicação (number)

Ao clicar em calcular, mostre a seguinte mensagem:
"O seu investimento de {valor aplicado} em {tempo de aplicação} {mes ou ano} irá render {valor final}"

--------------------------------------------------------------
Revisão

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Revisão</title>
  </head>
  <body>
    <h1> Boas Vindas </h1>
    <div>
        <label for="nome"> Nome: </label> <br>
        <input type="text" id="nome" autocomplete="off"/>
    </div>
    <br>
    <button onclick="saudarOnClick()"> Enviar </button>

    <div id="resultado"></div>

    <script>
      function saudacao(nome = "Usuário") {
        return `Olá ${nome}, seja bem vindo!`;
      }

      function saudarOnClick() {
        // Capturando o Input
        let input = document.getElementById('nome')
        
        // Buscando o valor do input
        let nome = input.value
        
        // Capturando o elemento HTML para mostrar o Resultado
        let resultado = document.getElementById('resultado')

        // Chamando a função "saudacao" para montar a mensagem
        let mensagem = saudacao(nome)

        // Mostrando resultado na tela
        resultado.textContent = mensagem
      }
    </script>
  </body>
</html>

--------------------------------------------------------------------------------------

objetos.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Objetos </title>
</head>
<body>
    <script>
        // Objetos
        // Os objetos são compostos pelo conjunto de chave e valor.
        let aluno = {
            nome: 'Gabriel',
            notas: [7, 9, 8],
            media: 8
        }

        // Acessando Propriedades
        console.log(aluno.nome)
        console.log(aluno.notas)
        console.log(aluno.media)
    </script>
</body>
</html>

---------------------------------------------------------------------------------------------
calculadora.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Calculadora </title>
</head>
<body>
    <h1> Calculadora </h1>
    <div>
        <input type="number" id="numero1" placeholder="1º Numero">
        <select id="operacao">
            <option value="somar" selected> + </option>
            <option value="subtrair"> - </option>
            <option value="multiplicar"> x </option>
            <option value="dividir"> / </option>
        </select>
        <input type="number" id="numero2" placeholder="2º Numero">
    </div>
    <button onclick="calcular()"> Calcular </button>

    <h2>Resultado: <span id="resultado"></span> </h2>

    <script>
        function calcular() {
            let numero1 = Number(document.getElementById('numero1').value)
            let numero2 = Number(document.getElementById('numero2').value)
            let operacao = document.getElementById('operacao').value

            let resultado
            switch (operacao) {
                case 'somar':
                    resultado = numero1 + numero2
                    break
                
                case 'subtrair':
                    resultado = numero1 - numero2
                    break;
                
                case 'multiplicar':
                    resultado = numero1 * numero2
                    break
                
                case 'dividir':
                    resultado = numero1 / numero2
                    break
            }

            let spanResultado = document.getElementById('resultado')
            spanResultado.textContent = resultado
        }
    </script>
</body>
</html>


---------------------------------------------------------------------------------

thank you
!