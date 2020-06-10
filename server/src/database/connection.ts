// arquivo para a conexão com o banco de dados

import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), // função resolve serve para unir caminhos, diretorio no caso, de acordo com o sistema operacional utilizado
    },
    useNullAsDefault: true,
});

export default connection;

// OBSERVAÇÕES
// dirname é uma variavel que retorna o diretorio do arquivo que tá executando-a, sendo que o dirname, nos "buracos do javascript" é uma função, por isso, retorna.
// tabela pivô é gerada a partir de duas tabelas, ou seja, a relação entre elas
// migrations é o historico do banco de dados
