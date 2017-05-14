/* CardDeckFactory *** */
import CardDeck from './deck';
import {Card, SuiteType} from './card';
import {simpleCardShuffler, cardShuffler} from './cardShuffler';

let buildStandardDeck = function() : Card[]{
    let cards = new Array<Card>();

    for (let suite in SuiteType) {
        if (!isNaN(parseInt(suite))) {
            let suiteAsNumber: number = parseInt(suite);
            for (let rank = 1; rank < 14; rank++) {
                cards.push(new Card(rank, suiteAsNumber));
            }
        }
    }
    return cards;
};

// this is the CardDeck Factory
// it is responsible of building CardDeck with the proper dependencies

export class CardDeckFactory {
    // StandardDeck is a CardDeck with the standard playing cards (52), and the simpleCardShuffler
    public static CreateStandardDeck() : CardDeck {

        return new CardDeck(buildStandardDeck(), new simpleCardShuffler());
    }
}