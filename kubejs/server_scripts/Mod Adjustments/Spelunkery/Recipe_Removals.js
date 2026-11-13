ServerEvents.recipes(event =>
    {
        // Magnetite Smelting (replaced with New Age Magnetite in Compat/Minecraft)
            event.remove ({ id: 'spelunkery:iron_from_magnetite'})
            event.remove ({ id: 'spelunkery:iron_from_magnetite_blasting'})
    }
)
