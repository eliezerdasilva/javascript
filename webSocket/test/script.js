const listaPedido = document.getElementById('lista-pedido');
const valorTotal = document.getElementById('valor-total');
const valorTotalPedidosField = document.getElementById('valor-total-pedidos');
const inputWrapper = document.getElementById('inputWrapper');
let total = 0;
let valorTotalPedidos = parseFloat(sessionStorage.getItem('valorTotalPedidos')) || 0; // Recupera do sessionStorage

// Carrega o histórico do sessionStorage ou cria uma lista vazia
let historico = JSON.parse(sessionStorage.getItem('historico')) || [];

// Recupera os itens adicionados ao pedido do sessionStorage
let itensNoPedido = JSON.parse(sessionStorage.getItem('itensNoPedido')) || [];

// Atualiza o valor total de pedidos exibido na tela
valorTotalPedidosField.innerText = valorTotalPedidos.toFixed(2);

// Adiciona os itens no pedido à lista na tela
itensNoPedido.forEach(item => {
  const novoItem = document.createElement('li');
  novoItem.innerText = item;
  listaPedido.appendChild(novoItem);
});

// Soma os valores dos itens no pedido para atualizar o total exibido na tela
itensNoPedido.forEach(item => {
  total += parseFloat(item.split('R$ ')[1]);
});
valorTotal.innerText = total.toFixed(2);

function adicionarAoPedido(valor) {
  const novoItem = document.createElement('li');
  novoItem.innerText = `Item - R$ ${valor.toFixed(2)}`;
  listaPedido.appendChild(novoItem);
  historico.push(`Item - R$ ${valor.toFixed(2)}`);
  total += valor;
  valorTotal.innerText = total.toFixed(2);
  itensNoPedido.push(`Item - R$ ${valor.toFixed(2)}`);
  atualizarSessionStorage();
}

function atualizarSessionStorage() {
  sessionStorage.setItem('historico', JSON.stringify(historico));
  sessionStorage.setItem('itensNoPedido', JSON.stringify(itensNoPedido));
  sessionStorage.setItem('valorTotalPedidos', valorTotalPedidos.toFixed(2));
}

function realizarPedido() {
  if (total > 0) {
    valorTotalPedidos += total;
    alert(`Pedido realizado! Total: R$ ${total.toFixed(2)}`);
    total = 0;
    listaPedido.innerHTML = '';
    valorTotal.innerText = total.toFixed(2);
    valorTotalPedidosField.innerText = valorTotalPedidos.toFixed(2);
    itensNoPedido = []; // Limpa os itens do pedido
    atualizarSessionStorage();
  } else {
    alert("Nenhum item adicionado ao pedido ainda.");
  }
}

function mostrarHistorico() {
  if (historico.length > 0) {
    alert("Histórico de itens adicionados ao pedido:\n" + historico.join("\n"));
  } else {
    alert("Histórico vazio. Nenhum item adicionado ao pedido ainda.");
  }
}

function mostrarCampos() {
  inputWrapper.style.display = "block";
}

function verificarMesa() {
  const senha = document.getElementById('senha').value;
  const numeroMesa = document.getElementById('numero-mesa').value;

  // Substitua a senha verdadeira pela sua senha desejada
  const senhaVerdadeira = "1234";

  if (senha === senhaVerdadeira && numeroMesa.trim() !== '') {
    alert(`Número da Mesa: ${numeroMesa}`);
    document.getElementById("mesa").innerText = `Mesa: ${numeroMesa}`;
    valorTotalPedidosField.innerText = valorTotalPedidos.toFixed(2);
    inputWrapper.style.display = "none";
  } else {
    alert("Senha incorreta ou número de mesa não preenchido corretamente.");
  }
}
