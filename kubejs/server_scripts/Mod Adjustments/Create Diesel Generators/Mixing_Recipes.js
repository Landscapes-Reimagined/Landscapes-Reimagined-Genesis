ServerEvents.recipes(event =>
    {
        // Fixes Create Biodiesel Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'createaddition:seed_oil',
                        amount: 8100
                    },
                    {
                        fluid: 'createdieselgenerators:ethanol',
                        amount: 8100

                    }
                ],
                results: [
                    {
                        fluid: 'createdieselgenerators:biodiesel',
                        amount: 16200
                    },
                ],
                heatRequirement: "heated"
            }).id('genesis:mixing/biodiesel');
    }
)
