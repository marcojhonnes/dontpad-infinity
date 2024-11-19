Sejam bem vindos a aula 15 de javascript

Repositorio Projeto: https://github.com/Davi-Classes/ClienteGestao
Repositório API: https://github.com/Davi-Classes/ClienteApi
Documentação API: https://clienteapi.onrender.com/docs



--------------------------------------------------------------------------------------------
index.html

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gerenciamento de Clientes</title>

    <!-- Estilos CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./public/css/style.css" />
  </head>
  <body>
    <!-- Header com background dark -->
    <header class="bg-dark">
      <div
        class="container p-4 d-flex justify-content-between align-items-center"
      >
        <h1 class="text-white">Meus Clientes</h1>
        <ion-icon name="person"></ion-icon>
      </div>
    </header>

    <main>
      <div class="container p-4">
        <!-- 
          Parte de Cima da Tabela 
          - Modal de adicionar cliente 
          - Barra de pesquisar
        -->
        <div class="d-flex justify-content-between align-items-center">
          <!-- Botão de Cadastrar Cliente -->
          <button
            data-bs-toggle="modal"
            data-bs-target="#modal-cliente"
            class="btn btn-primary btn-lg"
          >
            Adicionar Cliente
            <ion-icon name="create"></ion-icon>
          </button>

          <!-- Modal com o formulário de cadastro -->
          <div
            class="modal fade"
            id="modal-cliente"
            tabindex="-1"
            aria-labelledby="titulo-modal-cliente"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <!-- Caixa do Modal -->
              <form class="modal-content" id="form-cliente" autocomplete="off">
                <!-- Titulo e Botão de Fechar -->
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="titulo-modal-cliente">
                    Cadastrar novo cliente
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- Campos do Formulário: Parte principal do modal -->
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="cliente" class="form-label"> Cliente </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cliente"
                      placeholder="Guilherme"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label"> Email </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="meuemail@email.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="endereco" class="form-label"> Endereço </label>
                    <input
                      type="text"
                      class="form-control"
                      id="endereco"
                      placeholder="Rua Tal, 000 | Cidade - Sigla"
                    />
                  </div>
                  <div id="error-message" class="text-danger"></div>
                </div>
                <!-- Botão para submeter o formulário e para fechar -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="submit" class="btn btn-success">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="input-group w-50">
            <input
              type="text"
              class="form-control"
              id="pesquisar"
              autocomplete="off"
            />
            <button class="input-group-text btn btn-primary">
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>
        <hr />
        <!-- Tabela com os clientes cadastrados -->
        <table id="clientes" class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <!-- Aqui vão os dados da tabela -->
          <tbody></tbody>
        </table>
      </div>
    </main>

    <!-- Scripts -->
    <!-- Biblioteca de Icones -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <!-- Funcionalidade do Bootstrap -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <!-- Script Proprio com Lógica da Aplicação -->
    <script type="module" src="./public/js/script.js"></script>
  </body>
</html>

---------------------------------------------------------------------------------------------------
view.js


import { handleExcluirCliente } from "./controller.js";

// Componentes
function Icone(icone) {
  let ionIcon = document.createElement("ion-icon");
  // ionIcon.name = icone
  ionIcon.setAttribute("name", icone);
  return ionIcon;
}

function LinhaCliente(cliente) {
  let linha = document.createElement("tr");

  let clienteId = linha.insertCell();
  clienteId.textContent = `${cliente.id}.`;

  let clienteNome = linha.insertCell();
  clienteNome.textContent = cliente.nome;

  let clienteEmail = linha.insertCell();
  clienteEmail.textContent = cliente.email;

  let clienteEndereco = linha.insertCell();
  clienteEndereco.textContent = cliente.endereco;

  let clienteAcoes = linha.insertCell();

  let botaoEditar = document.createElement("button");
  botaoEditar.className = "btn btn-primary";
  botaoEditar.appendChild(Icone("pencil"));

  let botaoExcluir = document.createElement("button");
  botaoExcluir.className = "btn btn-danger";
  botaoExcluir.appendChild(Icone("trash"));
  // Adicionando um evento de exclusão.
  botaoExcluir.addEventListener(
    "click", () => handleExcluirCliente(cliente.id))

  clienteAcoes.appendChild(botaoEditar);
  clienteAcoes.appendChild(botaoExcluir);

  return linha;
}

// Funções da Tela
export function listarClientes(clientes) {
  const tabelaClientes = document.getElementById("clientes");

  // Limpando Linhas da Tabela (Exceto Cabeçalho)
  let dadosClientes = tabelaClientes.querySelector("tbody");
  dadosClientes.textContent = ''

  // let qtdClientes = tabelaClientes.rows.length - 1;
  // for (let index = qtdClientes; index > 0; index--) {
  //   tabelaClientes.deleteRow(index);
  // }

  // Adicionando linhas na tabela segundo os clientes recebidos como parametro.
  for (let cliente of clientes) {
    let linhaCliente = LinhaCliente(cliente);
    dadosClientes.appendChild(linhaCliente);
  }
}

export function mostrarError(mensagem) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = mensagem;
}


-------------------------------------------------------------------------------------------------------------
controller.js


import {
  buscarClientes,
  cadastrarCliente,
  editarCliente,
  excluirCliente,
} from "./model.js";
import { listarClientes, mostrarError } from "./view.js";

let clientesState = [];

// Lógica da Aplicação
// Listagem de Clientes
async function handleListarClientes() {
  // O Fetch faz uma requisição (por padrão um GET)
  // para a URL especificada.
  // Await ele espera a promessa terminar, para continuar o codigo
  clientesState = await buscarClientes();
  listarClientes(clientesState);
}

window.addEventListener("DOMContentLoaded", handleListarClientes);

// Cadastro de Clientes
const formCliente = document.getElementById("form-cliente");

async function handleCadastrarCliente(event) {
  event.preventDefault();

  const novoCliente = {
    nome: formCliente.cliente.value.trim(),
    email: formCliente.email.value.trim(),
    endereco: formCliente.endereco.value.trim(),
  };

  try {
    if (novoCliente.nome == "") {
      throw new Error("O campo nome é obrigatório.");
    }

    if (novoCliente.email == "") {
      throw new Error("O campo email é obrigatório.");
    }

    if (novoCliente.endereco == "") {
      throw new Error("O campo endereço é obrigatório.");
    }

    await cadastrarCliente(novoCliente);
    mostrarError("");
  } catch (error) {
    mostrarError(error.message);
    return;
  }

  // Listar Clientes
  handleListarClientes();

  // Fecha o modal do bootstrap
  let modal = document.getElementById("modal-cliente");
  modal = bootstrap.Modal.getInstance(modal);
  modal.hide();

  // Limpando o Formulário.
  formCliente.reset();
}

formCliente.addEventListener("submit", handleCadastrarCliente);

export async function handleExcluirCliente(clienteId) {
  let confirmarExclusao = confirm('Deseja excluir o cliente?')

  if (confirmarExclusao) {
    await excluirCliente(clienteId);
    handleListarClientes();
  }
}


------------------------------------------------------------------------------------------------------------------------------------
model.js


// Model
// Responsavel por armazenar os dados no frontend e consumir a API.
const apiUrl = "https://clienteapi.onrender.com";

export async function buscarClientes() {
  const response = await fetch(`${apiUrl}/clientes`);

  if (!response.ok) {
    throw new Error("Houve um erro ao se comunicar com o servidor.");
  }

  return await response.json();
}

export async function cadastrarCliente(cliente) {
  // Cadastrar o Cliente
  const response = await fetch(`${apiUrl}/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao comunicar com o servidor.");
  }
}

export async function editarCliente(id, cliente) {
  // Cadastrar o Cliente
  const response = await fetch(`${apiUrl}/clientes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao comunicar com o servidor.");
  }
}

export async function excluirCliente(id) {
  // Cadastrar o Cliente
  const response = await fetch(`${apiUrl}/clientes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao comunicar com o servidor.");
  }
}
