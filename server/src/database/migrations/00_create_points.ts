import Knex from 'knex';

export async function up (knex: Knex) { // serve para realizar as alterações que precisamos no banco 
    // criação da tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(); // id incremental e como chave primária
        table.string('image').notNullable(); // vai salvar a referencia, o nome do arquivo da imagem
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // tem somente 2 caracteres
    });
}

export async function down (knex: Knex) { // para voltar atrás quando criar alguma tabela errada
    // deletar a tabela que foi criada
    return knex.schema.dropTable('points')
}

// OBSERVAÇÕES:
// o comando knex.schema.createTable serve para criar uma tabela dentro do banco de dados