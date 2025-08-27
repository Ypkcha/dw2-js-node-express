//Classes no Javascript

//criando um classe

class Carro {
  //Para criar os atributos da classe deve-se utilizar o método "constructor"
  constructor(marca, modelo, ano) {
    //this - representa a instância (objeto). O valor que for enviado a classe será atribuido a instância
    //Atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando instâncias (objetos) derivadas da classe Carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
  `<p>
    O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${
    carroPopular.ano
  }. Quando buzina faz ${carroPopular.buzinar()}
  </p>`
);

//Objeto - Carro esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(
  `<p>
    O carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } é do ano de ${
    carroEsportivo.ano
  }. Quando buzina faz ${carroEsportivo.buzinar()}
  </p>`
);

//Adicionar um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionar um novo método
carroEsportivo.turbo = () => {
  return "Vrummmmmmmmm!🔥 O carro acelera muito!!!!!!!!!";
}
document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)