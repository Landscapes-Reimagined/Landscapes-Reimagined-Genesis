ServerEvents.recipes(event =>
    {
        // Create Copper Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:copper_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_copper');

        // Create Iron Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:iron_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_iron');

        // Create Gold Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:gold_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_gold');

        // Create Coal Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:coal_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_carbon');

        // Create Diamond Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:diamond_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_diamond');

        // Create Zinc Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'create:zinc_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_zinc');

        // Create Brass Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_brass',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'create:brass_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_brass');

        // Create Emerald Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:emerald_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_emerald');

        // Create Redstone Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:redstone_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_redstone');

        // Create Lapis Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:lapis_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_lapis');

        // Create Ancient Debris Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_ancient_debris',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:ancient_debris',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_ancient_debris');

        // Create Netherite Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_netherite',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'minecraft:netherite_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_netherite');

        // Create Molten Diamond Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:compacting/molten_diamond_carbon');

        // Molten Ore to Block Compacting Recipes

        // Create Desh Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_desh',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:desh_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_desh');

        // Create Ostrum Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_ostrum',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:ostrum_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_ostrum');

        // Create Calorite Block Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_calorite',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:calorite_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_calorite');

        // Creates Compacting Recipes

        // Molten Amber
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_amber',
                        nbt: {},
                        amount: 259200
                    }
                ],
                results: [
                    {
                        item: 'betterend:amber_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_amber');

        // Molten Thallasium
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_thallasium',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'betterend:thallasium_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_thallasium');

        // Molten Steel
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'kubejs:molten_steel',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:steel_block',
                        amount: 1
                    }
                ]
            }).id('genesis:compacting/molten_steel');
    }
)
