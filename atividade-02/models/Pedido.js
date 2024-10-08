import sequelize from "sequelize"
import connection from "../config/sequeliza-config.js"

const pedido = connection.define("pedidos", {
    numero: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: sequelize.FLOAT,
        allowNull: false,
    }
})

pedido.sync({force: false})
export default pedido
