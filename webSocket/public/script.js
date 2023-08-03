const socket = io();

const chegadaForm = document.getElementById('chegadaForm');
const nomeInput = document.getElementById('nome');
const chegadasList = document.getElementById('chegadasList');

chegadaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = nomeInput.value.trim();
  if (nome) {
    socket.emit('chegada', nome);
    nomeInput.value = '';
  }
});

socket.on('atualizar_chegadas', (chegadas) => {
  chegadasList.innerHTML = '';
  chegadas.forEach((chegada, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${chegada.nome}`;
    chegadasList.appendChild(item);
    item.addEventListener('click', () => {
      socket.emit('saida', index);
    });
  });
});
