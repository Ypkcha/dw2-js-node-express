const dataAtual = new Date();

document.write(`<p>${dataAtual}</p>`);

const compraInternacional = 500.75;
document.write(
  `<p>O valor da compra em dólar é de: ${compraInternacional.toLocaleString(
    "en",
    {
      style: "currency",
      currency: "USD",
    }
  )}.</p>`
);

const compraConvertida = compraInternacional * 5.45
document.write(
  `<p>O valor da compra em reais é de:${compraConvertida.toLocaleString("pt-br",{
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`
);

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
document.write(`<p>A sua entrega chegara nessa data: ${dia}/${mes}/${ano}<p>`);