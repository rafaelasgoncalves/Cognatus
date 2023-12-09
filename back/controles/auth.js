// Importando as dependências necessárias
import { db } from "../conect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Função para CADASTRAR um novo usuário
export const register = (req, res) => {
    // Obtendo os dados do corpo da requisição
    const { nome, email, senha, confirSenha } = req.body;
    // Verificando se o nome foi fornecido
    if (!nome) {
        return res.status(422).json({ msg: "O nome é obrigatório" });
    }
    // Verificando se o email foi fornecido
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório" });
    }
    // Verificando se a senha foi fornecida
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória" });
    }
    // Verificando se as senhas coincidem
    if (senha != confirSenha) {
        return res.status(422).json({ msg: "As senhas estão diferentes" });
    }
    // Consultando o banco de dados para verificar se o email já está em uso
    db.query(
        "SELECT email FROM vendedores WHERE email = ?",
        [email],
        async (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ msg: "Erro" });
            }
            if (data.length > 0) {
                return res.status(500).json({ msg: "Email já está sendo utilizado" });
            } else {
                // Hash da senha antes de inserir no banco de dados
                const hashSenha = await bcrypt.hash(senha, 8);
                // Inserindo o novo vendedor no banco de dados
                db.query(
                    "INSERT INTO vendedores SET ?", { nome, email, senha: hashSenha },
                    (error) => {
                        if (error) {
                            console.log(error)
                            return res.status(500).json({ msg: "Erro" });
                        } else {
                            return res.status(200).json({ msg: "Cadastrado" });
                        }
                    }
                )
            }
        })
}

// Função para realizar o LOGIN
export const login = (req, res) => {
    // Obtendo os dados do corpo da requisição
    const { email, senha } = req.body;
    // Consultando o banco de dados para encontrar o usuário pelo email fornecido
    db.query(
        "SELECT * FROM Vendedores WHERE email =? ", 
        [email],
        async (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ msg: "Erro" });
            }
            if (data.length == 0) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            } else {
                // Obtendo o primeiro usuário encontrado
                const user = data[0];
                // Verificando se a senha fornecida coincide com a senha armazenada no banco
                const checkSenha = await bcrypt.compare(senha, user.senha);
                if (!checkSenha) {
                    return res.status(422).json({ msg: "Senha incorreta" });
                }
                try {
                    // Gerando tokens de acesso e refresh
                    const refreshToken = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                        id: user.senha
                    },
                        process.env.REFRESH,
                        { algorithm: "HS256" }
                    )
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + 3600,
                        id: user.senha
                    },
                        process.env.TOKEN,
                        { algorithm: "HS256" }
                    )
                    //Respostas de sucesso com os tokens de autenticação
                    res.status(200).json({ msg: "Logado", token, refreshToken })
                } catch (err) {
                    console.log(err);
                    return res.status(500).json({ msg: "Erro" })
                }
            }
        }
    );
};
