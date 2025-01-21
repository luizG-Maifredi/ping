const express = require('express');
const ping = require('ping');
const path = require('path');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const app = express();

// Pega as variáveis de ambiente do arquivo .env
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1'; // IP padrão
const PORT = process.env.PORT || 3000; // Porta padrão

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para realizar o ping
app.get('/ping', (req, res) => {
  ping.sys.probe(IP_ADDRESS, function (isAlive) {
    if (isAlive) {
      res.send(`RBK ESTÁ ONLINE`);
    } else {
      res.send(`RBK NÃO ESTÁ ONLINE.`);
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});