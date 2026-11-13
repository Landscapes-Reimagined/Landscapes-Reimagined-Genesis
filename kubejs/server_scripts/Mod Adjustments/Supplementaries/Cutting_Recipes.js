ServerEvents.recipes(event =>
    {
        // Fixes Supplementaries Ash Bricks Cutting Recipe
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: 'supplementaries:ash_bricks'
                    }
                ],
                tool: {
                    type: "farmersdelight:tool",
                    tag: "c:tools/pickaxes"
                },
                result: [
                    {
                        item: 'supplementaries:ash_brick',
                        count: 4
                    }
                ],
                sound: "minecraft:pickaxe_dig"
            }).id("genesis:cutting/ash_bricks");

        // Fixes Supplementaries Lapis Bricks Cutting Recipe
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: 'supplementaries:lapis_bricks'
                    }
                ],
                tool: {
                    type: "farmersdelight:tool",
                    tag: "c:tools/pickaxes"
                },
                result: [
                    {
                        item: 'minecraft:lapis_lazuli',
                        count: 4
                    }
                ],
                sound: "minecraft:pickaxe_dig"
            }).id("genesis:cutting/lapis_bricks");
    }
)
