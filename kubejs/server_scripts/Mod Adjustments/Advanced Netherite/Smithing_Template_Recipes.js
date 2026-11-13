ServerEvents.recipes(event =>
    {
        // Smithing Template Crafting Recipes

        // Netherite Iron Upgrade
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:netherite_upgrade_smithing_template',
                        amount: 1
                    },
                    {
                        fluid: 'kubejs:molten_netherite_iron',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'kubejs:netherite_iron_upgrade',
                        amount: 1
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/netherite_iron_upgrade');

        // Netherite Gold Upgrade
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'kubejs:netherite_iron_upgrade',
                        amount: 1
                    },
                    {
                        fluid: 'kubejs:molten_netherite_gold',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'kubejs:netherite_gold_upgrade',
                        amount: 1
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/netherite_gold_upgrade');

        // Netherite Emerald Upgrade
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'kubejs:netherite_gold_upgrade',
                        amount: 1
                    },
                    {
                        fluid: 'kubejs:molten_netherite_emerald',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'kubejs:netherite_emerald_upgrade',
                        amount: 1
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/netherite_emerald_upgrade');

        // Netherite Diamond Upgrade
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'kubejs:netherite_emerald_upgrade',
                        amount: 1
                    },
                    {
                        fluid: 'kubejs:molten_netherite_diamond',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        item: 'kubejs:netherite_diamond_upgrade',
                        amount: 1
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/netherite_diamond_upgrade');
    }
)
