// Importando o módulo Express para criar um roteador e o controlador de obtenção de informações do usuário
import express from "express";
import { getUser } from "../controles/users.js";
// Criando um roteador Express
const router = express.Router();
// Configurando uma rota de teste para a função de obtenção de informações do usuário
router.get("/teste", getUser);
// Exportando o roteador configurado
export default router;
/*
Express é criado com uma única rota /teste configurada para a função getUser do controlador users.js.
Essa rota é designada para responder a requisições HTTP GET.
O roteador configurado é então exportado para ser utilizado em outras partes do código.
 */