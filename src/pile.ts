import {Card} from './card';

class Pile {

    private cards : Card[];

    setPile(pileCards: Card[]) : void {
        this.cards = pileCards;
    }

    pickTopCard(): Card {
        if (this.cards.length > 0)
            return this.cards.pop();
        else
            throw new Error("No more cards");
    }

    anyMoreCards() : boolean {
        return this.cards.length > 0;
    }
}

export default Pile;