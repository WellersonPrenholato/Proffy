import Knex from 'knex';

// Faço as alterações no BD
export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// Desfaço as alterações realizadas no método up
export async function down(knex: Knex){
    return knex.schema.dropTable ('users');
}