import Knex from 'knex';

export async function up (knex: Knex) { // serve para realizar as alterações que precisamos no banco 
    // criação da tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary(); // id incremental e como chave primária
        table.string('image').notNullable(); // vai salvar a referencia, o nome do arquivo da imagem
        table.string('title').notNullable();
    });
}

export async function down (knex: Knex) { // para voltar atrás quando criar alguma tabela errada
    // deletar a tabela que foi criada
    return knex.schema.dropTable('items')
}

// OBSERVAÇÕES:
// o comando knex.schema.createTable serve para criar uma tabela dentro do banco de dados