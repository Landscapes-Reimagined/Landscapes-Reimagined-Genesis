ServerEvents.recipes(event => {
    // Raw Lead Block -> 9x Crushed Raw Lead + 75% chance of 9x Experience Nugget
    event.custom({
        type: 'create:crushing',
        ingredients: [{ item: 'deeperdarker:raw_lead_block' }],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_lead', count: 9 },
            { item: 'create:experience_nugget', count: 9, chance: 0.75 }
        ]
    }).id('genesis:crushing/raw_lead_block');

    // Raw Lead -> Crushed Raw Lead + 75% chance of Experience Nugget
    event.custom({
        type: 'create:crushing',
        ingredients: [{ item: 'deeperdarker:raw_lead' }],
        processingTime: 250,
        results: [
            { item: 'create:crushed_raw_lead', count: 1 },
            { item: 'create:experience_nugget', count: 1, chance: 0.75 }
        ]
    }).id('genesis:crushing/raw_lead');

});