Sejam Bem Vindos a Aula 08 de Javascript - Eventos DOM
=================================================
Ex01. Faça uma página onde você você irá resetar uma senha:

- Sua pagina deverá ter dois "<input type="password">"
- Quando o usuário clicar em um botão "salvar" você deverá verificar se as senhas são iguais.
- Se as senhas forem iguais, mostrem em um paragrafo o texto "Senha salva com sucesso.", se não mostre o texto "As senhas devem ser iguais".

========================================================
revisao_funcoes.html


<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Revisão Funções</title>
  </head>
  <body>
    <h1>Funções</h1>
    <div>
      <label for="texto"> Texto Qualquer </label><br>
      <input type="text" name="texto" id="texto" />
    </div>
    <button onclick="handleClick()"> Enviar </button>
    <p id="resultado"></p>

    <script>
        // Função Convencional
        function buscarValor(inputId) {
            const input = document.getElementById(inputId)
            return input.value
        } 

        // A principal diferença entre as funções
        // abaixo e a função convencional é que
        // na função convencional você é obrigado a 
        // nomear a função

        // Função Anônima
        const mostrarValor = function (valor) {
            const paragrafo = document.getElementById('resultado')
            
            // Atribuindo o Conteúdo de uma Tag
            // Atribuindo somente o conteúdo de texto
            // paragrafo.innerText = valor
            paragrafo.textContent = valor

            // Interpreta Tag HTML que estiverem no texto
            // paragrafo.innerHTML = valor
        }

        // Funções de Seta (Arrow Function)
        const handleClick = () => {
            const valor = buscarValor('texto')
            mostrarValor(valor)
        }

    </script>
  </body>
</html>
		
--------------------------------------------------------------------------
ex01.html


<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset de Senha</title>
  </head>
  <body>
    <h1>Digite sua Nova Senha</h1>
    <div>
      <div>
        <label for="senha"> Nova Senha </label> <br />
        <input type="password" name="senha" id="senha" />
      </div>
      <div>
        <label for="confirmar-senha"> Confirme sua Senha </label><br />
        <input type="password" name="confirmar-senha" id="confirmar-senha" />
      </div>
      <button onclick="handleClick()">Salvar</button>
    </div>
    <p id="mensagem"></p>

    <script>
        function handleClick() {
            const senha = document.getElementById('senha').value
            const confirmarSenha = document.getElementById('confirmar-senha').value
        
            const pMensagem = document.getElementById('mensagem')

            if (senha == confirmarSenha) {
                pMensagem.textContent = 'Senha salva com sucesso.'
            } else {
                pMensagem.textContent = 'As senhas devem ser iguais.'
            }
        }
    </script>
  </body>
</html>

-----------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset de Senha</title>
  </head>
  <body>
    <h1>Digite sua Nova Senha</h1>
    <div>
      <div>
        <label for="senha"> Nova Senha </label> <br />
        <input type="password" name="senha" id="senha" />
      </div>
      <div>
        <label for="confirmar-senha"> Confirme sua Senha </label><br />
        <input type="password" name="confirmar-senha" id="confirmar-senha" />
      </div>
      <button onclick="handleClick()">Salvar</button>
    </div>
    <p id="mensagem"></p>

    <script>
      function handleClick() {
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar-senha").value;

        const pMensagem = document.getElementById("mensagem");

        pMensagem.style.fontWeight = "bold";
        
        // Guard IF 
        if (senha.length < 4 || confirmarSenha.length < 4) {
          pMensagem.style.color = "red";
          pMensagem.textContent = "As senha deve conter pelo menos 4 caracteres.";
          return
        }

        if (senha != confirmarSenha) {
          pMensagem.style.color = "red";
          pMensagem.textContent = "As senhas devem ser iguais.";
          return
        }

        pMensagem.style.color = "green";
        pMensagem.textContent = "Senha salva com sucesso.";
      }
    </script>
  </body>
</html>


=================================================
manipulando_dom.html


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eventos DOM</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <h1>Eventos Dom</h1>
      <div id="box" class="default"></div>
      <button id="reset">Reset</button>
    </main>

    <script>
      const box = document.getElementById('box')
      
      // 1º Forma de Atribuir funções a eventos pelo JS
      function handleClick() {
        box.style.backgroundColor = "cyan"
        box.innerText = "Clicou!"
      }

      box.onclick = handleClick
      
      // 2º Forma de Atribuir funções a eventos pelo JS
      function handleMouseEnter() {
        box.className = 'mouseon'
        box.innerText = "Mouse entrou na caixa"
      }

      box.addEventListener('mouseenter', handleMouseEnter)
    </script>
  </body>
</html>

-------------------------------------------------------------

style.css


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    min-height: 100vh;
}

#box {
    width: 200px;
    height: 200px;
}

.default {
    background-color: gray;
}

.mouseon {
    background-color: aquamarine;
}