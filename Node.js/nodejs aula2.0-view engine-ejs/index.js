//node index.js no terminal inicia o projeto

//Importando o express (framework)
const express = require("express");
//iniciando o express na variável app
const app = express();

//Configurando o EJS *BEM IMPORTANTE
app.set("view engine", "ejs");

//Criando a primeira rota do site (rota principal)
//REQ = trata a requisição / RES = trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

//Rota de produtos
app.get("/produtos", (req, res) => {
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

//Rota de clientes
app.get("/clientes", (req, res) => {
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

//Rota de perfil
app.get("/perfil", (req, res) => {
  // Criando a variável que será enviada para a página
  const user = "Yuri Pignotti";
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user: user,
  });
});

app.get("/pedidos", (req, res) => {
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
