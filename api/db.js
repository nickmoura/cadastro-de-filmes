const mysql = require('mysql2/promise');

// Configuração do banco de dados
const pool = mysql.createPool({
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco',
  port: 'opcional'
});

module.exports = pool;
