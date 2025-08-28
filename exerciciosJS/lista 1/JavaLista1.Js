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
