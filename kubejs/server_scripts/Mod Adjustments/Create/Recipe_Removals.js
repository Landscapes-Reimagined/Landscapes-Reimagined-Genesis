ServerEvents.recipes(event =>
    {
        // Old Deeper and Darker Ore Crushing (replaced in Compat/Create/Ore_Crushing_Recipes.js)
            event.remove({ id: 'create:crushing/gloomslate_coal_ore'})
            event.remove({ id: 'create:crushing/gloomslate_iron_ore'})
            event.remove({ id: 'create:crushing/gloomslate_copper_ore'})
            event.remove({ id: 'create:crushing/gloomslate_gold_ore'})
            event.remove({ id: 'create:crushing/gloomslate_redstone_ore'})
            event.remove({ id: 'create:crushing/gloomslate_emerald_ore'})
            event.remove({ id: 'create:crushing/gloomslate_lapis_ore'})
            event.remove({ id: 'create:crushing/gloomslate_diamond_ore'})

        // Old Ad Astra Ore Crushing (replaced in Compat/Create/Ore_Crushing_Recipes.js)
            event.remove({ id: 'create:crushing/glacio_coal_ore'})
            event.remove({ id: 'create:crushing/venus_coal_ore'})
            event.remove({ id: 'create:crushing/glacio_copper_ore'})
            event.remove({ id: 'create:crushing/glacio_lapis_ore'})
            event.remove({ id: 'create:crushing/venus_gold_ore'})
            event.remove({ id: 'create:crushing/mars_diamond_ore'})
            event.remove({ id: 'create:crushing/venus_diamond_ore'})
            event.remove({ id: 'create:crushing/mars_iron_ore'})
            event.remove({ id: 'create:crushing/mercury_iron_ore'})
            event.remove({ id: 'create:crushing/moon_iron_ore'})
            event.remove({ id: 'create:crushing/glacio_iron_ore'})
            event.remove({ id: 'create:crushing/deepslate_calorite_ore'})
            event.remove({ id: 'create:crushing/venus_calorite_ore'})
            event.remove({ id: 'create:crushing/deepslate_ostrum_ore'})
            event.remove({ id: 'create:crushing/mars_ostrum_ore'})
            event.remove({ id: 'create:crushing/deepslate_desh_ore'})
            event.remove({ id: 'create:crushing/moon_desh_ore'})

        // Old Better End Ore Crushing (replaced in Compat/Create/Ore_Crushing_Recipes.js)
            event.remove({ id: 'create:crushing/thallasium_ore'})
            event.remove({ id: 'create:crushing/amber_ore'})

        // Removed / Replaced Recipes
            event.remove({ id: 'create:crushing/nether_wart_block'})

        // Broken or Missing Item Recipes
            event.remove({ id: 'create:cutting/stripped_cherry_log' });
            event.remove({ id: 'create:cutting/stripped_cherry_wood' });
            event.remove({ id: 'create:cutting/cherry_log' });
            event.remove({ id: 'create:cutting/cherry_wood' });
            event.remove({ id: 'create:pressing/plains_path' });
            event.remove({ id: 'create:pressing/forest_path' });
            event.remove({ id: 'create:filling/plain_grass_block' });
            event.remove({ id: 'create:filling/forest_grass_block' });
            event.remove({ id: 'create:milling/white_trilium' });
            event.remove({ id: 'create:milling/wilting_trilium' });
    }
)
