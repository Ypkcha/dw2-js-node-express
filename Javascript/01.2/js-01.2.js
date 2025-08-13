//Função anônima
const soma = function (n1, n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8, 7)}.</p>`);
const tipo = typeof soma;
document.write(`${tipo}`);

//Arrow function (função anônima)
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`);

//Arrow function com mais de um parâmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1}${operador}${num2}`);
};
//eval no JavaScript é uma função nativa que realiza cálculos a partir de dois números e um operador.
document.write(`<p>O resultado da operação é  ${calc(1100, "-", 1)}.</p>`);

//Simplificando arrow funciton com um único retorno
const calculadora = (num1, operador, num2) => eval(`${num1}${operador}${num2}`);
document.write(
  `<p>O resultado da operação é  ${calculadora(1100, "+", 1)}.</p>`
);

//IIFE - Função imediata (Immediately Invoked Function Expression)

const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente!</p>");
})();

//IIFE com parâmetro
const loadUser = (function(user){
  document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`)
})("Yuri");