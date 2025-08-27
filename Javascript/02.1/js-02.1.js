const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof products);
document.write("<p>Exibindo um elemento do array através do índice:</p>");
document.write(`<p>${products[1]}</p>`);

document.write("<p>Percorrendo um array através do forEach</p>");
products.forEach((products) => {
  document.write(`<p>${products}</p>`);
});
//Traduzindo acima: Para cada elemento dentro da array escreva no documento... É tipo um for... se pa ta no nome né idiota...

document.write("<p>Mostrando os indices e valores com forEach</p>");
products.forEach((products, i) => {
  document.write(`<p>${i + 1} - ${products}</p>`);
});
