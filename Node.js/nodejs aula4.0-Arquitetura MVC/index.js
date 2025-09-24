//node index.js no terminal inicia o projeto
//Importando o express (framework)
// const express = require("express"); -> CommmonJS modules
import express from "express"; // ES6 Modules
//iniciando o express na variável app
const app = express();

// Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

//Configurando o EJS *BEM IMPORTANTE
app.set("view engine", "ejs");
//Definindo a pasta PUBLIC para Arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

//Criando a primeira rota do site (rota principal)
//REQ = trata a requisição / RES = trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

//Rota de perfil
// :user = Parâmetro da rota, sendo o ":" o indicador que é um parâmetro (nesse caso ele é um parâmetro obrigatório)
// :user? = Parâmetro da rota (parâmetro OPCIONAL)
app.get("/perfil/:user", (req, res) => {
  //req = requisitando| params = parâmetro| user = usuário
  const user = req.params.user;
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user: user,
  });
});

//Iniciando o servidor HTTP
//O servidor escutara na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor, ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
