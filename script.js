// Função que busca dados do localStorge ou inicia uma lista vazia
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

//Elementos do DOM 
const form = document.getElementById("form-produto");
const tabela = document.getElementById("tabela-produtos");
const busca = document.getElementById("busca");

//Função para salvar os dados do localStorge
function salvarDados(){
    localStorage.setItem("produtos", JSON.stringify(produtos));
}
//Função para desenhar a tabela com os produtos
function atualizarTabela(){
    //limpar  a tabela de atualização
    tabela.innerHTML = ""; 

    //Filtro de busca 
    const filtro = buscar.value.toLowerCase();//deixa tudo minúsculo

    //Percorre todos os produtos
    produtos.forEach((produto, index) => {
        if(produto.nome.toLowerCase().include(filtro)){
            const tr = document.createElement("tr");

            //Colunas da tabela 
            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.unidade}</td>
                <td>${produto.categoria}</td>
                <td>
                  <button class="acao adicionar" onclick="alterarQuantidade(${index},1)">+</button>
                  <button class="acao remover" onclick="alterarQuantidade(${index},-1)">-</button>
                  <button class="acao remover" onclick="removerProduto(${index})">Excluir</button>
                </td>
            `;
            tabela.appendChild(tr);
        }
    });
}