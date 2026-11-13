ServerEvents.recipes(event =>
    {
        // Old Recipes (replaced with Mechanical Crafting Recipes)
            event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'}) // Removes Old Steel Blasting Recipe
            event.remove({ id: 'ad_astra:coal_generator'}) // Removes Old Coal Generator Recipe
            event.remove({ id: 'ad_astra:compressor'}) // Removes Old Compressor Recipe
            event.remove({ id: 'ad_astra:nasa_workbench'}) // Removes Old Nasaworkbench Recipe
            event.remove({ id: 'ad_astra:fuel_refinery'}) // Removes Old Fuel Refinery Recipe
            event.remove({ id: 'ad_astra:water_pump'}) // Removes Old Water Pump Recipe
            event.remove({ id: 'ad_astra:oxygen_sensor'}) // Removes Old Oxygen Sensor Recipe
            event.remove({ id: 'ad_astra:oxygen_loader'}) // Removes Old Oxygen Loader Recipe
            event.remove({ id: 'ad_astra:energizer'}) // Removes Old Energizer Recipe
            event.remove({ id: 'ad_astra:solar_panel'}) // Removes Old Solar Panel Recipe
            event.remove({ id: 'ad_astra:oxygen_distributor'}) // Removes Old Oxygen Distributor Recipe
            event.remove({ id: 'ad_astra:cryo_freezer'}) // Removes Old Cryo Freezer Recipe
            event.remove({ id: 'ad_astra:tier_1_rover'}) // Removes Old Tier 1 Rover Recipe
            event.remove({ id: 'ad_astra:launch_pad'}) // Removes Old Launch Pad Recipe
            event.remove({ id: 'ad_astra:etrionic_blast_furnace'}) // Removes Old Recipe
            event.remove({ id: 'ad_astra:gravity_normalizer'}) // Removes Old Gravity Normalizer Recipe
    }
)
