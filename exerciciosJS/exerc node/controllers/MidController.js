import express from "express";
const router = express.Router();

// conteudo da rota
router.get("/mid", (req, res) => {
  const midLaners = [
    { campeao: "Orianna", classe: "Mago", motivo: "Eu jogo com ela por conta dela ser bem consistente e ter uma mecânica bem legal com o orbe dela" },
    { campeao: "Aurora", classe: "Mago", motivo: "Tem vezes que ela simplesmente impossibilita quem você tá contra de jogar e eu acho isso engraçado" },
    { campeao: "Anivia", classe: "Mago", motivo: "Não sei dizer o exato motivo de gostar de jogar com ela, ela parece ser tão simples e entediante mas algo me encanta nisso" },
    { campeao: "Neeko", classe: "Mago", motivo: "Ela é um dos campeões que eu acho mais divertido de jogar, ainda mais por não precisar ficar forte pra ela ser útil" },
    { campeao: "Veigar", classe: "Mago", motivo: "Foi um dos primeiros que eu joguei então eu tenho um certo apego por ele" },
  ];
  res.render("mid", {
    midLaners: midLaners,
  });
});

export default router;
