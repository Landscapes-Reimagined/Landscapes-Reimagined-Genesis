ServerEvents.recipes(event =>
    {
        // Create Chromatic Compound
            event.custom({
                type: "create:mixing",
                ingredients: [
                    Ingredient.of('minecraft:glowstone_dust').toJson(),
                    Ingredient.of('create:powdered_obsidian').toJson(),
                    Ingredient.of('create:polished_rose_quartz').toJson()
                ],
                results: [
                    Ingredient.of('create:chromatic_compound').toJson()
                ],
                conditions: ["superheated"]
            }).id('genesis:create/chromatic_compound');
    }
)
