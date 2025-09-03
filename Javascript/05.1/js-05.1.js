//Manipulação de datas

document.write("<p><h3>Manipulando datas:</h3></p>");
//Criar uma instância da classe Date() do Javascript

const dataAtual = new Date();
document.write(`<p>${dataAtual}<p>`);
//Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}<p>`);
//Pegando o mês atual
const mes = dataAtual.getMonth();
document.write(`<p>Estamos no mês: ${mes + 1}<p>`);
//Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano de: ${ano}<p>`);
//Pegando o dia da semana
const diaS = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaS + 1}ª<p>`);

// Adicionando dia, mêses e anos à data atual
//Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}<p>`);
//Adicionando mêses
dataAtual.setMonth(dataAtual.getMonth() + 3);
document.write(`<p>Daqui a 3 meses será: ${dataAtual.getMonth()}<p>`);
//Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);
document.write(`<p>Daqui a 10 dias será: ${dataAtual.getDate()}<p>`);

//Formatação de moedas
//Real
document.write("<p><h3>Formatação de moedas:</h3></p>");
const salario = 1512;
const salarioreal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salario minimo atual é: ${salarioreal}.</p>`);
//Dólar
const salariodolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>O salário em dólar: ${salariodolar}.</p>`);
//Convertendo de real para dólar
const salarioConvertido = salario * 0.176;
document.write(
  `<p>O salário convertido em dólar: ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}.</p>`
);
//Currency : EUR (para euro)

//Formatação de String (textos)
document.write("<p><h3>Formatação de Strings:</h3></p>");
const nome = "Yuri K";

//Alterando para letras maiúsculas
document.write(`<p> Nome em maiúscula: ${nome.toUpperCase()}`);
//Alterando para letras minúscula
document.write(`<p> Nome em minúsculo: ${nome.toLowerCase()}`);

//Removendo espaços da string (coisa avançada, mas aquilo ali significa que os espaços são trocados por vazio)
const novoNome = nome.replace(/\s/g, "");

//Contando caracteres de uma srting
document.write(`<p> Número de letras no nome: ${novoNome.length}`);
