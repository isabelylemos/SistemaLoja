// importando o sequelize
import sequelize from "sequelize";

// criando os dados de conexão com o banco de dados
const connection = new sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    // comente essa linha na primeira execução da aplicação
    database: 'loja',
    timezone: '-03:00'
})

export default connection