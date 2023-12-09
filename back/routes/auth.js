// Importando o módulo Express para criar um roteador e os controladores de registro e login
import express from "express";
import { register } from "../controles/auth.js";
import { login } from "../controles/auth.js";
// Criando um roteador Express
const router = express.Router();
// Configurando as rotas para as funções de registro e login
router.post("/register", register);
router.post("/login", login);
// Exportando o roteador configurado
export default router;
/*
Este trecho de código usa o Express para criar um roteador e define duas rotas (/register e /login)
Que são manipuladas pelos controladores register e login.
Essas rotas são então exportadas como um módulo para uso em outras partes do código.
 */