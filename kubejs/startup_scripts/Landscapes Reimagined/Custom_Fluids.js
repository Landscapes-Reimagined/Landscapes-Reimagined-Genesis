StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        // Landscapes Reimagined
        { id: 'kubejs:liquid_dragons_breath', name: 'Liquid Dragons Breath', color: 0xc34781 },
        { id: 'kubejs:molten_netherite_iron', name: 'Molten Netherite Iron', color: 0x727272 },
        { id: 'kubejs:molten_netherite_gold', name: 'Molten Netherite Gold', color: 0xcd740b },
        { id: 'kubejs:molten_netherite_emerald', name: 'Molten Netherite Emerald', color: 0x007b18 },
        { id: 'kubejs:molten_netherite_diamond', name: 'Molten Netherite Diamond', color: 0x1aaaa7 },

        // Ad Astra
        { id: 'kubejs:molten_calorite', name: 'Molten Calorite', color: 0xc41a39 },
        { id: 'kubejs:molten_ostrum', name: 'Molten Ostrum', color: 0x73515e },
        { id: 'kubejs:molten_desh', name: 'Molten Desh', color: 0xb05a3c },
        { id: 'kubejs:molten_steel', name: 'Molten Steel', color: 0x757276 },

        // Better End
        { id: 'kubejs:molten_thallasium', name: 'Molten Thallasium', color: 0x87dad2 },
        { id: 'kubejs:molten_amber', name: 'Molten Amber', color: 0xe28704 }
    ];

    // Function to create molten fluids (lava-like)
    function createMoltenFluid(event, fluid) {
        event.create(fluid.id)
            .color(fluid.color)
            .displayName(fluid.name)
            .bucketColor(fluid.color)
            .thickTexture(fluid.color)
            .viscosity(6000)
            .temperature(1300)
            .bucketItem;
    }

    // Create all molten fluids
    moltenFluids.forEach(fluid => createMoltenFluid(event, fluid));

});
