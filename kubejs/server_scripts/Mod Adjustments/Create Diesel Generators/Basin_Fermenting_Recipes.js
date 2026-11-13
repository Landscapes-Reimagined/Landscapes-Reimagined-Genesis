ServerEvents.recipes(event =>
    {
        // Fixes Farmer's Delight Ethonal Fermenting Recipe
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                ingredients: [
                    {
                        tag: 'createdieselgenerators:fd_fermentable'
                    },
                    {
                        item: 'minecraft:bone_meal'
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        fluid: 'createdieselgenerators:ethanol',
                        amount: 4050
                    },
                ],
            }).id('genesis:fd_basin_fermenting/ethanol');

        // Fixes Ethonal Fermenting Recipe {Update Needed}
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                ingredients: [
                    {
                        tag: 'c:fermentable'
                    },
                    {
                        item: 'minecraft:bone_meal'
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        fluid: 'createdieselgenerators:ethanol',
                        amount: 4050
                    },
                ],
            }).id('genesis:basin_fermenting/ethanol');
    }
)
