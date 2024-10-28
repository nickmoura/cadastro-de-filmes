const express = require('express');
const cors = require('cors'); // Importa o cors
const pool = require('./db'); // Importa o arquivo de conexão com o banco

const app = express();
app.use(cors()); // Habilita o CORS
app.use(express.json());

// Endpoint pra cadastrar filme
app.post('/', async (req, res) => {
  try {
    const { moviename, director, seenon, rate } = req.body;

    if (!moviename || !director || !seenon || rate === undefined) {
      return res.status(400).json({ message: "Dados inválidos" });
    }

    // Conectando e inserindo no banco
    const [result] = await pool.execute(
      'INSERT INTO movies (moviename, director, seenon, rate) VALUES (?, ?, ?, ?)',
      [moviename, director, seenon, rate]
    );

    res.status(201).json({ message: "Filme cadastrado com sucesso!", result });
  } catch (error) {
    console.error('Erro ao cadastrar filme:', error);
    res.status(500).json({ message: "Erro no cadastro do filme", error: error.message });
  }
});

// Endpoint pra requisições GET, apenas teste
/*app.get('/', (req, res) => {
  res.send("API está funcionando");
});*/

module.exports = app; // Isso é importante pra Vercel
