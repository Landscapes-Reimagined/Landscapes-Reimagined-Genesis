StartupEvents.registry('item', event => {

    const incompleteItems = [
        // Netherite Processing
        { id: 'genesis:incomplete_netherite_dust', name: 'Incomplete Netherite Dust', texture: 'kubejs:item/incomplete_netherite_dust' }
    ];

    incompleteItems.forEach(item => {
        event.create(item.id)
            .displayName(item.name)
            .texture(item.texture);
    });

});
