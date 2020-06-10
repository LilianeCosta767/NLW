import Knex from 'knex';

export async function up (knex: Knex) { // serve para realizar as alterações que precisamos no banco 
    // criação da tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary(); // id incremental e como chave primária

        table.integer('point_id')
            .notNullable()
            .references('id') // chave estrangeira
            .inTable('points'); 

        table.integer('item_id')
            .notNullable()
            .references('id') // chave estrangeira
            .inTable('items'); 
    });
}

export async function down (knex: Knex) { // para voltar atrás quando criar alguma tabela errada
    // deletar a tabela que foi criada
    return knex.schema.dropTable('point_items')
}

// OBSERVAÇÕES:
// o comando knex.schema.createTable serve para criar uma tabela dentro do banco de dados