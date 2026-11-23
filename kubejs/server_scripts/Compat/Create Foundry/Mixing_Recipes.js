ServerEvents.recipes(event =>
    {
        // Modded Ore Mixing Recipes

        // Universal Ores

        // Granite Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'universal_ores:granite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/granite_redstone_ore');

        // Diorite Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'universal_ores:diorite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/diorite_redstone_ore');

        // Andesite Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'universal_ores:andesite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/andesite_redstone_ore');

        // Tuff Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'universal_ores:tuff_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/tuff_redstone_ore');

        // Calcite Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'universal_ores:calcite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/calcite_redstone_ore');

        // Spelunkery Ores

        // Calcite Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:calcite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_calcite_redstone_ore');

        // Sandstone Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:sandstone_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_sandstone_lapis_ore');

        // Smooth Basalt Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:smooth_basalt_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_basalt_diamond_ore');

        // Granite Ores

        // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_coal_ore');

        // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_iron_ore');

        // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_copper_ore');

        // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_gold_ore');

        // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_redstone_ore');

        // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_emerald_ore');

        // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_lapis_ore');

        // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_diamond_ore');

        // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:granite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_g_zinc_ore');

        // Diorite Ores

        // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_coal_ore');

        // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_iron_ore');

        // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_copper_ore');

        // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_gold_ore');

        // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_redstone_ore');

        // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_emerald_ore');

        // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_lapis_ore');

        // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_diamond_ore');

        // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:diorite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_d_zinc_ore');

        // Tuff Ores

        // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_coal_ore');

        // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_iron_ore');

        // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_copper_ore');

        // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_gold_ore');

        // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_redstone_ore');

        // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_emerald_ore');

        // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_lapis_ore');

        // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_diamond_ore');

        // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:tuff_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_t_zinc_ore');

        // Andesite Ores

        // Coal Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_coal_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_coal_ore');

        // Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_iron_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_iron_ore');

        // Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_copper_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_copper_ore');

        // Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_gold_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_gold_ore');

        // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_redstone_ore');

        // Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_emerald_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_emerald_ore');

        // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_lapis_ore');

        // Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_diamond_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_diamond_ore');

        // Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'spelunkery:andesite_zinc_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/s_a_zinc_ore');

        // Better Nether Ores

        // Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betternether:nether_redstone_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/b_redstone_ore');

        // Lapis Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betternether:nether_lapis_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_lapis',
                        amount: 121500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/b_lapis_ore');

        // Andesite Cut Copper Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:cut_copper',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/cut_copper');

        // Creates Mixing Recipe for Molten Netherite
            event.custom({
                type: "create:mixing",
                ingredients: [
                    { fluid: 'createfoundry:molten_ancient_debris', amount: 8100 },
                    { fluid: 'createfoundry:molten_gold', amount: 8100 }
                ],
                results: [
                    { fluid: 'createfoundry:molten_netherite', amount: 8100 }
                ],
                heatRequirement: 'superheated'
            }).id('genesis:mixing/molten_netherite');

        // Molten Brass
            event.custom({
                type: "create:mixing",
                ingredients: [
                    { fluid: 'createfoundry:molten_zinc', amount: 81000 },
                    { fluid: 'createfoundry:molten_copper', amount: 81000 }
                ],
                results: [
                    { fluid: 'createfoundry:molten_brass', amount: 81000 }
                ],
                heatRequirement: 'superheated'
            }).id('genesis:mixing/molten_brass');

        // Crushed Ore to Moltem Ore

        // Crushed Iron Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:crushed_raw_iron',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_iron');

        // Crushed Gold Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:crushed_raw_gold',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_gold',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_gold');

        // Crushed Copper Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:crushed_raw_copper',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_copper',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_copper');

        // Crushed Zinc Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:crushed_raw_zinc',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_zinc',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_zinc');

        // Redstone Ore Fix
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: "minecraft:redstone_ores"
                    }
                ],
                results: [
                    {
                        fluid: "createfoundry:molten_redstone",
                        amount: 81000
                    },
                    {
                        item: "minecraft:redstone",
                        count: 5
                    },
                    {
                        fluid: "minecraft:lava",
                        amount: 4050
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/redstone_ores')

        // Lapis Ore Fix
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: "minecraft:lapis_ores"
                    }
                ],
                results: [
                    {
                        fluid: "createfoundry:molten_lapis",
                        amount: 81000
                    },
                    {
                        item: "minecraft:lapis_lazuli",
                        count: 5
                    },
                    {
                        fluid: "minecraft:lava",
                        amount: 4050
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/lapis_ores')

        // Raw Emerald Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'createoreexcavation:raw_emerald',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_emerald',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_emerald');

        // Raw Diamond Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'createoreexcavation:raw_diamond',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_diamond');

        // Raw Redstone Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'createoreexcavation:raw_redstone',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_redstone',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_redstone');

        // Ore to Molten Ore Mixing Recipes

        // Desh Ore

        // Deepslate Desh Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:deepslate_desh_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/deepslate_desh_ore');

        // Moon Desh Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:moon_desh_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/moon_desh_ore');

        // Ostrum Ore

        // Deepslate Ostrum Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:deepslate_ostrum_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/deepslate_ostrum_ore');

        // Mars Ostrum Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:mars_ostrum_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/mars_ostrum_ore');

        // Calorite Ore

        // Deepslate Calorite Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:deepslate_calorite_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/deepslate_calorite_ore');

        // Venus Calorite Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:venus_calorite_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    },
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/venus_calorite_ore');

        // Raw Ore to Molten Ore Mixing Recipes

        // Raw Desh Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_desh',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_desh');

        // Raw Ostrum Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_ostrum',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_ostrum');

        // Raw Calorite Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_calorite',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_calorite');

        // Raw Ore Block to Molten Ore Mixing Recipes

        // Raw Desh Ore Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_desh_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 145800
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_desh_block');

        // Raw Ostrum Ore Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_ostrum_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 145800
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_ostrum_block');

        // Raw Calorite Ore Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:raw_calorite_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 145800
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_calorite_block');

        // Crushed Raw Ore to Molten Ore Mixing Recipes

        // Crushed Desh Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'genesis:crushed_desh_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_desh');

        // Crushed Ostrum Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'genesis:crushed_ostrum_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_ostrum');

        // Crushed Calorite Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'genesis:crushed_calorite_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_calorite');

        // Block and Ingot to Molten Ore

        // Desh Ingot
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:desh_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/desh_ingot');

        // Ostrum Ingot
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:ostrum_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/ostrum_ingot');

        // Calorite Ingot
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:calorite_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/calorite_ingot');

        // Desh Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:desh_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_desh',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/desh_block');

        // Ostrum Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:ostrum_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_ostrum',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/ostrum_block');

        // Calorite Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:calorite_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_calorite',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/calorite_block');

        // Creates Molten Steel Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_iron',
                        amount: 8100
                    },
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_steel',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_steel');

        // Steel Ingot
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:steel_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_steel',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/steel_ingot');

        // Steel Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:steel_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_steel',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/steel_block');

        // Block and Ingot to Molten Ore Mixing Recipes

        // Amber Gem
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:amber_gem',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_amber',
                        amount: 64800
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/amber_gem');

        // Amber Gem Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:amber_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_amber',
                        amount: 259200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/amber_block');

        // Thallasium Ingot
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:thallasium_ingot',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/thallasium_ingot');

        // Thallasium Block
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:thallasium_block',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/thallasium_block');

        // Thallasium Tile
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:thallasium_tile',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/thallasium_tile');

        // Raw Ore to Molten Ore Mixing Recipes

        // Raw Amber
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:raw_amber',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_amber',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_amber');

        // Crushed Amber
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'genesis:crushed_amber_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_amber',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_amber');

        // Raw Thallasium
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:thallasium_raw',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/raw_thallasium');

        // Crushed Thallasium
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'genesis:crushed_thallasium_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/crushed_thallasium');

        // Ore to Molten Ore Mixing Recipes

        // Amber Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:amber_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_amber',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/amber_ore');

        // Thallasium Ore
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'betterend:thallasium_ore',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_thallasium',
                        amount: 40500
                    },
                    {
                        fluid: 'minecraft:lava',
                        amount: 4050
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/thallasium_ore');

        // Creates Molten Advanced Netherite Recipes

        // Netherite Iron Recipes
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_iron_ingot',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_iron');
            event.custom({
                type: "create:mixing",
                ingredients:[
                    Item.of('minecraft:netherite_ingot', 1).toJson(),
                    Item.of('minecraft:iron_ingot', 4).toJson()
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_iron_base');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_iron_block',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_iron_block');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: 'advancednetherite:iron',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_iron',
                        amount: 32400
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_iron_armor');

        // Netherite Gold Recipes
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_gold_ingot',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_gold',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_gold');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_gold_block',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_gold',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_gold_block');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: 'advancednetherite:gold',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_gold',
                        amount: 32400
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_gold_armor');

        // Netherite Emerald Recipes
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_emerald_ingot',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_emerald',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_emerald');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_emerald_block',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_emerald',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_emerald_block');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: 'advancednetherite:emerald',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_emerald',
                        amount: 32400
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_emerald_armor');

        // Netherite Diamond Recipes
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_diamond_ingot',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_diamond',
                        amount: 16200
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_diamond');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'advancednetherite:netherite_diamond_block',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_diamond',
                        amount: 72900
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_diamond_block');
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: 'advancednetherite:diamond',
                        amount: 1
                    },
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_netherite_diamond',
                        amount: 32400
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/molten_netherite_diamond_armor');
    }
)
