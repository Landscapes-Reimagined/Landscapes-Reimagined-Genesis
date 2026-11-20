ServerEvents.recipes(event =>
    {
        // Molten Fluid to Block recipes now use Block Moulds (see Mould_Recipes.js)

        // Create Molten Diamond Compacting Recipe
            event.custom({
                type: "create:compacting",
                ingredients: [
                    {
                        fluid: 'createfoundry:molten_carbon',
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        fluid: 'createfoundry:molten_diamond',
                        amount: 8100
                    }
                ],
                heatRequirement: "superheated"
            }).id('genesis:compacting/molten_diamond_carbon');
    }
)
