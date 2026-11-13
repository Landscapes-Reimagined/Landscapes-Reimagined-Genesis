ServerEvents.recipes(event =>
    {
        // Netherite Automation
            event.custom({
                type: 'create:sequenced_assembly',

                ingredient: {
                    item: 'kubejs:netherite_specks',
                },
                loops: 1,
                results: [
                    {
                        item: 'kubejs:netherite_dust'
                    }
                ],
                sequence: [
                    {
                        type:'create:filling',
                        ingredients: [
                            {
                                item: 'kubejs:incomplete_netherite_dust'
                            },
                            {
                                fluid: 'minecraft:lava',
                                amount: 40200,
                                nbt: {},
                            }
                        ],
                        results: [
                            {
                                item: 'kubejs:incomplete_netherite_dust'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'kubejs:incomplete_netherite_dust'
                            }
                        ],
                        results: [
                            {
                                item: 'kubejs:incomplete_netherite_dust'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item:'kubejs:incomplete_netherite_dust'
                }
            }).id('genesis:sequenced_assembly/netherite_dust');
    }
)
