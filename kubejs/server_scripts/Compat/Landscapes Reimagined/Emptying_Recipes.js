ServerEvents.recipes(event =>
    {
        // New Dragon's Breath Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                    {
                        item: 'minecraft:dragon_breath',
                        count: 1
                    }
                ],
                results: [
                    {
                        item: 'minecraft:glass_bottle'
                    },
                    {
                        fluid: 'genesis:liquid_dragons_breath',
                        amount: 8100
                    }
                ],
            }).id('genesis:emptying/dragons_breath')
    }
)
