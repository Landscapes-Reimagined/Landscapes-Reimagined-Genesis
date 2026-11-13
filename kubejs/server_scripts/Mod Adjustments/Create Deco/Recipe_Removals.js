ServerEvents.recipes(event =>
    {
        // Old Recipes (replaced with tag-based recipes)
            event.remove({id: 'createdeco:zinc_bars_overlay'})
            event.remove({id: 'createdeco:zinc_mesh_fence'})
            event.remove({id: 'createdeco:zinc_catwalk_forge'})
            event.remove({id: 'createdeco:zinc_catwalk_railing_forge'})
            event.remove({id: 'createdeco:zinc_support_wedge'})
            event.remove({id: 'createdeco:zinc_hull'})
            event.remove({id: 'createdeco:zinc_sheet_metal'})
            event.remove({id: 'createdeco:yellow_zinc_lamp'})
            event.remove({id: 'createdeco:red_zinc_lamp'})
            event.remove({id: 'createdeco:green_zinc_lamp'})
            event.remove({id: 'createdeco:blue_zinc_lamp'})
    }
)
