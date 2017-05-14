/* CardShuffler.ts */
import {Card, SuiteType} from './card';

// cardShuffler is the contract the define shuffling array of cards

export interface cardShuffler {
    shuffle(inputCards: Card[]) : Card[];
}


// this is a simple implementation of a shuffling algorithm
export class simpleCardShuffler implements cardShuffler {
    shuffle(inputCards: Card[]) : Card[] {
        // we implement a simple shuffling algorithm
        var copy: Card[] = [], n : number = inputCards.length, i : number;
        while(n) {
            i = Math.floor(Math.random() * n--);
            copy.push(inputCards.splice(i, 1)[0]);
        }
        return copy.slice(0);
    }
}


// in the future, and for more requirements we can implement different shuffling logic here, that can be injected into the CardDeck