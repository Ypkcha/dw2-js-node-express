import express from "express";
const router = express.Router();

// conteudo da rota
router.get("/top", (req, res) => {
  const topLaners = [
    { campeao: "Poppy", classe: "Tanque", motivo: "É praticamente uma piada que essa pintora de rodapé consegue dar dano e aguentar 2/3 pessoas quando ela tem 2 itens, dito isso adoro ela" },
    { campeao: "Gnar", classe: "Lutador", motivo: "Na duvida eu pego ele, adoro esse baixinho" },
    { campeao: "Ornn", classe: "Tanque", motivo: "Mais um tanque que consegue dar dano? esse jogo é tão bom" },
    { campeao: "Camille", classe: "Lutador", motivo: "Tava com vontade de me desafiar então comecei a jogar com ela" },
    { campeao: "Fiora", classe: "Lutador", motivo: "Sabe quando do nada da uma vontade de mudar o jeito que você se porta? eu começar a jogar com ela é praticamente a mesma coisa" },
  ];
  res.render("top", {
    topLaners: topLaners,
  });
});

export default router;
