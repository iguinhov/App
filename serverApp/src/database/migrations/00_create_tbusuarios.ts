import Knex from 'knex';


export async function up(knex: Knex) {
   return knex.schema.createTable('tb_usuarios', table=> {
      table.increments('id').primary();
      table.string('ds_name',100).notNullable();
      table.string('ds_login',20).notNullable();
      table.string('ds_password',20).notNullable();
      table.string('ds_email',50).notNullable();
      table.string('ds_image').notNullable();
    })


}

export async function down(knex: Knex) {
   return knex.schema.dropTable('tb_usuarios');

}