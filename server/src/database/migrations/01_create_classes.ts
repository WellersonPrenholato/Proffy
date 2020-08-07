import Knex from 'knex';

// Faço as alterações no BD
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// Desfaço as alterações realizadas no método up
export async function down(knex: Knex){
    return knex.schema.dropTable ('classes');
}