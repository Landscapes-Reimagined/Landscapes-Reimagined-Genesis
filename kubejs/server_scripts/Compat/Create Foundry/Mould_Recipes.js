ServerEvents.recipes(event =>
    {
        // Mould Recipes: Molten Fluid -> Filled Mould (Filling) -> Ingot + Empty Mould (Pressing)
        // Each mould takes what one item melts into, so melting and re-casting never duplicates

        // Advanced Netherite

        // Netherite Iron Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        nbt: {},
                        amount: 16200
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_iron_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_iron_ingot_mould');

        // Netherite Iron Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_iron_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_iron_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_iron_ingot_from_mould');

        // Netherite Gold Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_gold',
                        nbt: {},
                        amount: 16200
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_gold_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_gold_ingot_mould');

        // Netherite Gold Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_gold_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_gold_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_gold_ingot_from_mould');

        // Netherite Emerald Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_emerald',
                        nbt: {},
                        amount: 16200
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_emerald_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_emerald_ingot_mould');

        // Netherite Emerald Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_emerald_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_emerald_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_emerald_ingot_from_mould');

        // Netherite Diamond Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_diamond',
                        nbt: {},
                        amount: 16200
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_diamond_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_diamond_ingot_mould');

        // Netherite Diamond Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_diamond_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_diamond_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_diamond_ingot_from_mould');

        // Ad Astra

        // Calorite Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_calorite',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:calorite_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/calorite_ingot_mould');

        // Calorite Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:calorite_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:calorite_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/calorite_ingot_from_mould');

        // Ostrum Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:ostrum_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/ostrum_ingot_mould');

        // Ostrum Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:ostrum_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:ostrum_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/ostrum_ingot_from_mould');

        // Desh Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_desh',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:desh_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/desh_ingot_mould');

        // Desh Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:desh_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:desh_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/desh_ingot_from_mould');

        // Steel Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_steel',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:steel_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/steel_ingot_mould');

        // Steel Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:steel_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:steel_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/steel_ingot_from_mould');

        // Better End

        // Thallasium Ingot Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:thallasium_ingot_mould'
                    }
                ]
            }).id('genesis:filling/moulds/thallasium_ingot_mould');

        // Thallasium Ingot Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:thallasium_ingot_mould'
                    }
                ],
                results: [
                    {
                        item: 'betterend:thallasium_ingot'
                    },
                    {
                        item: 'createfoundry:empty_ingot_mould'
                    }
                ]
            }).id('genesis:pressing/thallasium_ingot_from_mould');

        // Amber Gem Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_gem_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_amber',
                        nbt: {},
                        amount: 64800
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:amber_gem_mould'
                    }
                ]
            }).id('genesis:filling/moulds/amber_gem_mould');

        // Amber Gem Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:amber_gem_mould'
                    }
                ],
                results: [
                    {
                        item: 'betterend:amber_gem'
                    },
                    {
                        item: 'createfoundry:empty_gem_mould'
                    }
                ]
            }).id('genesis:pressing/amber_gem_from_mould');

        // Block Moulds: Molten Fluid -> Filled Block Mould (Filling) -> Block + Empty Block Mould (Pressing)
        // Each block mould takes what its old compacting recipe did

        // Block Mould Blueprint
            event.custom({
                type: "create:deploying",
                ingredients: [
                    {
                        item: 'minecraft:paper'
                    },
                    {
                        item: 'minecraft:iron_block'
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:block_mould_blueprint'
                    }
                ],
                keepHeldItem: true
            }).id('genesis:deploying/block_blueprint_from_paper');

        // Empty Block Mould
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: {
                    item: 'create:sturdy_sheet'
                },
                transitionalItem: {
                    item: 'create:unprocessed_obsidian_sheet'
                },
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            },
                            {
                                item: 'createfoundry:block_mould_blueprint'
                            }
                        ],
                        results: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            }
                        ]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            }
                        ],
                        results: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            }
                        ]
                    },
                    {
                        type: "create:cutting",
                        ingredients: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            }
                        ],
                        results: [
                            {
                                item: 'create:unprocessed_obsidian_sheet'
                            }
                        ]
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ],
                loops: 1
            }).id('genesis:sequenced_assembly/block_mould');

        // Create Foundry Block Moulds

        // Copper Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_copper',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:copper_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/copper_block_mould');

        // Copper Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:copper_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:copper_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/copper_block_from_mould');

        // Iron Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_iron',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:iron_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/iron_block_mould');

        // Iron Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:iron_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:iron_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/iron_block_from_mould');

        // Gold Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_gold',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:gold_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/gold_block_mould');

        // Gold Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:gold_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:gold_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/gold_block_from_mould');

        // Coal Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_carbon',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:coal_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/coal_block_mould');

        // Coal Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:coal_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:coal_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/coal_block_from_mould');

        // Diamond Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_diamond',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:diamond_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/diamond_block_mould');

        // Diamond Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:diamond_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:diamond_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/diamond_block_from_mould');

        // Zinc Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_zinc',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:zinc_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/zinc_block_mould');

        // Zinc Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:zinc_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'create:zinc_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/zinc_block_from_mould');

        // Brass Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_brass',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:brass_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/brass_block_mould');

        // Brass Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:brass_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'create:brass_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/brass_block_from_mould');

        // Emerald Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_emerald',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:emerald_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/emerald_block_mould');

        // Emerald Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:emerald_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:emerald_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/emerald_block_from_mould');

        // Redstone Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_redstone',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:redstone_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/redstone_block_mould');

        // Redstone Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:redstone_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:redstone_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/redstone_block_from_mould');

        // Lapis Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_lapis',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:lapis_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/lapis_block_mould');

        // Lapis Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:lapis_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:lapis_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/lapis_block_from_mould');

        // Ancient Debris Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_ancient_debris',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:ancient_debris_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/ancient_debris_block_mould');

        // Ancient Debris Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:ancient_debris_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:ancient_debris'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/ancient_debris_block_from_mould');

        // Netherite Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_block_mould');

        // Netherite Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:netherite_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_block_from_mould');

        // Advanced Netherite Block Moulds

        // Netherite Iron Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        nbt: {},
                        amount: 145800
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_iron_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_iron_block_mould');

        // Netherite Iron Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_iron_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_iron_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_iron_block_from_mould');

        // Netherite Gold Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_gold',
                        nbt: {},
                        amount: 145800
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_gold_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_gold_block_mould');

        // Netherite Gold Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_gold_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_gold_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_gold_block_from_mould');

        // Netherite Emerald Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_emerald',
                        nbt: {},
                        amount: 145800
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_emerald_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_emerald_block_mould');

        // Netherite Emerald Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_emerald_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_emerald_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_emerald_block_from_mould');

        // Netherite Diamond Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_netherite_diamond',
                        nbt: {},
                        amount: 145800
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:netherite_diamond_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/netherite_diamond_block_mould');

        // Netherite Diamond Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:netherite_diamond_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'advancednetherite:netherite_diamond_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/netherite_diamond_block_from_mould');

        // Ad Astra Block Moulds

        // Calorite Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_calorite',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:calorite_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/calorite_block_mould');

        // Calorite Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:calorite_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:calorite_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/calorite_block_from_mould');

        // Ostrum Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:ostrum_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/ostrum_block_mould');

        // Ostrum Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:ostrum_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:ostrum_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/ostrum_block_from_mould');

        // Desh Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_desh',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:desh_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/desh_block_mould');

        // Desh Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:desh_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:desh_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/desh_block_from_mould');

        // Steel Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_steel',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:steel_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/steel_block_mould');

        // Steel Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:steel_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'ad_astra:steel_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/steel_block_from_mould');

        // Better End Block Moulds

        // Thallasium Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        nbt: {},
                        amount: 72900
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:thallasium_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/thallasium_block_mould');

        // Thallasium Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:thallasium_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'betterend:thallasium_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/thallasium_block_from_mould');

        // Amber Block Mould Filling
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: 'createfoundry:empty_block_mould'
                    },
                    {
                        fluid: 'createfoundry:molten_amber',
                        nbt: {},
                        amount: 259200
                    }
                ],
                results: [
                    {
                        item: 'createfoundry:amber_block_mould'
                    }
                ]
            }).id('genesis:filling/moulds/amber_block_mould');

        // Amber Block Mould Pressing
            event.custom({
                type: "create:pressing",
                ingredients: [
                    {
                        item: 'createfoundry:amber_block_mould'
                    }
                ],
                results: [
                    {
                        item: 'betterend:amber_block'
                    },
                    {
                        item: 'createfoundry:empty_block_mould'
                    }
                ]
            }).id('genesis:pressing/amber_block_from_mould');
    }
)
