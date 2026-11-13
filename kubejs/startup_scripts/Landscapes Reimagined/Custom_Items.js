StartupEvents.registry('item', event => {
    const items = [
        // Netherite Processing
        { id: 'kubejs:netherite_specks', name: 'Netherite Specks', texture: 'kubejs:item/netherite_specks' },
        { id: 'kubejs:netherite_dust', name: 'Netherite Dust', texture: 'kubejs:item/netherite_dust' },

        // Materials
        { id: 'kubejs:magnetite', name: 'Magnetite', texture: 'kubejs:item/magnetite' },

        // Landscapes Reimagined
        { id: 'kubejs:genesis_logo', name: 'Genesis Logo', texture: 'kubejs:item/genesis' }
    ];

    items.forEach(item => {
        let created = event.create(item.id)
            .displayName(item.name)
            .texture(item.texture);

        if (item.stack !== undefined) {
            created.maxStackSize(item.stack);
        }
    });
});
