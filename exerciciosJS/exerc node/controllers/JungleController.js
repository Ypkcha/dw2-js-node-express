import express from "express";
const router = express.Router();

// conteudo da rota
router.get("/jungle", (req, res) => {
  const junglers = [
    { campeao: "Lillia", classe: "Mago", motivo: "Adoro ficar correndo pelo mapa" },
    { campeao: "Evelynn", classe: "Assasino", motivo: "A mecanica de camuflagem e o dano explosivo é uma das coisas que eu mais gosto" },
    { campeao: "Vi", classe: "Lutador", motivo: "Campeã muito fácil de jogar e fazer qualquer coisa" },
    { campeao: "Nunu e Willump", classe: "Tanque", motivo: "Muito fácil dar gank nível 2, ninguém espera" },
    { campeao: "Rek'sai", classe: "Lutador", motivo: "Uma das coisas mais legais é usar o sonar e os tuneis dela" },
  ];
  res.render("jungle", {
    junglers: junglers,
  });
});

export default router;
