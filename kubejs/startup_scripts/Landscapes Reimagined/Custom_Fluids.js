StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        // Landscapes Reimagined
        { id: 'createfoundry:molten_netherite_iron', name: 'Molten Netherite Iron', color: 0x727272 },
        { id: 'createfoundry:molten_netherite_gold', name: 'Molten Netherite Gold', color: 0x7e6504 },
        { id: 'createfoundry:molten_netherite_emerald', name: 'Molten Netherite Emerald', color: 0x007b18 },
        { id: 'createfoundry:molten_netherite_diamond', name: 'Molten Netherite Diamond', color: 0x1aaaa7 },

        // Ad Astra
        { id: 'createfoundry:molten_calorite', name: 'Molten Calorite', color: 0xc41a39 },
        { id: 'createfoundry:molten_ostrum', name: 'Molten Ostrum', color: 0x73515e },
        { id: 'createfoundry:molten_desh', name: 'Molten Desh', color: 0xb05a3c },
        { id: 'createfoundry:molten_steel', name: 'Molten Steel', color: 0x757276 },

        // Better End
        { id: 'createfoundry:molten_thallasium', name: 'Molten Thallasium', color: 0x87dad2 },
        { id: 'createfoundry:molten_amber', name: 'Molten Amber', color: 0xe28704 }
    ];

    // Function to create molten fluids (lava-like)
    function createMoltenFluid(event, fluid) {
        event.create(fluid.id)
            .color(fluid.color)
            .displayName(fluid.name)
            .bucketColor(fluid.color)
            .thinTexture(fluid.color)
            .viscosity(6000)
            .temperature(1300)
            .bucketItem;
    }

    // Create all molten fluids
    moltenFluids.forEach(fluid => createMoltenFluid(event, fluid));

    // Liquid Dragons Breath (used by the dragon's breath filling/emptying and dragon head recipes)
    event.create('genesis:liquid_dragons_breath')
        .color(0xc34781)
        .displayName('Liquid Dragons Breath')
        .bucketColor(0xc34781)
        .thickTexture(0xc34781)
        .viscosity(6000)
        .temperature(1300)
        .bucketItem;

});
