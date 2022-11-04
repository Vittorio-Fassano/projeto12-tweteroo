import express from 'express';

const app = express(); // Cria um servidor

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.get("/", (req, res) => {
    // Manda como resposta o texto 'Hello World'
    res.send('Hello World');
});

// Configura o servidor para rodar na porta 4000
app.listen(4000);

