ServerEvents.recipes(event =>
    {
        // Removed / Replaced Recipes
            event.remove({ id: 'wunderreich:wunder_kiste' }) // Removes Wunder_Kistes
            event.remove({ id: 'betterend:guidebook' }) // Removes guide book
            event.remove({ id: 'betternether:betternether_book' }) // Removes guide book
            event.remove({ id: 'seasonsextras:seasonal_compendium' }) // Removes Guide Book
            event.remove({ id: 'simplevillagers:iron_farm_block' })
            event.remove({ id: 'simplevillagers:trading_block' })
    }
)
