function salvar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const cliente = {nome: nome, email: email, endereco: endereco};
    limpar();
    localStorage.setItem('teste', JSON.stringify(cliente));
    adicionarLinha(cliente);
}

function adicionarLinha(cliente) {
    console.log(cliente);
let table = document.getElementById("clienteTable");
let tableSize = table.rows.length;
let row = table.insertRow(tableSize);
let cellNome = row.insertCell(0);
let cellEmail = row.insertCell(1);
let cellEndereco = row.insertCell(2);
let cellEditar = row.insertCell(3);
let cellExcluir = row.insertCell(4);
row.id = tableSize;
cellNome.innerHTML = cliente.nome;
cellEmail.innerHTML = cliente.email;
cellEndereco.innerHTML = cliente.endereco;
cellEditar.innerHTML = "<button onclick='selecionar(this)'>editar</button>";
cellExcluir.innerHTML = "<button onclick='excluir(this)'>excluir</button>";

}

function selecionar(item) {
let id = item.parentNode.parentNode.id;
row = document.getElementById(id);
 const tds = row.getElementsByTagName("td");
    
 document.getElementById("nome").value = tds[0].innerText;
 document.getElementById("email").value = tds[1].innerText;
 document.getElementById("endereco").value = tds[2].innerText;
 excluir(item);


}

function excluir(item){
    let id = item.parentNode.parentNode.id;
    row = document.getElementById(id);
    row.parentNode.removeChild(row);
}


function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("endereco").value = "";
}