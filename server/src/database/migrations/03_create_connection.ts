import Knex from 'knex';

// Faço as alterações no BD
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('create_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

// Desfaço as alterações realizadas no método up
export async function down(knex: Knex){
    return knex.schema.dropTable ('connections');
}