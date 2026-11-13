ServerEvents.recipes(event =>
    {
        // Fixes Slice and Dice Sprinkler Recipe
            event.shaped(
                Item.of('sliceanddice:sprinkler', 3),
                [
                    ' A',
                    ' B'
                ],
                {
                    A: 'create:fluid_pipe',
                    B: 'minecraft:iron_bars'
                }
            ).id('genesis:shaped/sprinkler');
    }
)
