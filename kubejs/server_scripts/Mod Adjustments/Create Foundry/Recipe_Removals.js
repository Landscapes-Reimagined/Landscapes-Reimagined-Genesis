ServerEvents.recipes(event =>
    {
        // Removed / Replaced Recipes
            event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' })
            event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' })
    }
)
