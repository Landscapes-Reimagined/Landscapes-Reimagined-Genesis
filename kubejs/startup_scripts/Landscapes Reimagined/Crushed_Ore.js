StartupEvents.registry('item', event => {

    // List of materials
    const materials = [
        // Ad Astra
        'Desh',
        'Ostrum',
        'Calorite',

        // Better End
        'Thallasium',
        'Amber'
    ];

    // Crushed Ores
    function createCrushedOres(event, material) {
        const id = `crushed_${material.toLowerCase()}_ore`;
        event.create(`genesis:${id}`)
            .displayName(`Crushed ${material} Ore`)
            .texture(`kubejs:item/${id}`);
    }

    materials.forEach(material => {
        createCrushedOres(event, material);
    });

});
