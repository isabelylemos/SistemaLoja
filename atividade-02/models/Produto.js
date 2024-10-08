import sequelize from "sequelize";
import connection from "../config/sequeliza-config.js";

const produtos = connection.define("produtos", {
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  categoria: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

produtos.sync({ force: false });
export default produtos;
