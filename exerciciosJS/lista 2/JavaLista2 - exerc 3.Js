class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "O herói está correndo!";
  }
  andar() {
    return "O herói está andando.";
  }
  atacar() {
    return "O herói está atacando!";
  }
  defender() {
    return "O herói está defendendo!";
  }
}

const homemAranha = new Heroi("Homem-Aranha", 15, 40, 25);
homemAranha.teia = 1;
homemAranha.sentidoAranha = () => {
  return "O herói detectou perigo através do sentido aranha!";
};

const superman = new Heroi("Superman", 50, 50, 50);
superman.podeVoar = 1;
superman.visaoCalor = () => {
  return "O herói está usando sua visão de calor!";
};

const batman = new Heroi("Batman", 30, 25, 45);
batman.esconder = 0;
batman.investigar = () => {
  return "O herói está investigando um crime!";
};
document.write(`<p> <h3>Homem aranha</h3> ${homemAranha.atacar()}<br> ${homemAranha.sentidoAranha()} <hr> <h3>Superman</h3>${superman.andar()}<br>${superman.visaoCalor()}<hr> <h3>Batman</h3>${batman.investigar()}<br> ${batman.correr()}<br> O herói ${batman.nome} tem ${batman.forca} de força!</p>`)