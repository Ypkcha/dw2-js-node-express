import express from "express";
const router = express.Router();

// conteudo da rota
router.get("/mid", (req, res) => {
  const midLaners = [
    { campeao: "Orianna", classe: "Mago", motivo: "---" },
    { campeao: "Aurora", classe: "Mago", motivo: "---" },
    { campeao: "Anivia", classe: "Mago", motivo: "---" },
    { campeao: "Lissandra", classe: "Mago", motivo: "---" },
    { campeao: "Veigar", classe: "Mago", motivo: "---" },
  ];
  res.render("mid", {
    midLaners: midLaners,
  });
});

export default router;
