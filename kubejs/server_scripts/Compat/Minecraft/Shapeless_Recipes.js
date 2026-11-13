ServerEvents.recipes(event =>
    {
        // Spelunkery Magnetite to New Age Magnetite
            event.shapeless(
                Item.of('create_new_age:magnetite_block'),
                [
                    '9x kubejs:magnetite'
                ]
            ).id('genesis:shapeless/magnetite_block')

        // Any Dirt to Vanilla Dirt
            event.shapeless(
                Item.of('minecraft:dirt'),
                [
                    '#minecraft:dirt'
                ]
            ).id('genesis:shapeless/dirt')
    }
)
