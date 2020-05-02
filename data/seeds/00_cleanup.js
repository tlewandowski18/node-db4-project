
exports.seed = async function(knex) {
  await knex("recipe_ingredient").truncate()
  await knex("instruction").truncate()
  await knex("recipe").truncate()
  await knex("ingredient").truncate()
  
};
