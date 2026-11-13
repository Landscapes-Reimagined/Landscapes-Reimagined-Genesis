ServerEvents.recipes(event =>
    {
        // Creates Deeper and Darker Patchouli Guide
            event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"deeperdarker:wanderers_notebook"}'),
                [
                    'minecraft:book',
                    'minecraft:sculk'
                ]
            ).id('genesis:shapeless/guide_book')

        // Creates Tom's Simple Storage Guide
            event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:toms_simple_storage"}'),
                [
                    'minecraft:book',
                    'minecraft:chest'
                ]
            ).id('genesis:shapeless/guide_book_2')

        // Creates Immersive Aircrafts Guide
            event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:immersive_aircraft"}'),
                [
                    'minecraft:book',
                    'immersive_aircraft:hull'
                ]
            ).id('genesis:shapeless/guide_book_3')

        // Create a Quest Book Recipe
            event.shapeless(
                Item.of('heracles:quest_book'),
                [
                    'minecraft:book',
                    'minecraft:emerald'
                ]
            ).id('genesis:shapeless/quest_book')
    }
)
