const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco


const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario


const app = express();

// PORT é utilizada quando estiver em PROD (Setada pela Vercel) e a 3000 em DEV
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(
    {
        origin: "node-api-test-lovat.vercel.app",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));


connectToDatabase(); //conectando com o banco

app.use("/users", usuario); //chamando as rotas do usuario

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo(a) a API Teste"
    });
})

app.get("/test", (req, res) => {
    res.send({
        message: "Rota de teste"
    });
})

// Rota notfound
app.get("*", (req, res) => {
    res.send({
        message: "Rota não encontrada!"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})