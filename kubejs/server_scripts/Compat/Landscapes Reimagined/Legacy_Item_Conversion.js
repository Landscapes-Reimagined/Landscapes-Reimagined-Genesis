// Converts legacy kubejs: items, blocks and fluids to their genesis: (or createfoundry:) versions.
// Mappings live in startup_scripts/Landscapes Reimagined/Legacy_Items.js (global.GENESIS_LEGACY).

const LEGACY = global.GENESIS_LEGACY;

// Swap every legacy stack in a container, keeping count and NBT. Returns how many stacks changed.
function convertContainer(container) {
    if (!container || !container.getContainerSize) return 0;
    let changed = 0;
    for (let slot = 0; slot < container.getContainerSize(); slot++) {
        let stack = container.getItem(slot);
        if (stack.isEmpty()) continue;
        let newId = LEGACY.items[String(stack.id)];
        if (!newId) continue;
        // Use KubeJS's own NBT accessor (vanilla getTag/hasTag aren't reachable on Fabric)
        let nbt = stack.nbt;
        let converted = nbt ? Item.of(newId, stack.count, nbt) : Item.of(newId, stack.count);
        container.setItem(slot, converted);
        changed++;
    }
    return changed;
}

// Player inventory and Ender Chest on login
PlayerEvents.loggedIn(event =>
    {
        const player = event.player;
        let changed = convertContainer(player.inventory) + convertContainer(player.enderChestInventory);
        if (changed > 0) {
            player.tell(Text.gold(`[Genesis] Updated ${changed} item stack(s) to the new genesis: ids.`));
        }
    }
)

// Anything picked up or moved into the inventory later
PlayerEvents.inventoryChanged(event =>
    {
        if (LEGACY.items[String(event.item.id)]) {
            convertContainer(event.player.inventory);
        }
    }
)

// Chests and barrels (including double chests) when opened
PlayerEvents.chestOpened(event =>
    {
        convertContainer(event.inventory);
    }
)

// Other containers (shulker boxes, furnaces, hoppers, droppers...) when right-clicked,
// and placed legacy blocks, which are swapped in place
BlockEvents.rightClicked(event =>
    {
        const block = event.block;
        const newBlock = LEGACY.blocks[String(block.id)];
        if (newBlock) {
            block.set(newBlock, { waterlogged: String(block.properties.get('waterlogged') || 'false') });
            event.cancel();
            return;
        }
        if (String(event.hand) == 'MAIN_HAND') {
            convertContainer(block.entity);
        }
    }
)

// Mining a legacy block drops the new one
ServerEvents.blockLootTables(event =>
    {
        Object.keys(LEGACY.blocks).forEach(oldId => {
            event.addSimpleBlock(oldId, LEGACY.blocks[oldId]);
        });
    }
)

// Manual fallbacks for storage the scripts can't reach (Create vaults, storage mods, backpacks...)
ServerEvents.recipes(event =>
    {
        // Legacy Item -> New Item (crafting table)
        Object.keys(LEGACY.items).forEach(oldId => {
            event.shapeless(LEGACY.items[oldId], [oldId])
                .id(`genesis:legacy/${oldId.split(':')[1]}`);
        });

        // Legacy Fluid -> New Fluid (Mixer, no heat), so old tanks can be pumped through a basin
        Object.keys(LEGACY.fluids).forEach(oldId => {
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: oldId,
                        nbt: {},
                        amount: 8100
                    }
                ],
                results: [
                    {
                        fluid: LEGACY.fluids[oldId],
                        amount: 8100
                    }
                ]
            }).id(`genesis:mixing/legacy/${oldId.split(':')[1]}`);
        });
    }
)
