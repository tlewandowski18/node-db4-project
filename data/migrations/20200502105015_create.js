
exports.up = async function(knex) {
    await knex.schema.createTable("recipe", table => {
        table.increments("id")
        table.text("recipe_name").notNull().unique()
    })
    await knex.schema.createTable("instruction", table => {
        table.increments("id")
        table.integer("step_number").notNull()
        table.text("instruction_text").notNull()
        table.integer("recipe_id")
          .references("id")
          .inTable("recipe")
          .onDelete("SET NULL")
    })
    await knex.schema.createTable("ingredient", table => {
        table.increments("id")
        table.text("ingredient_name").notNull().unique()
    })
    await knex.schema.createTable("recipe_ingredient", table => {
        table.integer("recipe_id")
          .references("id")
          .inTable("recipe")
          .onDelete("CASCADE")
        table.integer("ingredient_id")
          .references("id")
          .inTable("ingredient")
          .onDelete("CASCADE")
        table.float("quantity").notNull()
        table.primary(["recipe_id", "ingredient_id"])
    })
  
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("recipe_ingredient")
      await knex.schema.dropTableIfExists("ingredient")
      await knex.schema.dropTableIfExists("instruction")
      await knex.schema.dropTableIfExists("recipe")
    
  };
  