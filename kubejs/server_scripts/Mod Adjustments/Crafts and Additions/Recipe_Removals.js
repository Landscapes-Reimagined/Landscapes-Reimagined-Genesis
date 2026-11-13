ServerEvents.recipes(event =>
    {
        // Old Recipes (replaced with tag-based recipes)
            event.remove({id: 'createaddition:crafting/capacitor_1'}) //Removes Capacitor recipe
            event.remove({id: 'createaddition:crafting/capacitor_2'}) // same as before

        // Removed / Replaced Recipes
            event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe

        // Broken or Missing Item Recipes
            event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' });
    }
)
