ServerEvents.recipes(event =>
    {
        // Fixes Create Diesel Engine Piston Recipe
            event.shaped(
                Item.of('createdieselgenerators:engine_piston', 2),
                [
                    'A ',
                    ' B'
                ],
                {
                    A: 'create:andesite_alloy',
                    B: 'create:shaft'
                }
            ).id('genesis:shaped/engine_piston');
    }
)
