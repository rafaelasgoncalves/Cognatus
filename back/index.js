// Importando os módulos necessários para criar um servidor Express, roteadores e middleware para parsing de dados
import express from "express";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import produtoRouter from "./routes/produto.js";
import bodyParser from "body-parser";
import cors from "cors";
// Criando uma instância do aplicativo Express
const app = express();
// Utilizando middleware para tratar requisições com formato JSON
app.use(express.json());
// Utilizando middleware para tratar requisições com dados de formulário URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Configurando rotas para os roteadores de usuários e autenticação
app.use("/back/users/", userRouter);
app.use("/back/auth/", authRouter);
app.use("/back/produto/", produtoRouter);
// Iniciando o servidor na porta 8000 e exibindo uma mensagem quando estiver certo
app.listen(8005, () => {
    console.log("Servidor funcionando!");
});
