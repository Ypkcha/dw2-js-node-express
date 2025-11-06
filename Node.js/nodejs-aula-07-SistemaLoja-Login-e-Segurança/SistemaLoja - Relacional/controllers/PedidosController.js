import express from "express";
import Pedido from "../models/Pedido.js";
//Importando o model de Cliente (necessário para o innerjoin)
import Cliente from "../models/Cliente.js";
const router = express.Router();
// Importando o middleware de autenticação
import Auth from "../middleware/auth.js";

// ROTA PEDIDOS
router.get("/pedidos",Auth, function (req, res) {
  //Realiza ambas as consultas em paralelo dentro de uma Promessa
  Promise.all([
    Pedido.findAll({
      // Fazendo o INNERJOIN com a tabela de clientes (mesmo eu não sabendo o que caralhos é isso 22/10/2025)
      include: [
        {
          model: Cliente, //inclui o modelo Cliente que está relacionado
          required: true, //Garante que somente pedidos com clientes sejam retornado
        },
      ],
    }),
    Cliente.findAll(),
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new",Auth, (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id",Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
