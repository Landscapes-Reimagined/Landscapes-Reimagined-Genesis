ServerEvents.recipes(event =>
    {
        // Replaces Recipe for Narrow Tieless Tracks
            event.custom({
                type:'create:sequenced_assembly',
                ingredient: {
                    item: 'railways:track_tieless'
                },
                loops: 1,
                results: [
                    {
                        item: 'railways:track_tieless_narrow'
                    }
                ],
                sequence: [
                    {
                        type:'create:cutting',
                        ingredients: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            },
                        ],
                        results: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            },
                            [
                                {
                                    tag: 'railways:internal/nuggets/iron_nuggets'
                                },
                                {
                                    tag: 'railways:internal/nuggets/zinc_nuggets'
                                }
                            ]
                        ],
                        results: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            }
                        ],
                        results: [
                            {
                                item: 'railways:track_incomplete_tieless_narrow'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'railways:track_incomplete_tieless_narrow'
                }
            }).id('genesis:sequenced_assembly/track_tieless_narrow');
    }
)
