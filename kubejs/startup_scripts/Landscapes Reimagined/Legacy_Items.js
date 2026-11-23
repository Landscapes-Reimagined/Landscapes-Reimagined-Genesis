// priority: 100
// Legacy kubejs: items, blocks and fluids from before the genesis: namespace change.
// They stay registered so old worlds don't delete them; Legacy_Item_Conversion.js (server)
// swaps them for the new ids. Remove this file (and the server/client legacy files) in a
// later version once players have had time to update their worlds.

// Shared with the server and client legacy scripts
global.GENESIS_LEGACY = {

    // Items: old id -> new id
    items: {
        // Crushed Ores
        'kubejs:crushed_desh_ore': 'genesis:crushed_desh_ore',
        'kubejs:crushed_ostrum_ore': 'genesis:crushed_ostrum_ore',
        'kubejs:crushed_calorite_ore': 'genesis:crushed_calorite_ore',
        'kubejs:crushed_thallasium_ore': 'genesis:crushed_thallasium_ore',
        'kubejs:crushed_amber_ore': 'genesis:crushed_amber_ore',

        // Netherite Processing
        'kubejs:netherite_specks': 'genesis:netherite_specks',
        'kubejs:incomplete_netherite_dust': 'genesis:incomplete_netherite_dust',
        'kubejs:netherite_dust': 'genesis:netherite_dust',

        // Netherite Upgrades
        'kubejs:netherite_iron_upgrade': 'genesis:netherite_iron_upgrade',
        'kubejs:netherite_gold_upgrade': 'genesis:netherite_gold_upgrade',
        'kubejs:netherite_emerald_upgrade': 'genesis:netherite_emerald_upgrade',
        'kubejs:netherite_diamond_upgrade': 'genesis:netherite_diamond_upgrade',

        // Misc
        'kubejs:magnetite': 'genesis:magnetite',
        'kubejs:genesis_logo': 'genesis:genesis_logo',
        'kubejs:trophy_block': 'genesis:trophy_block',

        // Buckets
        'kubejs:liquid_dragons_breath_bucket': 'genesis:liquid_dragons_breath_bucket',
        'kubejs:molten_netherite_iron_bucket': 'createfoundry:molten_netherite_iron_bucket',
        'kubejs:molten_netherite_gold_bucket': 'createfoundry:molten_netherite_gold_bucket',
        'kubejs:molten_netherite_emerald_bucket': 'createfoundry:molten_netherite_emerald_bucket',
        'kubejs:molten_netherite_diamond_bucket': 'createfoundry:molten_netherite_diamond_bucket',
        'kubejs:molten_calorite_bucket': 'createfoundry:molten_calorite_bucket',
        'kubejs:molten_ostrum_bucket': 'createfoundry:molten_ostrum_bucket',
        'kubejs:molten_desh_bucket': 'createfoundry:molten_desh_bucket',
        'kubejs:molten_steel_bucket': 'createfoundry:molten_steel_bucket',
        'kubejs:molten_thallasium_bucket': 'createfoundry:molten_thallasium_bucket',
        'kubejs:molten_amber_bucket': 'createfoundry:molten_amber_bucket'
    },

    // Placed blocks: old id -> new id
    blocks: {
        'kubejs:trophy_block': 'genesis:trophy_block'
    },

    // Fluids (in tanks/pipes): old id -> new id, converted 1:1 in a Mixer
    fluids: {
        'kubejs:liquid_dragons_breath': 'genesis:liquid_dragons_breath',
        'kubejs:molten_netherite_iron': 'createfoundry:molten_netherite_iron',
        'kubejs:molten_netherite_gold': 'createfoundry:molten_netherite_gold',
        'kubejs:molten_netherite_emerald': 'createfoundry:molten_netherite_emerald',
        'kubejs:molten_netherite_diamond': 'createfoundry:molten_netherite_diamond',
        'kubejs:molten_calorite': 'createfoundry:molten_calorite',
        'kubejs:molten_ostrum': 'createfoundry:molten_ostrum',
        'kubejs:molten_desh': 'createfoundry:molten_desh',
        'kubejs:molten_steel': 'createfoundry:molten_steel',
        'kubejs:molten_thallasium': 'createfoundry:molten_thallasium',
        'kubejs:molten_amber': 'createfoundry:molten_amber'
    }
};

// Legacy items (not blocks or buckets, which are registered below)
StartupEvents.registry('item', event => {
    const legacyItems = [
        { id: 'kubejs:crushed_desh_ore', name: 'Crushed Desh Ore', texture: 'kubejs:item/crushed_desh_ore' },
        { id: 'kubejs:crushed_ostrum_ore', name: 'Crushed Ostrum Ore', texture: 'kubejs:item/crushed_ostrum_ore' },
        { id: 'kubejs:crushed_calorite_ore', name: 'Crushed Calorite Ore', texture: 'kubejs:item/crushed_calorite_ore' },
        { id: 'kubejs:crushed_thallasium_ore', name: 'Crushed Thallasium Ore', texture: 'kubejs:item/crushed_thallasium_ore' },
        { id: 'kubejs:crushed_amber_ore', name: 'Crushed Amber Ore', texture: 'kubejs:item/crushed_amber_ore' },
        { id: 'kubejs:netherite_specks', name: 'Netherite Specks', texture: 'kubejs:item/netherite_specks' },
        { id: 'kubejs:incomplete_netherite_dust', name: 'Incomplete Netherite Dust', texture: 'kubejs:item/incomplete_netherite_dust' },
        { id: 'kubejs:netherite_dust', name: 'Netherite Dust', texture: 'kubejs:item/netherite_dust' },
        { id: 'kubejs:netherite_iron_upgrade', name: 'Netherite Iron Smithing Template', texture: 'kubejs:item/netherite_iron_upgrade_smithing_template' },
        { id: 'kubejs:netherite_gold_upgrade', name: 'Netherite Gold Smithing Template', texture: 'kubejs:item/netherite_gold_upgrade_smithing_template' },
        { id: 'kubejs:netherite_emerald_upgrade', name: 'Netherite Emerald Smithing Template', texture: 'kubejs:item/netherite_emerald_upgrade_smithing_template' },
        { id: 'kubejs:netherite_diamond_upgrade', name: 'Netherite Diamond Smithing Template', texture: 'kubejs:item/netherite_diamond_upgrade_smithing_template' },
        { id: 'kubejs:magnetite', name: 'Magnetite', texture: 'kubejs:item/magnetite' },
        { id: 'kubejs:genesis_logo', name: 'Genesis Logo', texture: 'kubejs:item/genesis' }
    ];

    legacyItems.forEach(item => {
        event.create(item.id)
            .displayName(item.name + ' (Legacy)')
            .texture(item.texture);
    });
});

// Legacy Trophy Block (same shape and properties, so placed trophies keep their state)
StartupEvents.registry('block', event => {
    event.create('kubejs:trophy_block')
        .displayName('Landscapes Reimagined Trophy (Legacy)')
        .soundType('metal')
        .mapColor('DIAMOND')
        .hardness(2.0)
        .resistance(1200)
        .model('kubejs:block/trophy_block')
        .requiresTool(true)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)
});

// Legacy Fluids (and their buckets)
StartupEvents.registry('fluid', event => {
    const legacyFluids = [
        { id: 'kubejs:liquid_dragons_breath', name: 'Liquid Dragons Breath', color: 0xc34781 },
        { id: 'kubejs:molten_netherite_iron', name: 'Molten Netherite Iron', color: 0x727272 },
        { id: 'kubejs:molten_netherite_gold', name: 'Molten Netherite Gold', color: 0xcd740b },
        { id: 'kubejs:molten_netherite_emerald', name: 'Molten Netherite Emerald', color: 0x007b18 },
        { id: 'kubejs:molten_netherite_diamond', name: 'Molten Netherite Diamond', color: 0x1aaaa7 },
        { id: 'kubejs:molten_calorite', name: 'Molten Calorite', color: 0xc41a39 },
        { id: 'kubejs:molten_ostrum', name: 'Molten Ostrum', color: 0x73515e },
        { id: 'kubejs:molten_desh', name: 'Molten Desh', color: 0xb05a3c },
        { id: 'kubejs:molten_steel', name: 'Molten Steel', color: 0x757276 },
        { id: 'kubejs:molten_thallasium', name: 'Molten Thallasium', color: 0x87dad2 },
        { id: 'kubejs:molten_amber', name: 'Molten Amber', color: 0xe28704 }
    ];

    legacyFluids.forEach(fluid => {
        event.create(fluid.id)
            .color(fluid.color)
            .displayName(fluid.name + ' (Legacy)')
            .bucketColor(fluid.color)
            .thickTexture(fluid.color)
            .viscosity(6000)
            .temperature(1300)
            .bucketItem;
    });
});

// Keep legacy items out of the KubeJS creative tab
if (StartupEvents.modifyCreativeTab) {
    StartupEvents.modifyCreativeTab('kubejs:tab', event => {
        Object.keys(global.GENESIS_LEGACY.items).forEach(oldId => event.remove(oldId));
    });
}
