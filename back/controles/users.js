// Função para obter informações do usuário
export const getUser = (req, res) => {
    // Responde com um status 200 e um JSON indicando que a função está funcionando
    res.status(200).json({ msg: "funcionando" });
};
