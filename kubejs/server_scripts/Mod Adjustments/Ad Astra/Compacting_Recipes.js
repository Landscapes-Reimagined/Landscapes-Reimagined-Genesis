ServerEvents.recipes(event =>
    {
        // Creates Missing Iron Plate Pressing Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        item: 'minecraft:iron_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:iron_plate',
                        nbt: {},
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/iron_plate')
    }
)
