// Importando a conexão com o banco de dados
import { db } from "../conect.js";

// Função para cadastrar um novo produto
export const produto = (req, res) => {
    // Obtendo dados do corpo da requisição
    const { produt_desc, produt_img, userId } = req.body;

    // Verificando se tanto a imagem quanto a descrição estão ausentes
    if (!produt_img && !produt_desc) {
        return res.status(422).json({ msg: "O anúncio precisa de uma imagem e de uma descrição" });
    }

    // Inserindo os dados do produto no banco de dados
    db.query("INSERT INTO Produtos SET ?", { produt_desc, produt_img, userId }, (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ msg: "Erro" });
        } else {
            return res.status(200).json({ msg: "Produto cadastrado" });
        }
    });
};

// Função para obter informações de todos os produtos
export const getProduto = (req, res) => {
    // Realizando uma consulta no banco de dados para obter informações dos produtos e seus vendedores
    db.query("SELECT Produtos.*, Vendedores.nome, ftPerfil FROM Produtos JOIN Vendedores ON (Vendedores.idVendedor = Produtos.userId)",
        (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ msg: "Erro" });
            } else if (data) {
                return res.status(200).json({ data });
            }
        });
};
