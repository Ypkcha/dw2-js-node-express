import express from "express";
const router = express.Router();
//Importando o model de usuário
import User from "../models/User.js";

// Rota de login
router.get("/login", (req, res) => {
  res.render("login");
});

// Rota de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

//Rota de criação de Usuário
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  // Enviando para o banco
  User.create({
    email: email,
    password: password,
  })
    .then(() => {
      res.redirect("/login");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
