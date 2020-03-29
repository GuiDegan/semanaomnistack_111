
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('emial').notNullable(); //notNullable não permite q o campo fique em branco.//
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //como UF só possui dois caracteres, especificamos 2 na frente.//
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};