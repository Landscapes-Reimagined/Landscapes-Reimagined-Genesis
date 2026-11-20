StartupEvents.registry('item', event => {

    // Create Foundry moulds, named like createfoundry:copper_ingot_mould
    const moulds = [
        // Advanced Netherite
        { id: 'createfoundry:netherite_iron_ingot_mould', name: 'Netherite Iron Ingot Mould' },
        { id: 'createfoundry:netherite_gold_ingot_mould', name: 'Netherite Gold Ingot Mould' },
        { id: 'createfoundry:netherite_emerald_ingot_mould', name: 'Netherite Emerald Ingot Mould' },
        { id: 'createfoundry:netherite_diamond_ingot_mould', name: 'Netherite Diamond Ingot Mould' },

        // Ad Astra
        { id: 'createfoundry:calorite_ingot_mould', name: 'Calorite Ingot Mould' },
        { id: 'createfoundry:ostrum_ingot_mould', name: 'Ostrum Ingot Mould' },
        { id: 'createfoundry:desh_ingot_mould', name: 'Desh Ingot Mould' },
        { id: 'createfoundry:steel_ingot_mould', name: 'Steel Ingot Mould' },

        // Better End
        { id: 'createfoundry:thallasium_ingot_mould', name: 'Thallasium Ingot Mould' },
        { id: 'createfoundry:amber_gem_mould', name: 'Amber Gem Mould' },

        // Block Moulds
        { id: 'createfoundry:block_mould_blueprint', name: 'Block Mould Blueprint' },
        { id: 'createfoundry:empty_block_mould', name: 'Empty Block Mould' },

        // Create Foundry Block Moulds
        { id: 'createfoundry:copper_block_mould', name: 'Copper Block Mould' },
        { id: 'createfoundry:iron_block_mould', name: 'Iron Block Mould' },
        { id: 'createfoundry:gold_block_mould', name: 'Gold Block Mould' },
        { id: 'createfoundry:coal_block_mould', name: 'Coal Block Mould' },
        { id: 'createfoundry:diamond_block_mould', name: 'Diamond Block Mould' },
        { id: 'createfoundry:zinc_block_mould', name: 'Zinc Block Mould' },
        { id: 'createfoundry:brass_block_mould', name: 'Brass Block Mould' },
        { id: 'createfoundry:emerald_block_mould', name: 'Emerald Block Mould' },
        { id: 'createfoundry:redstone_block_mould', name: 'Redstone Block Mould' },
        { id: 'createfoundry:lapis_block_mould', name: 'Lapis Block Mould' },
        { id: 'createfoundry:ancient_debris_block_mould', name: 'Ancient Debris Block Mould' },
        { id: 'createfoundry:netherite_block_mould', name: 'Netherite Block Mould' },

        // Advanced Netherite Block Moulds
        { id: 'createfoundry:netherite_iron_block_mould', name: 'Netherite Iron Block Mould' },
        { id: 'createfoundry:netherite_gold_block_mould', name: 'Netherite Gold Block Mould' },
        { id: 'createfoundry:netherite_emerald_block_mould', name: 'Netherite Emerald Block Mould' },
        { id: 'createfoundry:netherite_diamond_block_mould', name: 'Netherite Diamond Block Mould' },

        // Ad Astra Block Moulds
        { id: 'createfoundry:calorite_block_mould', name: 'Calorite Block Mould' },
        { id: 'createfoundry:ostrum_block_mould', name: 'Ostrum Block Mould' },
        { id: 'createfoundry:desh_block_mould', name: 'Desh Block Mould' },
        { id: 'createfoundry:steel_block_mould', name: 'Steel Block Mould' },

        // Better End Block Moulds
        { id: 'createfoundry:thallasium_block_mould', name: 'Thallasium Block Mould' },
        { id: 'createfoundry:amber_block_mould', name: 'Amber Block Mould' }
    ];

    moulds.forEach(mould => {
        event.create(mould.id)
            .displayName(mould.name)
            .texture('createfoundry:item/' + mould.id.split(':')[1]);
    });

});
