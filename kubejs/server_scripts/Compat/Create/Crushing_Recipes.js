ServerEvents.recipes(event =>
    {
        // Create Resource Stone Crushing Settings
            const NAMESPACE = 'genesis';
            const ENABLE_STONE_RECYCLING = true;

        // Recipe Removals
            const recipesToRemove = [
                'create:crushing/asurine',
                'create:crushing/crimsite',
                'create:crushing/ochrum',
                'create:crushing/veridium',
                'create:crushing/asurine_recycling',
                'create:crushing/crimsite_recycling',
                'create:crushing/ochrum_recycling',
                'create:crushing/veridium_recycling'
            ];
            recipesToRemove.forEach(id => {
                event.remove({ id: id });
            });

        // Create Resource Stones
            const stones = [
                { name: 'asurine',  input: 'create:asurine',  output: 'create:crushed_raw_zinc',   additional: 'create:zinc_nugget' },
                { name: 'crimsite', input: 'create:crimsite', output: 'create:crushed_raw_iron',   additional: 'minecraft:iron_nugget' },
                { name: 'ochrum',   input: 'create:ochrum',   output: 'create:crushed_raw_gold',   additional: 'minecraft:gold_nugget' },
                { name: 'veridium', input: 'create:veridium', output: 'create:crushed_raw_copper', additional: 'create:copper_nugget' },
                { name: 'scorchia', input: 'create:scorchia', output: 'minecraft:coal',            additional: 'create:cinder_flour' }
            ];

        // Loop through materials and create the crushing recipes
            stones.forEach(stone => {
                let results = [
                    { item: stone.output, count: 1 },
                    { item: stone.output, count: 1, chance: 0.50 },
                    { item: 'create:experience_nugget', chance: 0.75 }
                ];

                if (stone.additional) {
                    results.push({ item: stone.additional, count: 1 });
                }

                // Crushing Recipe
                event.custom({
                    type: 'create:crushing',
                    ingredients: [{ item: stone.input }],
                    processingTime: 250,
                    results: results
                }).id(`${NAMESPACE}:crushing/${stone.name}`);

                if (ENABLE_STONE_RECYCLING && stone.stoneType !== false) {
                    event.custom({
                        type: 'create:crushing',
                        ingredients: [{ tag: `create:stone_types/${stone.name}` }],
                        processingTime: 250,
                        results: results
                    }).id(`${NAMESPACE}:recycling/${stone.name}`);
                }
            });

        // This file creates Crushing Recipes for all labeled blocks

        // The recipe will be labeles with a // before the event label

        // Chisled Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:chiseled_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ] // The reason I have chosen this is due to having some sand come off in the process of making this type
            }).id('genesis:crushing/chss');

        // Smooth Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:smooth_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ]
            }).id('genesis:crushing/sss');

        // Cut Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:cut_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ]
            }).id('genesis:crushing/css');

        // This Recipe adds in a recipe for any Chipped sandstone variant for a crushing recipe
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { tag: 'chipped:sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:sand',
                        chance: 0.80 // 70% Chance for this
                    },
                ]
            }).id('genesis:crushing/chippedsandstones');

        // from here on it will be red sandstone variants

        // Red Chisled Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:chiseled_red_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ] // The reason I have chosen this is due to having some sand come off in the process of making this type
            }).id('genesis:crushing/chrss');

        // Smooth Red Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:smooth_red_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ]
            }).id('genesis:crushing/srss');

        // Cut Red Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:cut_red_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80 // 80% Chance for this
                    },
                ]
            }).id('genesis:crushing/crss');

        // This Recipe adds in a recipe for any Chipped red_sandstone variant for a crushing recipe
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { tag: 'chipped:red_sandstone' }
                ],
                processingTime: 9, // Takes ~3 Seconds
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3 // 100% Chance for this
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80 // 70% Chance for this
                    },
                ]
            }).id('genesis:crushing/chippedredsandstones');

        // New Nether Wart Block Crushing Recipe
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'minecraft:nether_wart_block' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:nether_wart', count: 2 },
                    { item: 'minecraft:nether_wart', chance: 0.10 }]
            }).id('genesis:crushing/nether_wart_block');
    }
)
