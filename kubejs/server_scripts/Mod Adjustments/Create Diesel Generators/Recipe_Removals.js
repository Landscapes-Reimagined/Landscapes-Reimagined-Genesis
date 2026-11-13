ServerEvents.recipes(event =>
    {
        // Broken Recipes (replaced with fixed versions)
            event.remove({ id: 'createdieselgenerators:crafting/engine_piston'});
            event.remove({ id: 'createdieselgenerators:mechanical_crafting/diesel_engine'});
            event.remove({ id: 'createdieselgenerators:crafting/diesel_engine'});
            event.remove({ id: 'createdieselgenerators:mechanical_crafting/large_diesel_engine'});
            event.remove({ id: 'createdieselgenerators:crafting/large_diesel_engine'});
            event.remove({ id: 'createdieselgenerators:crafting/huge_diesel_engine'});
            event.remove({ id: 'createdieselgenerators:mixing/biodiesel'});
            event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable'});
            event.remove({ id: 'createdieselgenerators:compat/farmers_delight/basin_fermenting/fermentable'});
            event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})
    }
)
