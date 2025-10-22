import express from "express";
const router = express.Router();

import Pedido from "../models/Pedido.js";
// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

//Rota de cadastro de pedidos
router.post("/pedidos/new", (req, res) => {
  // Colentando os dados do formulario
  const numero = req.body.numero; //(o ultimo "nome" é o "name" do formulário)
  const valor = req.body.valor;
  Pedido.create({
    // coluna : dado do formulário
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//rota de exclusão de pedidos
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de edição
router.get("/pedidos/update/:id", (req, res) => {
  const id = req.params.id;
  Pedido.findByPk(id).then((pedido) => {
    res
      .render("/pedidoEdit", {
        pedido: pedido,
      });
      });
  });
router.post("/pedidos/update/:id", (req, res) => {
  const id = req.body.id;
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/pedidos");
  });
});

export default router;
