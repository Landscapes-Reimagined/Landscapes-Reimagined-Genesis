ServerEvents.recipes(event =>
    {
        // Creates New Rocket Sensor Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson(),
                    C: Ingredient.of('create:content_observer').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:rocket_sensor').toJson(),
                acceptMirrored: false
            }).id('genesis:ad_astra/rocket_sensor');

        // Creates New Automation NASA Workbench Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'CDC',
                    'ABA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_plate').toJson(),
                    B: Ingredient.of('create:smart_chute').toJson(),
                    C: Ingredient.of('minecraft:redstone').toJson(),
                    D: Ingredient.of('ad_astra:nasa_workbench').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:automation_nasa_workbench').toJson(),
                acceptMirrored: false
            }).id('genesis:ad_astra/automation_nasa_workbench');

        // Creates New Fuel Loader Recipe
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson(),
                    C: Ingredient.of('create:mechanical_pump').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:fuel_loader').toJson(),
                acceptMirrored: false
            }).id('genesis:ad_astra/fuel_loader');
    }
)
