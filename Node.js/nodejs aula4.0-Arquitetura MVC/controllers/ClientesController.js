// Importando o Express
import express from "express";
// Carregando a variável router o express.router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router();

//Rota de clientes
router.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", CPF: "123.456.879-00", endereco: "Rua das Flores, 34" },
    { nome: "Isaac", CPF: "123.456.879-00", endereco: "Rua Diamante, 100" },
    { nome: "Ana Flávia", CPF: "123.456.879-00", endereco: "Rua Ceará, 30" },
    { nome: "Renan", CPF: "123.456.879-00", endereco: "Rua Curitiba, 22" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

// Exportando o objeto router
export default router;
