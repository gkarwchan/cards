/* *** CardDeck.ts **** */
import {Card, SuiteType} from './card';
import {cardShuffler} from './cardShuffler';


interface cardDeckContract {
    cards : Card[];
    shuffle(): void;
    dealCard(): Card;
}

let privateCards : Card[];

// Hey, why not use JavaScript generator to deal sequence of cards?
// This might be over-architecture, but it is a way to show the usage of generators
let getNexCard =  function*() {
    while (privateCards.length > 0) {
        let card: Card = privateCards.splice(0, 1)[0];
        yield card;
    }
};
// initiallize the generator
let cardSequence : IterableIterator<Card> = getNexCard();

// Class CardDeck is responsible of implementing the contract above: Shuffle and Deal a card

class CardDeck implements cardDeckContract {

    cardShuffler: cardShuffler;

    /// CardDeck is not the class that has shuffling algorithm.
    /// We pass the shuffling algorithm to its constructor as a simple way of Dependency Injection
    /// This decision will help us chose different shuffling ways in the future.
    /// So the CardDeck is like Strategy Pattern
    constructor(cards: Card[], cardShuffler: cardShuffler) {
        privateCards = cards.slice(0);
        // this is the shuffling utility passed to the class
        this.cardShuffler = cardShuffler;
    }

    shuffle()  {
        // calling the shuffling
        let copy = this.cardShuffler.shuffle(privateCards);
        // slice(0) is a simple way to do array cloning
        privateCards = copy.slice(0);
    }

    get cards() : Card[]  {
        return privateCards;
    }

    // dealCard is implemented as iterator though the usage of Generator in JavaScript ES6
    // see the code above
    dealCard() : Card {
        return cardSequence.next().value;
    }

}

export default CardDeck;