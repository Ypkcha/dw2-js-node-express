import express from "express";
import Top from "../models/Top.js";
const router = express.Router();

// conteudo da rota
router.get("/top", (req, res) => {
  Top.findAll().then((topLaners) => {
    res.render("top", {
      topLaners: topLaners,
    });
  });
});
router.post("/top/new", (req, res) => {
  const campeao = req.body.campeao;
  const classe = req.body.classe;
  const motivo = req.body.motivo;
  Top.create({
    campeao: campeao,
    classe: classe,
    motivo: motivo,
  }).then(() => {
    res.redirect("/top");
  });
});
//rota de exclusão
router.get("/top/delete/:id", (req, res) => {
  const id = req.params.id;
  Top.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/top");
  });
});
//rota de edição
router.get("/top/edit/:id", (req, res) => {
  const id = req.params.id;
  Top.findByPk(id).then((topLaners) => {
    res.render("topEdit", {
      topLaners: topLaners,
    });
  });
});
//Rota de alteração
router.post("/top/update/:id", (req, res) => {
  const id = req.body.id;
  const campeao = req.body.campeao;
  const classe = req.body.classe;
  const motivo = req.body.motivo;
  Top.update(
    {
      campeao: campeao,
      classe: classe,
      motivo: motivo,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/top");
  });
});
export default router;
