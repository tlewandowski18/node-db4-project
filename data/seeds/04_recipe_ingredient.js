
exports.seed = async function(knex) {
  await knex("recipe_ingredient").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 2.0
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: 1.0
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 0.5
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: 2.0
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
      quantity: 2.0
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      quantity: 1.0
    }
  ])
};
