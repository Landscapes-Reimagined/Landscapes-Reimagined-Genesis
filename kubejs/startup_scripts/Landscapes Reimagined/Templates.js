StartupEvents.registry('item', event => {
    const items = [
        // Netherite Upgrades
        { id: 'genesis:netherite_iron_upgrade', name: 'Netherite Iron Smithing Template', texture: 'kubejs:item/netherite_iron_upgrade_smithing_template' },
        { id: 'genesis:netherite_gold_upgrade', name: 'Netherite Gold Smithing Template', texture: 'kubejs:item/netherite_gold_upgrade_smithing_template' },
        { id: 'genesis:netherite_emerald_upgrade', name: 'Netherite Emerald Smithing Template', texture: 'kubejs:item/netherite_emerald_upgrade_smithing_template' },
        { id: 'genesis:netherite_diamond_upgrade', name: 'Netherite Diamond Smithing Template', texture: 'kubejs:item/netherite_diamond_upgrade_smithing_template' }
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
