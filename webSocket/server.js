const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));


let chegadas = [];

io.on('connection', (socket) => {
    
  socket.on('chegada', (nome) => {
    console.log(nome);
    const chegada = {
      nome,
      dataChegada: new Date().toLocaleString(),
    };
    chegadas.push(chegada);
    io.emit('atualizar_chegadas', chegadas);
  });

  socket.on('saida', (index) => {
    chegadas.splice(index, 1);
    io.emit('atualizar_chegadas', chegadas);
  });

  io.emit('atualizar_chegadas', chegadas);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
