ServerEvents.recipes(event =>
    {
        // Broken or Missing Item Recipes
            event.remove({ id: 'supplementaries:integration/ash_bricks_fd' });
            event.remove({ id: 'supplementaries:integration/lapis_bricks_fd' });
    }
)
