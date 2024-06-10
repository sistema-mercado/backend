const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");

//configs
dotenv.config(); 
app.use(bodyParser.json());
app.use(
    cors(
    //   origin: "http://localhost:3000",
    //   credentials: true,
    )
  );


//routes
const pool = require('./bd.js');
const authRoutes = require('./routes/authRoutes.js');

app.get("/", (req, res) => {
    res.send("Bem-vindo à página principal");
}); // Rota de teste Tela Principal

// Rotas
app.use('/api/auth', authRoutes);


const port = process.env.PORT  || 3001
// Inicialização do servidor
app.listen(port, () => {
    pool.connect(); // Conexão com o banco de dados
    console.log("Backend server está rodando!");    
});