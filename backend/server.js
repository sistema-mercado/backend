const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");


//routes
const pool = require('./bd.js');
const authRoutes = require('./routes/authRoutes.js');

//configs
dotenv.config(); 

app.get("/", (req, res) => {
    res.send("Bem-vindo à página principal");
}); // Rota de teste Tela Principal

// Rotas
app.use('/api/auth', authRoutes);

// Inicialização do servidor
app.listen('3001', () => {
    pool.connect(); // Conexão com o banco de dados
    console.log("Backend server está rodando!");    
});