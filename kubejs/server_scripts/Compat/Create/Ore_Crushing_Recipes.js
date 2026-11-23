ServerEvents.recipes(event =>
    {
        // Creates Universal Coal Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_coal_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_coal_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_coal_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_coal_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_coal_ore');

        // Creates Universal Iron Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_iron_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_iron_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_iron_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_iron_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_iron_ore');

        // Creates Universal Copper Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_copper_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_copper_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_copper_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_copper_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_copper_ore');

        // Creates Universal Gold Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_gold_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_gold_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_gold_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_gold_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_gold_ore');

        // Blackstone Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:blackstone_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:gold_nugget', count: 18 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:blackstone', chance: 0.12 }
                ]
            }).id('genesis:crushing/blackstone_gold_ore');

        // Basalt Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:basalt_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:gold_nugget', count: 18 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:basalt', chance: 0.12 }
                ]
            }).id('genesis:crushing/basalt_gold_ore');

        // Creates Universal Redstone Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_redstone_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_redstone_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_redstone_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_redstone_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_redstone_ore');

        // Creates Universal Emerald Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_emerald_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_emerald_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_emerald_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_emerald_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_emerald_ore');

        // Creates Universal Lapis Lazuli Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_lapis_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_lapis_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_lapis_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_lapis_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_lapis_ore');

        // Creates Universal Diamond Ore Crushing Recipes

        // Granite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:granite_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:granite', chance: 0.12 }
                ]
            }).id('genesis:crushing/granite_diamond_ore');

        // Diorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:diorite_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:diorite', chance: 0.12 }
                ]
            }).id('genesis:crushing/diorite_diamond_ore');

        // Andesite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:andesite_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:andesite', chance: 0.12 }
                ]
            }).id('genesis:crushing/andesite_diamond_ore');

        // Tuff Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:tuff_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:tuff', chance: 0.12 }
                ]
            }).id('genesis:crushing/tuff_diamond_ore');

        // Calcite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:calcite_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:calcite', chance: 0.12 }
                ]
            }).id('genesis:crushing/calcite_diamond_ore');

        // Creates Universal Quartz Ore Crushing Recipes

        // Blackstone Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:blackstone_quartz_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:quartz', count: 2 },
                    { item: 'minecraft:quartz', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:blackstone', chance: 0.12 }
                ]
            }).id('genesis:crushing/blackstone_quartz_ore');

        // Basalt Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'universal_ores:basalt_quartz_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:quartz', count: 2 },
                    { item: 'minecraft:quartz', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:basalt', chance: 0.12 }
                ]
            }).id('genesis:crushing/basalt_quartz_ore');

        // Crushing Ore Tweaks for Better Nether Ore

        // Cincinnasite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betternether:cincinnasite_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'betternether:cincinnasite' },
                    { item: 'betternether:cincinnasite', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:netherrack', chance: 0.12 }
                ]
            }).id('genesis:crushing/cincinnasite_ore');

        // Nether Ruby Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betternether:nether_ruby_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'betternether:nether_ruby' },
                    { item: 'betternether:nether_ruby', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:netherrack', chance: 0.12 }
                ]
            }).id('genesis:crushing/nether_ruby_ore');

        // Nether Lapis Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betternether:nether_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:netherrack', chance: 0.12 }
                ]
            }).id('genesis:crushing/nether_lapis_ore');

        // Nether Redstone Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betternether:nether_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 6 },
                    { item: 'minecraft:redstone', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:netherrack', chance: 0.12 }
                ]
            }).id('genesis:crushing/nether_redstone_ore');

        // Crushing Ore Tweaks for Better End Ore

        // Ender Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betterend:ender_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'betterend:ender_shard' },
                    { item: 'betterend:ender_shard', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:end_stone', chance: 0.12 }
                ]
            }).id('genesis:crushing/ender_ore');

        // Crushing Ore Tweaks for Deeper and Darker 1.20.1

        // Gloomslate Coal Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_coal_ore');

        // Gloomslate Copper Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_copper_ore');

        // Gloomslate Diamond Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_diamond_ore');

        // Gloomslate Emerald Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_emerald_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:emerald' },
                    { item: 'minecraft:emerald', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_emerald_ore');

        // Gloomslate Gold Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_gold_ore');

        // Gloomslate Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_iron_ore');

        // Gloomslate Lapis Lazuli Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_lapis_ore');

        // Gloomslate Redstone Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'deeperdarker:gloomslate_redstone_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'deeperdarker:gloomslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/gloomslate_redstone_ore');

        // Creates Raw Redstone Crushing Recipe
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'regions_unexplored:raw_redstone_block' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:redstone', count: 4 },
                    { item: 'minecraft:redstone', chance: 0.10 }
                ]
            }).id('genesis:crushing/raw_redstone');

        // Salt Bucket to Salt
            event.custom({
                type: "create:crushing",
                ingredients: [
                    {
                        item: "spelunkery:salt_bucket",
                        count: 1
                    }
                ],
                results: [
                    {
                        item: "spelunkery:salt",
                        count: 8
                    },
                    {
                        item: "minecraft:bucket",
                        count: 1
                    }
                ]
            }).id('genesis:crushing/salt');

        // Aurora Crysal Shard
            event.custom({
                type: "create:crushing",
                ingredients: [
                    {
                        item: "betterend:aurora_crystal",
                        count: 1
                    }
                ],
                results: [
                    {
                        item: "betterend:crystal_shards",
                        count: 4
                    },
                    {
                        item: "betterend:crystal_shards",
                        chance: .20,
                        count: 1
                    }
                ]
            }).id('genesis:crushing/aurora_shard');

        // Ore Crushing Recipes

        // Vanilla Like Ores

        // Coal Ore

        // Glacio Coal Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:glacio_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/glacio_coal_ore');

        // Venus Coal Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:venus_coal_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:coal' },
                    { item: 'minecraft:coal', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/venus_coal_ore');

        // Glacio Copper Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:glacio_copper_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_copper', count: 5 },
                    { item: 'create:crushed_raw_copper', chance: 0.25 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/glacio_copper_ore');

        // Glacio Lapis Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:glacio_lapis_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:lapis_lazuli', count: 10 },
                    { item: 'minecraft:lapis_lazuli', chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/glacio_lapis_ore');

        // Venus Gold Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:venus_gold_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_gold' },
                    { item: 'create:crushed_raw_gold', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/venus_gold_ore');

        // Diamond Ore

        // Mars Diamond Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mars_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/mars_diamond_ore');

        // Venus Diamond Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:venus_diamond_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:diamond' },
                    { item: 'minecraft:diamond', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/venus_diamond_ore');

        // Iron Ore

        // Mars Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mars_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/mars_iron_ore');

        // Mercury Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mercury_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mercury_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/mercury_iron_ore');

        // Moon Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:moon_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:moon_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/moon_iron_ore');

        // Glacio Iron Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:glacio_iron_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'create:crushed_raw_iron' },
                    { item: 'create:crushed_raw_iron', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:glacio_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/glacio_iron_ore');

        // Ad Astra Ores

        // Calorite Ore

        // Deepslate Calorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:deepslate_calorite_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_calorite_ore' },
                    { item: 'genesis:crushed_calorite_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/deepslate_calorite_ore');

        // Venus Calorite Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:venus_calorite_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_calorite_ore'},
                    { item: 'genesis:crushed_calorite_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/venus_calorite_ore');

        // Ostrum Ore

        // Mars Ostrum Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:mars_ostrum_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_ostrum_ore'},
                    { item: 'genesis:crushed_ostrum_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/mars_ostrum_ore');

        // Deepslate Ostrum Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:deepslate_ostrum_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_ostrum_ore' },
                    { item: 'genesis:crushed_ostrum_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/deepslate_ostrum_ore');

        // Desh Ore

        // Moon Desh Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:moon_desh_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_desh_ore' },
                    { item: 'genesis:crushed_desh_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'ad_astra:moon_cobblestone', chance: 0.12 }
                ]
            }).id('genesis:crushing/moon_desh_ore');

        // Deepslate Desh Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'ad_astra:deepslate_desh_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_desh_ore' },
                    { item: 'genesis:crushed_desh_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
                ]
            }).id('genesis:crushing/deepslate_desh_ore');

        // Creates New Crushing Recipes

        // Thallasium Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betterend:thallasium_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_thallasium_ore' },
                    { item: 'genesis:crushed_thallasium_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:end_stone', chance: 0.12 }
                ]
            }).id('genesis:crushing/thallasium_ore');

        // Amber Ore
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'betterend:amber_ore' }
                ],
                processingTime: 400,
                results: [
                    { item: 'genesis:crushed_amber_ore' },
                    { item: 'genesis:crushed_amber_ore', chance: 0.75 },
                    { item: 'create:experience_nugget', chance: 0.75 },
                    { item: 'minecraft:end_stone', chance: 0.12 }
                ]
            }).id('genesis:crushing/amber_ore');
    }
)
