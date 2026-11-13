ServerEvents.recipes(event =>
    {
        // Chainmail Armor Recipe

        // Chainmail Helmet
            event.shaped(
                Item.of('minecraft:chainmail_helmet', 1),
                [
                    'AAA',
                    'A A'
                ],
                {
                    A: 'minecraft:chain'
                }
            ).id('genesis:shaped/chainmail_helmet')

        // Chainmail Chestplate
            event.shaped(
                Item.of('minecraft:chainmail_chestplate', 1),
                [
                    'A A',
                    'AAA',
                    'AAA'
                ],
                {
                    A: 'minecraft:chain'
                }
            ).id('genesis:shaped/chainmail_chestplate')

        // Chainmail Leggings
            event.shaped(
                Item.of('minecraft:chainmail_leggings', 1),
                [
                    'AAA',
                    'A A',
                    'A A'
                ],
                {
                    A: 'minecraft:chain'
                }
            ).id('genesis:shaped/chainmail_leggings')

        // Chainmail Boots
            event.shaped(
                Item.of('minecraft:chainmail_boots', 1),
                [
                    'A A',
                    'A A'
                ],
                {
                    A: 'minecraft:chain'
                }
            ).id('genesis:shaped/chainmail_boots')
    }
)
