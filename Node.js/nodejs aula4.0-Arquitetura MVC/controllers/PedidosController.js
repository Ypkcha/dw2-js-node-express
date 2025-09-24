// Importando o Express
import express from "express";
// Carregando a variável router o express.router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router();

router.get("/pedidos", (req, res) => {
  const pedidos = [
    { num: 1, produto: "Celular", valor: 3000 },
    { num: 2, produto: "Tablet", valor: 1500 },
    { num: 3, produto: "Cellphone", valor: 5000 },
    { num: 4, produto: "Compiuter", valor: 4000 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});
// Exportando o objeto router
export default router;
