// Importando o Express
import express from "express";
// Carregando a variável router o express.router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router();

//Rota de produtos
router.get("/produtos", (req, res) => {
  // const produtos = ["Computador","Celular","Tablet","Notebook"]
  // Array de objetos com os produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

// Exportando o objeto router
export default router;
