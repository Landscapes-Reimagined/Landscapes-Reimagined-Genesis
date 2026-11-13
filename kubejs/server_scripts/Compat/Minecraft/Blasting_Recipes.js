ServerEvents.recipes(event =>
    {
        // Creates Blasting Recipes

        // Desh Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_desh_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:desh_ingot'
                }
            }).id('genesis:blasting/desh_ingot')

        // Ostrum Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_ostrum_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:ostrum_ingot'
                }
            }).id('genesis:blasting/ostrum_ingot')

        // Calorite Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_calorite_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'ad_astra:calorite_ingot'
                }
            }).id('genesis:blasting/calorite_ingot')

        // Creates Blasting Recipes

        // Thallasium Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_thallasium_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'betterend:thallasium_ingot'
                }
            }).id('genesis:blasting/thallasium_ingot')

        // Amber Ore
            event.custom({
                type: "minecraft:blasting",
                ingredient: [ // Changed 'ingredients' to 'ingredient'
                    { item: 'kubejs:crushed_amber_ore' }
                ],
                cookingTime: 100,
                experience: 0.1,
                result: { // Ensure 'result' is a single object, not an array
                    item: 'betterend:raw_amber'
                }
            }).id('genesis:blasting/raw_amber')

        // Spelunkery Magnetite to New Age Magnetite
            event.blasting(
                'create_new_age:magnetite_block',
                'spelunkery:raw_magnetite_block'
            ).id('genesis:blasting/magnetite_block')
            event.blasting(
                'kubejs:magnetite',
                'spelunkery:raw_magnetite'
            ).id('genesis:blasting/magnetite')
    }
)
