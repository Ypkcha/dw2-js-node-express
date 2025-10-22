import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // SELECT * FROM CLIENTES
  Cliente.findAll()
    // then ==> promessa bem sucedida
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    // catch ==> falha na resolução da promessa
    .catch((error) => {
      console.log(error);
    });
});

// Rota de cadastro de clientes
router.post("/clientes/new", (req, res) => {
  // Colentando os dados do formulario
  const nome = req.body.nome; //(o ultimo "nome" é o "name" do formulário)
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    // coluna : dado do formulário
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de cliente
// :id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id; // pegando o id através do parâmetro (params)
  // .destroy() -> excluir um registro do banco
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de clientes
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  // Buscando o cliente pela ID
  // findByPk() -> busca um registro pela chave primária (id)
  Cliente.findByPk(id).then((cliente) => {
    res.render("clienteEdit", {
      cliente: cliente,
    });
  });
});

router.post("/clientes/update/:id", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/clientes");
  });
});

export default router;
