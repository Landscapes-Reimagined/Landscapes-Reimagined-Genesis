ServerEvents.recipes(event => {
    // Raw Lead -> Lead Ingot
    event.smelting('deeperdarker:lead_ingot', 'deeperdarker:raw_lead')
        .xp(0.7)
        .id('genesis:smelting/lead_ingot_from_raw_lead');

    // Crushed Raw Lead -> Lead Ingot
    event.smelting('deeperdarker:lead_ingot', 'create:crushed_raw_lead')
        .xp(0.1)
        .id('genesis:smelting/lead_ingot_from_crushed_raw_lead');

});