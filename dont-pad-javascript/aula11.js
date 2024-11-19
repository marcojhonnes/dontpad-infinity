Sejam bem vindos a aula 11 de Javascript.


objetos.js

// Objetos
// Os objetos são estruturas de dados "NÃO ORDENADAS"
// onde podemos armanezar dados em um  
// conjunto de "chave : valor"
let pessoa = {
    nome: 'Pedro',
    idade: 12,
    jaAlmocou: false
}

------------------------------------------------------------
map.js

// Mostrando Objeto
console.log(pessoa)

// Acessando uma propriedade de um objeto
console.log(pessoa.nome)


// Funções Agregadoras
// .map(), .filter(), .reduce()
// Callback -> Função Agregadora -> Executar essa função no Array
const frutas = ["Banana", "Maçã", "Uva", "Laranja", "Pera"]

// Map
let novasFrutas = frutas.map((fruta) => {
    return fruta + " (Novo)"
})

console.log(frutas)
console.log(novasFrutas)

// let novasFrutas = []
// for (let fruta of frutas) {
//     novasFrutas.push(fruta + " (Novo)")
// }

// Caso de Uso: Aplicando preços.
const produtos = [
    {
        nome: 'Mouse Gamer',
        categoria: 'ELETRONICO'
    },
    {
        nome: 'Teclado Gamer',
        categoria: 'ELETRONICO'
    },
    {
        nome: 'Sabão em Pó',
        categoria: 'LIMPEZA'
    },
    {
        nome: 'Arroz',
        categoria: 'ALIMENTACAO'
    },
]

console.log(produtos)

function applyMap(produto) {
    return produto.nome
}

const nomesProdutos = produtos.map(applyMap)

console.log(nomesProdutos)

------------------------------------------------------------------------------
filter.js


// Filter
const produtos = [
    {
        nome: 'Mouse Gamer',
        preco: 39.90,
        categoria: 'ELETRONICO'
    },
    {
        nome: 'Teclado Gamer',
        preco: 50.90,
        categoria: 'ELETRONICO'
    },
    {
        nome: 'Sabão em Pó',
        preco: 5.90,
        categoria: 'LIMPEZA'
    },
    {
        nome: 'Arroz',
        preco: 4.90,
        categoria: 'ALIMENTACAO'
    },
]

const eletronicos = produtos
    .filter((produto) => produto.categoria == 'ELETRONICO')
    .map((produto) => {
        produto.preco *= 0.9
        return produto
    })

console.log(eletronicos)

============================================

Projeto To Do List.
===========================================
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

----------------------------------------------------------------------------------------
index.html

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="style.css">
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
    <input type="text" id="pesquisar" placeholder="Pesquisar...">
    <ul id="tarefas">
      
    </ul>

    <script src="script.js"></script>
  </body>
</html>


-----------------------------------------------------------------------------
style.css


/* Reset CSS */
* {
    padding: 0;
    list-style: none;
}

#tarefas {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.tarefa {
    display: flex;
    justify-content: space-between;

    padding-inline: 32px;
    border: 1px solid black;
    border-radius: 8px;

    max-width: 600px;
}


-------------------------------------------------------------------------------
script.js

// Componentes (Elementos HTML)
function Tarefa(tarefa) {
  // Construindo LI
  const liTarefa = document.createElement("li");
  // liTarefa.textContent = `${tarefa} - ${descricao} -> `

  const h2Tarefa = document.createElement("h2");
  h2Tarefa.textContent = tarefa.nome;

  const pDescricao = document.createElement("p");
  pDescricao.textContent = tarefa.descricao;

  const divInfo = document.createElement("div");
  divInfo.appendChild(h2Tarefa);
  divInfo.appendChild(pDescricao);

  const checkboxTarefa = document.createElement("input");
  checkboxTarefa.type = "checkbox";
  checkboxTarefa.checked = tarefa.completa;

  liTarefa.appendChild(divInfo);
  liTarefa.appendChild(checkboxTarefa);
  liTarefa.classList.add("tarefa");

  return liTarefa;
}

// Lógica da Tela
let tarefasState = [
  {
    nome: "Estudar AWS",
    descricao: "Realizar curso do mauro tanana",
    completa: true,
  },
  {
    nome: "Nginx para Deploy",
    descricao: "Na marra",
    completa: false,
  },
];

// Listar Tarefas
function listarTarefas(tarefas) {
  const ulTarefas = document.getElementById("tarefas");
  ulTarefas.textContent = "";
  
  if (tarefas.length == 0) {
    ulTarefas.textContent = "Não foram encontrados resultados...";
    return
  }

  tarefas.map((tarefa) => {
    const liTarefa = Tarefa(tarefa);
    ulTarefas.appendChild(liTarefa);
  });
}

function handleListarTarefas() {
    // Logica para buscar as tarefas de outro lugar.
    listarTarefas(tarefasState);
}

window.addEventListener("load", handleListarTarefas)

// Pesquisar Tarefas
const inputPesquisar = document.getElementById('pesquisar')

function handlePesquisarTarefas() {
    let pesquisa = inputPesquisar.value.toLowerCase()
    
    let resultado = tarefasState.filter((tarefa) => tarefa.nome.toLowerCase().includes(pesquisa))
    
    listarTarefas(resultado)
}

inputPesquisar.addEventListener("input", handlePesquisarTarefas)

// Adicionar Nova Tarefa
const formulario = document.getElementById("form-tarefa");

function handleAdicionarTarefa(event) {
  event.preventDefault();

  // Capturando do Formulaŕio
  let novaTarefa = {
    nome: formulario.tarefa.value,
    descricao: formulario.descricao.value,
    completa: false,
  };

  tarefasState.push(novaTarefa);
  listarTarefas(tarefasState);
}

formulario.addEventListener("submit", handleAdicionarTarefa);
