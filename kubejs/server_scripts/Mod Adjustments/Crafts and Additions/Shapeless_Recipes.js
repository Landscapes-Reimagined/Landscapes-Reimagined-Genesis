ServerEvents.recipes(event =>
    {
        // Diamond Grit Sandpaper
            event.shapeless(
                Item.of('createaddition:diamond_grit_sandpaper'),
                [
                    'minecraft:paper',
                    'createaddition:diamond_grit'
                ]
            ).id('genesis:shapeless/diamond_grit_sandpaper')
    }
)
