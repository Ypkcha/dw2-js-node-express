import express from "express";

const app = express();

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
app.get("/", (req,res) =>{
    res.render("index");
})

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