
exports.seed = async function(knex) {
  await knex("ingredient").insert([
    {ingredient_name: "bread (slices)"},
    {ingredient_name: "peanut butter (tbsp)"},
    {ingredient_name: "jelly (tbsp)"},
    {ingredient_name: "cheese (slices)"},
    {ingredient_name: "butter (tbsp)"}
  ])
};
