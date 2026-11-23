ServerEvents.recipes(event =>
    {
        // Spelunkery Magnetite to New Age Magnetite
            event.smelting(
                'create_new_age:magnetite_block',
                'spelunkery:raw_magnetite_block'
            ).id('genesis:smelting/magnetite_block')
            event.smelting(
                'genesis:magnetite',
                'spelunkery:raw_magnetite'
            ).id('genesis:smelting/magnetite')
    }
)
