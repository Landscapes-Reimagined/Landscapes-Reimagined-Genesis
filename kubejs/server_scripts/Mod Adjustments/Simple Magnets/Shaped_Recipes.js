ServerEvents.recipes(event =>
    {
        // Basic Magnet
            event.remove({ id: 'simplemagnets:basicmagnet' })
            event.shaped(Item.of( 'simplemagnets:basicmagnet', 1),
                [
                    'L R',
                    'AMA',
                    'AAA'
                ],
                {
                    L: 'minecraft:lapis_lazuli',
                    R: 'create:polished_rose_quartz',
                    A: 'createdeco:andesite_sheet',
                    M: 'spelunkery:item_magnet'
                }
            ).id( 'genesis:shaped/basic_magnet' )

        // Advanced Magnet
            event.remove({ id: 'simplemagnets:advancedmagnet' })
            event.shaped(Item.of( 'simplemagnets:advancedmagnet', 1),
                [
                    'L R',
                    'GMG',
                    'GGG'
                ],
                {
                    L: 'minecraft:lapis_lazuli',
                    R: 'create:polished_rose_quartz',
                    G: 'create:golden_sheet',
                    M: 'simplemagnets:basicmagnet'
                }
            ).id( 'genesis:shaped/advanced_magnet' )
    }
)
