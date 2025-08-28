let listaClientes = [
  {
    nome: "Alceu",
    endereco: "Cajati",
    cpf: 14554878900,
  },
  {
    nome: "Breno",
    endereco: "Registro",
    cpf: 28945371200,
  },
  {
    nome: "Célia",
    endereco: "Curitiba",
    cpf: 33547815900,
  },
];

listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome}<br> Endereço: ${cliente.endereco}<br> CPF: ${cliente.cpf}<br><br>`
  );
});

document.write(`<hr><h3>Passo 3</h3><br></hr>`)

listaClientes.push({
    nome: "Denis",
    endereco: "Jacupiranga",
    cpf: 44875615400,
  },);

listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome}<br> Endereço: ${cliente.endereco}<br> CPF: ${cliente.cpf}<br><br>`
  );
});
document.write(`<hr><h3>Passo 4</h3><br></hr>`)

listaClientes.unshift({
    nome: "Zé",
    endereco: "São Paulo",
    cpf: 532587123,
  },);

listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome}<br> Endereço: ${cliente.endereco}<br> CPF: ${cliente.cpf}<br><br>`
  );
});