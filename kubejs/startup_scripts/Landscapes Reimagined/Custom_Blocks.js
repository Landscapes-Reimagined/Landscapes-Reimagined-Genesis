StartupEvents.registry('block', event => {
    // Landscapes Reimagined Trophy
    event.create('kubejs:trophy_block')
        .displayName('Landscapes Reimagined Trophy')
        .soundType('metal')
        .mapColor('DIAMOND')
        .hardness(2.0)
        .resistance(1200)
        .model('kubejs:block/trophy_block')
        .requiresTool(true)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagItem('tooltiprareness:epic_item')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)
});
