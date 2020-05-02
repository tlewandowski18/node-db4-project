
exports.seed = async function(knex) {
  await knex("recipe").insert([
    {recipe_name: "PB&J"},
    {recipe_name: "Grilled Cheese"}
  ])
};
