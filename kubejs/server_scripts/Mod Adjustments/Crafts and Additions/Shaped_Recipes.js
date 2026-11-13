ServerEvents.recipes(event =>
    {
        // Creates recipe for Capacitors using tags instead of item
            event.shaped('createaddition:capacitor',
                [
                    'A',
                    'B',
                    'C'
                ],
                {
                    'A': '#c:copper_plates',
                    'B': '#c:zinc_plates',
                    'C': 'minecraft:redstone_torch'
                }
            ).id('genesis:shaped/capacitor');
    }
)
