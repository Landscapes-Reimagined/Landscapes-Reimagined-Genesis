ServerEvents.recipes(event =>
    {
        // Fixes Create Diesel Engine Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'ACA',
                    ' D ',
                    'EFE'
                ],
                key: {
                    A: Ingredient.of('createdieselgenerators:engine_piston').toJson(),
                    B: Ingredient.of('minecraft:flint_and_steel').toJson(),
                    C: Ingredient.of('create:brass_block').toJson(),
                    D: Ingredient.of('create:fluid_tank').toJson(),
                    E: Ingredient.of('create:sturdy_sheet').toJson(),
                    F: Ingredient.of('create:fluid_pipe').toJson()
                },
                result: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
                acceptMirrored: false
            }).id('genesis:create/diesel_engine');

        // Fixes Create Modular Diesel Engine Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    ' C ',
                    'DED'
                ],
                key: {
                    A: Ingredient.of('create:andesite_alloy').toJson(),
                    B: Ingredient.of('minecraft:flint_and_steel').toJson(),
                    C: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
                    D: Ingredient.of('create:sturdy_sheet').toJson(),
                    E: Ingredient.of('create:precision_mechanism').toJson()
                },
                result: Ingredient.of('createdieselgenerators:large_diesel_engine').toJson(),
                acceptMirrored: false
            }).id('genesis:create/modular_diesel_engine');

        // Fixes Create Diesel Engine Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'FCF',
                    'BDB',
                    ' A ',
                    'EAE'
                ],
                key: {
                    A: Ingredient.of('createdieselgenerators:engine_piston').toJson(),
                    B: Ingredient.of('create:brass_ingot').toJson(),
                    C: Ingredient.of('createdieselgenerators:diesel_engine').toJson(),
                    D: Ingredient.of('create:fluid_tank').toJson(),
                    E: Ingredient.of('create:sturdy_sheet').toJson(),
                    F: Ingredient.of('create:fluid_pipe').toJson()
                },
                result: Ingredient.of('createdieselgenerators:huge_diesel_engine').toJson(),
                acceptMirrored: false
            }).id('genesis:create/huge_diesel_engine');
    }
)
