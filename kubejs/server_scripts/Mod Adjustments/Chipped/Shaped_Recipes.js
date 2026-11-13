ServerEvents.recipes(event =>
    {
        // Fixes Chipped Tinkering Table Recipe
            event.shaped(
                Item.of('chipped:tinkering_table', 1),
                [
                    'A  ',
                    'BCC',
                    'DED'
                ],
                {
                    A: 'minecraft:redstone_torch',
                    B: 'minecraft:piston',
                    C: '#minecraft:wooden_slabs',
                    D: '#c:stripped_logs',
                    E: 'minecraft:tnt'
                }
            ).id('genesis:shaped/tinkering_table')
    }
)
