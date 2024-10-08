// ORM - sequelize
import sequelize from "sequelize";
// configuração do Sequelize
import connection from "../config/sequeliza-config.js";

// .define cria tabela no banco
const cliente = connection.define("clientes", {
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: sequelize.STRING,
    allowNull: false,
  }
});

// não força a criação da tabela caso ja exista
cliente.sync({force: false})
export default cliente