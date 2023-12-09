// Importando o módulo Express para criar um roteador e os controladores de produto
import express from "express";
import { produto, getProduto } from "../controles/produto.js";

// Criando um roteador Express
const router = express.Router();

// Configurando as rotas para as funções de criação de produto e obtenção de produtos
router.post('/', produto);  // Rota para a função de criação de produto utilizando o método HTTP POST
router.get('/', getProduto);  // Rota para a função de obtenção de produtos utilizando o método HTTP GET

// Exportando o roteador configurado
export default router;
