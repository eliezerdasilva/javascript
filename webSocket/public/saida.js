const socket = io();

const chegadasList = document.getElementById('chegadasList');

socket.on('atualizar_chegadas', (chegadas) => {
    console.log(chegadas) ; 
  chegadasList.innerHTML = '';
  chegadas.forEach((chegada, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${chegada.nome}`;

    const button = document.createElement('button');
    button.textContent = 'Registrar Saída';
    button.addEventListener('click', () => {
      socket.emit('saida', index);
    });

    item.appendChild(button);
    chegadasList.appendChild(item);
  });
});
