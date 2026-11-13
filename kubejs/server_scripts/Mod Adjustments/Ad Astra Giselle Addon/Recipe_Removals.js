ServerEvents.recipes(event =>
    {
        // Old Recipes (replaced with Mechanical Crafting Recipes)
            event.remove({ id: 'ad_astra_giselle_addon:crafting/rocket_sensor'}) // Removes Old Rocket Sensor Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'}) // Removes Old Automation Nasa Workbench Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/fuel_loader'}) // Removes Old Fuel Loader Recipe
    }
)
