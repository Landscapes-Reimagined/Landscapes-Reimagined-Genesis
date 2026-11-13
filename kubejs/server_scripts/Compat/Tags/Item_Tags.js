ServerEvents.tags('item', event =>
    {
        // adds the Netherite Iron Stuff to the #advancednetherite:iron tag
            event.add(
                'advancednetherite:iron',
                'farmersknives:netherite_iron_knife'
            )
            event.add(
                'advancednetherite:iron',
                '#advancednetherite:tiers/tools/netherite_iron'
            )
            event.add(
                'advancednetherite:iron',
                '#advancednetherite:tiers/armor/netherite_iron'
            )

        // adds the Netherite Gold Stuff to the #advancednetherite:gold tag
            event.add(
                'advancednetherite:gold',
                'farmersknives:netherite_gold_knife'
            )
            event.add(
                'advancednetherite:gold',
                '#advancednetherite:tiers/tools/netherite_gold'
            )
            event.add(
                'advancednetherite:gold',
                '#advancednetherite:tiers/armor/netherite_gold'
            )

        // adds the Netherite Emerald Stuff to the #advancednetherite:emerald tag
            event.add(
                'advancednetherite:emerald',
                'farmersknives:netherite_emerald_knife'
            )
            event.add(
                'advancednetherite:emerald',
                '#advancednetherite:tiers/tools/netherite_emerald'
            )
            event.add(
                'advancednetherite:emerald',
                '#advancednetherite:tiers/armor/netherite_emerald'
            )

        // adds the Netherite Diamond Stuff to the #advancednetherite:diamond tag
            event.add(
                'advancednetherite:diamond',
                'farmersknives:netherite_diamond_knife'
            )
            event.add(
                'advancednetherite:diamond',
                '#advancednetherite:tiers/tools/netherite_diamond'
            )
            event.add(
                'advancednetherite:diamond',
                '#advancednetherite:tiers/armor/netherite_diamond'
            )

        // Create Deco Zinc Sheet Plate Tags
            event.add (
                'c:zinc_plates',
                'createdeco:zinc_sheet'
            )
            event.add(
                'c:plates',
                'createdeco:zinc_sheet'
            )

        // Netherite Storage Tags (used by the Creative Crate recipe)
            event.add('genesis:netherite_barrel',[
                'reinfshulker:netherite_shulker_box',
                'sophisticatedstorage:netherite_shulker_box'
            ])
            event.add('genesis:netherite_chest',[
                'reinfchest:netherite_chest',
                'sophisticatedstorage:netherite_chest'
            ])
            event.add('genesis:netherite_shulker',[
                'reinfbarrel:netherite_barrel',
                'sophisticatedstorage:netherite_barrel'
            ])
    }
)
