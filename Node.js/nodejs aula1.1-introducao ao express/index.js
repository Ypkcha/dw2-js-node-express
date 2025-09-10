//node index.js no terminal inicia o projeto

//Importando o express (framework)
const express = require("express");
//iniciando o express na variável app
const app = express();

//Criando a primeira rota do site (rota principal)
//REQ = trata a requisição / RES = trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello World! Bem vindo ao meu primeiro site com Node.js e Express! :p</h1>"
  );
});

//Rota de produtos
app.get("/produtos", (req, res) => {
  res.send("<h1>Bem vindo a minha página de produtos!!! >:)</h1>");
});

//Rota de clientes
app.get("/clientes", (req, res) => {
  res.send("<h1>Bem vindo a página de clintes >:(</h1>");
});

//Iniciando o servidor HTTP
//O servidor escutara na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servido, ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
