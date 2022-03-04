exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
      users
        .integer('eventId')
        .unsigned()
        .references('events.eventId')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    })

    .createTable('events', (event) => {
      event.string('eventName', 200).notNullable()
      event.increments('eventId')
    })

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('events')
}
