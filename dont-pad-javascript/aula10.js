Sejam Bem Vindos a Aula 10 de Javascript.


---------------------------------------------------------------------------------
Projeto

to-do-list.md

# To Do List

Vocês devem fazer uma lista de tarefas.

1. Criem um formulário para adicionar uma tarefa, o formulário deve pedir as seguintes informações

- nome
- descricao

2. Ao submeter o formulário, adicione as informações em uma lista de tarefas (ul), onde cada tarefa será representada por um (li). A tarefa deve apresentar:

- nome
- descricao
- checkbox (para completar a tarefa)

OBS: Criando Checkbox

```javascript
// Criando Checkbox
let checkbox = document.createElement('input')
checkbox.type = 'checkbox'
```


-----------------------------------------------------------------------------------
index.html


<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sorteio</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Sorteio</h1>
    <form id="form-sorteio">
      <div>
        <label for="nome"> Nome </label> <br />
        <input type="text" name="nome" id="nome" required />
      </div>
      <button type="submit">Adicionar</button>
    </form>
    <br />
    <div>
      <button id="limpar-sorteio">Limpar Sorteio</button>
      <button id="executar-sorteio">Sortear</button>
    </div>
    <hr />
    <h2>Participantes</h2>
    <ul id="pessoas">
      <!-- <li class="pessoa">
            Lidia
        </li>
        <li class="pessoa sorteada">
            Marcola
        </li> -->
    </ul>

    <script>
      // ----- Adicioando Ao Sorteio --------
      // O disparo do formulário vai ser determinado
      // pelo evento de SUBMIT
      const formulario = document.getElementById("form-sorteio");

      // Toda função de "handle" que lida com eventos
      // pode receber as informações do proprio evento como
      // 1º parametro
      function handleAdicionarPesa(event) {
        // O privent default impede que o comportamento
        // padrão do evento aconteça
        event.preventDefault();

        // Podemos acessar o input do formulário
        // passando o "name" ou "id" do input como propridedade
        // do formulário
        let nome = formulario.nome.value;

        // Adicionando Pessoa na Lista.
        // Capturar a Lista
        let ulPessoas = document.getElementById("pessoas");

        // Criar o LI
        let liPessoa = document.createElement("li");
        // liPessoa.className = 'pessoa'
        liPessoa.classList.add("pessoa");
        liPessoa.textContent = nome;

        // Adicionar LI na Lista
        ulPessoas.appendChild(liPessoa);
      }

      formulario.addEventListener("submit", handleAdicionarPessoa);

      // ----- Adicionando Ao Sorteio --------
      function sortearNumero(minimo, maximo) {
        return Math.floor((Math.random() * (maximo - minimo)) + minimo)
      }

      const botaoSortear = document.getElementById('executar-sorteio')

      function handleSortear() {
        const pessoas = document.querySelectorAll('.pessoa')

        for (let pessoa of pessoas) {
          pessoa.classList.remove('sorteada')
        }

        const indexSorteado = sortearNumero(0, pessoas.length)
        pessoas[indexSorteado].classList.add('sorteada')
      }

      botaoSortear.addEventListener('click', handleSortear)

      // ----- Limpando Sorteio --------
      const botaoLimpar = document.getElementById('limpar-sorteio')

      function handleLimparSorteio() {
        let ulPessoas = document.getElementById("pessoas");
        ulPessoas.textContent = ''
      }

      botaoLimpar.addEventListener('click', handleLimparSorteio)
    </script>
  </body>
</html>


-------------------------------------------------------
style.css


/* Reset de CSS */
* {
    padding: 0;
    list-style: none;
}

#pessoas {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.pessoa {
    transition: 0.3s;
    border: 1px dashed black;
    border-radius: 4px;
    padding: 8px;
    background-color: #FAFAFA;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.pessoa.sorteada {
    font-weight: 700;
    border: 1px dashed limegreen;
    box-shadow: 1px 1px 10px rgba(0, 131, 9, 0.505);
}

====================================================
to_do_list.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Tarefas</title>
    <style>
      .tarefa {
        display: flex;
        justify-content: space-between;

        padding-inline: 32px;
        border: 1px solid black;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <h1>Gerenciador de Tarefas</h1>
    <form id="form-tarefa" autocomplete="off">
      <div>
        <label for="tarefa"> Tarefa: </label>
        <input type="text" name="tarefa" id="tarefa" />
      </div>
      <div>
        <label for="descricao"> Descricao: </label>
        <input type="text" name="descricao" id="descricao" />
      </div>
      <button type="submit">Adicionar</button>
    </form>

    <hr />

    <h2>Tarefas</h2>
    <ul id="tarefas">
      <li class="tarefa">
        <div>
          <p>Estudar AWS</p>
          <p>Realizar curso do mauro tanana</p>
        </div>
        <input type="checkbox" />
      </li>
    </ul>

    <script>
      const formulario = document.getElementById("form-tarefa");

      function criarLiTarefa(tarefa, descricao) {
        // Construindo LI
        const liTarefa = document.createElement("li");
        // liTarefa.textContent = `${tarefa} - ${descricao} -> `

        const pTarefa = document.createElement("p");
        pTarefa.textContent = tarefa;

        const pDescricao = document.createElement("p");
        pDescricao.textContent = descricao;

        const divInfo = document.createElement("div");
        divInfo.appendChild(pTarefa);
        divInfo.appendChild(pDescricao);

        const checkboxTarefa = document.createElement("input");
        checkboxTarefa.type = "checkbox";

        liTarefa.appendChild(divInfo);
        liTarefa.appendChild(checkboxTarefa);
        liTarefa.classList.add("tarefa");

        return liTarefa;
      }

      function handleAdicionarTarefa(event) {
        event.preventDefault();

        // Capturando do Formulaŕio
        let tarefa = formulario.tarefa.value;
        let descricao = formulario.descricao.value;

        const liTarefa = criarLiTarefa(tarefa, descricao);

        // Adicionando a Lista
        const ulTarefas = document.getElementById("tarefas");
        ulTarefas.appendChild(liTarefa);
      }

      formulario.addEventListener("submit", handleAdicionarTarefa);
    </script>
  </body>
</html>

