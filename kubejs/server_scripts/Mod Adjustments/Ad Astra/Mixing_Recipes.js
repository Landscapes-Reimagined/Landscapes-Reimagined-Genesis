ServerEvents.recipes(event =>
    {
        // Creates Alternate Faster Oil Mixing Recipe by Voidmaster01
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'farmersdelight:tree_bark',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:oil',
                        amount: 500
                    },
                    {
                        fluid: 'minecraft:water',
                        amount: 200
                    },
                    {
                        item: 'minecraft:charcoal',
                        nbt: {},
                        amount: 1
                    },
                ],
                processingTime: 100,
                heatRequirement: "superheated"
            }).id('voidmaster01:mixing/fast_oil')

        // Creates Alternate Oil Mixing Recipe by Voidmaster01
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'farmersdelight:tree_bark',
                        nbt: {},
                        amount: 1
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:oil',
                        amount: 500
                    },
                    {
                        fluid: 'minecraft:water',
                        amount: 200
                    },
                    {
                        item: 'minecraft:charcoal',
                        nbt: {},
                        amount: 1
                    },
                ],
                processingTime: 500,
                heatRequirement: "heated"
            }).id('voidmaster01:mixing/oil')

        // Creates Oil Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        amount: 8100
                    },
                    {
                        fluid: 'createaddition:bioethanol',
                        amount: 8100
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:oil',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:mixing/oil');
    }
)
