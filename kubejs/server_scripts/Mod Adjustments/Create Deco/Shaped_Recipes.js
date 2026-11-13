ServerEvents.recipes(event =>
    {

        // Creates Recipe for the Green Zinc Lamp using Tags
            event.shaped('createdeco:green_zinc_lamp',
                [
                    'A',
                    'B',
                    'C'
                ],
                {
                    'A':'#c:zinc_nuggets',
                    'B':'#c:glow_berries',
                    'C':'#c:zinc_plates'
                }
            ).id('genesis:shaped/green_zinc_lamp');

        // Creates Recipe for the Red Zinc Lamp using Tags
            event.shaped('createdeco:red_zinc_lamp',
                [
                    'A',
                    'B',
                    'C'
                ],
                {
                    'A':'#c:zinc_nuggets',
                    'B':'minecraft:redstone_torch',
                    'C':'#c:zinc_plates'
                }
            ).id('genesis:shaped/red_zinc_lamp');

        // Creates Recipe for the Blue Zinc Lamp using Tags
            event.shaped('createdeco:blue_zinc_lamp',
                [
                    'A',
                    'B',
                    'C'
                ],
                {
                    'A':'#c:zinc_nuggets',
                    'B':'minecraft:soul_torch',
                    'C':'#c:zinc_plates'
                }
            ).id('genesis:shaped/blue_zinc_lamp');

        // Creates Recipe for the Yellow Zinc Lamp using Tags
            event.shaped('createdeco:yellow_zinc_lamp',
                [
                    'A',
                    'B',
                    'C'
                ],
                {
                    'A':'#c:zinc_nuggets',
                    'B':'minecraft:torch',
                    'C':'#c:zinc_plates'
                }
            ).id('genesis:shaped/yellow_zinc_lamp');

        // Creates Recipe for Zinc Sheet Metal Block using Tags
            event.shaped('4x createdeco:zinc_sheet_metal',
                [
                    'AA',
                    'AA'
                ],
                {
                    'A': '#c:zinc_plates'
                }
            ).id('genesis:shaped/zinc_sheet_metal');
    }
)
