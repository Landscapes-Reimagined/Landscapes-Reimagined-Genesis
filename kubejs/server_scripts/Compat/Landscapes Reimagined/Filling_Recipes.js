ServerEvents.recipes(event =>
    {
        // Liquid to Bottle Recipe
            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        fluid: 'genesis:liquid_dragons_breath',
                        amount: 8100
                    },
                    {
                        item: 'minecraft:glass_bottle',
                        count: 1
                    }
                ],
                results: [
                    {
                        item: 'minecraft:dragon_breath',
                        count: 1
                    }
                ]
            }).id('genesis:filling/dragons_breath')
    }
)
