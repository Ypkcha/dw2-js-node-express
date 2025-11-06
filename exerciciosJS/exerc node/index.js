import express from "express";

const app = express();

// Sequelize
import connection from "./config/sequelize-config.js";

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

  //Criando o banco de dados
connection
  .query("CREATE DATABASE IF NOT EXISTS fav;")
  .then(() => {
    console.log("O banco de dados está criado");
  })
  .catch((error) => {
    console.log(error);
  });


// controllers
import JungleController from "./controllers/JungleController.js";
import TopController from "./controllers/TopController.js";
import MidController from "./controllers/MidController.js";

// ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

// rotas dos controllers
app.use("/", JungleController);
app.use("/", TopController);
app.use("/", MidController);

// main route
app.get("/", (req, res) => {
  res.render("index");
});

//Formulários
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//servidor
const port = 1010;
app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor, ocorreu um erro ${error}`
    );
  } else {
    console.log(`Vambora: http://localhost:${port}`);
  }
});

