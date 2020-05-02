
exports.seed = async function(knex) {
  await knex("instruction").insert([
    {
      instruction_text: "spread peanut butter on on slice of bread",
      recipe_id: 1,
      step_number: 1
    },
    {
      instruction_text: "spread jelly on other slice of bread",
      recipe_id: 1,
      step_number: 2
    },
    {
      instruction_text: "put slices of bread together",
      recipe_id: 1,
      step_number: 3
    },
    {
      instruction_text: "spread butter on one side of both slices of bread",
      recipe_id: 2,
      step_number: 1
    },
    {
      instruction_text: "place slice of cheese in between the 'unbuttered' side of both slices of bread",
      recipe_id: 2,
      step_number: 2
    },
    {
      instruction_text: "grill on both sides",
      recipe_id: 2,
      step_number: 3
    }
  ])
};
