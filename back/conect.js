// Importando os módulos necessários: 'mysql' para conexão com o banco de dados e 'dotenv' para configuração de variáveis de ambiente
import mysql from "mysql";
import dotenv from "dotenv";
// Configurando o dotenv para carregar variáveis de ambiente a partir do arquivo .env
dotenv.config({ path: "./.env" });
// Criando uma conexão com o banco de dados MySQL usando as variáveis de ambiente configuradas
export const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Obtendo o host do banco de dados a partir das variáveis de ambiente
    user: process.env.DB_USER,       // Obtendo o usuário do banco de dados a partir das variáveis de ambiente
    senha: process.env.DB_PASS,       // Obtendo a senha do banco de dados a partir das variáveis de ambiente
    database: process.env.DB,         // Obtendo o nome do banco de dados a partir das variáveis de ambiente
});
