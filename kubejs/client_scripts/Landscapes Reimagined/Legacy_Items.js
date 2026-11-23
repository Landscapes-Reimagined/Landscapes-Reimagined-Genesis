// Hides legacy kubejs: items/fluids from JEI and explains them in tooltips.
// Mappings live in startup_scripts/Landscapes Reimagined/Legacy_Items.js (global.GENESIS_LEGACY).

const LEGACY = global.GENESIS_LEGACY;

// Tooltip on every legacy item
ItemEvents.tooltip(event =>
    {
        Object.keys(LEGACY.items).forEach(oldId => {
            event.add(oldId, Text.red('Legacy item: converts automatically, or craft it into the new version.'));
        });
    }
)

// Hide from JEI
if (typeof JEIEvents !== 'undefined') {
    JEIEvents.hideItems(event =>
        {
            Object.keys(LEGACY.items).forEach(oldId => event.hide(oldId));
        }
    )
    JEIEvents.hideFluids(event =>
        {
            Object.keys(LEGACY.fluids).forEach(oldId => event.hide(oldId));
        }
    )
}
