ServerEvents.recipes(event =>
    {
        // Netherite Automation
            event.custom({
                type: 'create:sequenced_assembly',

                ingredient: {
                    item: 'genesis:netherite_specks',
                },
                loops: 1,
                results: [
                    {
                        item: 'genesis:netherite_dust'
                    }
                ],
                sequence: [
                    {
                        type:'create:filling',
                        ingredients: [
                            {
                                item: 'genesis:incomplete_netherite_dust'
                            },
                            {
                                fluid: 'minecraft:lava',
                                amount: 40200,
                                nbt: {},
                            }
                        ],
                        results: [
                            {
                                item: 'genesis:incomplete_netherite_dust'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'genesis:incomplete_netherite_dust'
                            }
                        ],
                        results: [
                            {
                                item: 'genesis:incomplete_netherite_dust'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item:'genesis:incomplete_netherite_dust'
                }
            }).id('genesis:sequenced_assembly/netherite_dust');
    }
)
