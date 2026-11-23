ServerEvents.recipes(event =>
    {
        // New Dragon Head Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: "minecraft:wither_skeleton_skull",
                        count: 1
                    },
                    {
                        fluid: "genesis:liquid_dragons_breath",
                        amount: 81000
                    }
                ],
                results: [
                    {
                        item: "minecraft:dragon_head",
                        count: 1
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/dragon_head')

        // Netherite Automation
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    {
                        item: 'create:powdered_obsidian',
                        amount: 1
                    },
                    {
                        item: 'create:cinder_flour',
                        amount: 1
                    }
                ],
                results: [
                    {
                        item: 'genesis:netherite_specks',
                        count: 2
                    },
                ],
                heatRequirement: 'superheated'
            }).id('genesis:mixing/netherite_specks');
    }
)
