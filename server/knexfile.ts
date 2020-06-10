// possui alguma confgurações que a conexão com o banco não possui

import path from 'path';

module.exports = { // exportação do typescript, substitui o "export default"
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'), // função resolve serve para unir caminhos, diretorio no caso, de acordo com o sistema operacional utilizado
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};