ServerEvents.recipes(event =>
    {
        // Netherite Automation
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                    'AAA',
                    'ABA',
                    'CCC'
                ],
                key: {
                    A: Ingredient.of('genesis:netherite_dust').toJson(),
                    B: Ingredient.of('minecraft:wither_skeleton_skull').toJson(),
                    C: Ingredient.of('create:chromatic_compound').toJson(),
                },
                result: Ingredient.of('minecraft:netherite_ingot').toJson(),
                acceptMirrored: false
            }).id('genesis:create/netherite_ingot');
    }
)
