PlayerEvents.loggedIn(event =>
    {
        const player = event.player;
        const bookTag = 'receivedHeraclesQuestsBook'; // Player tag to ensure book is only given once

        // Checks if the player has already received the Heracles Quests book
            if (!player.persistentData[bookTag]) {

                // Gives the player the Heracles Quests book
                player.give(Item.of('heracles:quest_book'));

                // Marks that the player has received the book
                player.persistentData[bookTag] = true;
            }
    }
)
