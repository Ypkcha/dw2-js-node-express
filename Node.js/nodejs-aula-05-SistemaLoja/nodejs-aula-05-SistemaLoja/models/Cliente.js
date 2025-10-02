// É no Model que criaremos a estrutura da tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela (define, o que tá es aspas é o nome da tabela, os objetos aqui são as colunas/atributos)
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Sincronzando a tabela com o banco de dados
Cliente.sync({ force: false });

export default Cliente;
