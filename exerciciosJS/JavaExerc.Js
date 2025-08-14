const user = prompt("Digite seu nome de usuário.");
function saudacaoPersonalizada(user) {
  document.write(`<h2>Olá, ${user}! Bem-vindo(a) à Calculadora Universal</h2>`);
}
saudacaoPersonalizada(user);

const num1 = prompt("Digite o primeiro número.");
const operador = prompt("Digite o operador da primeira conta.");
const num2 = prompt("Digite o segundo número.");
function operaçaoMatematica(num1, operador, num2) {
  return eval(`${num1}${operador}${num2}`);
}
document.write(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${operaçaoMatematica(
    num1,
    operador,
    num2
  )}</p>`
);

const calcularDobro = function (x) {
  return x * 2;
};
x = prompt("Digite um número para ser dobrado");
document.write(`<p>O dobro de ${x} é ${calcularDobro(x)}</p>`);

const calcularMetade = (num) => {
  return num / 2;
};
num = prompt("Digite um número para ser dividido em 2");
document.write(`<p>A metade de ${num} é ${calcularMetade(num)}</p>`);

const iife = (function () {
  document.write("<p>Calculadora Universal pronta para uso!</p>");
})();

/*Função anônima
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
document.write(`<p>O resultado de operação é  ${calc(1100, "-", 1)}.</p>`);

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
*/
