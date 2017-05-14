import {Card} from './card';

class Player {

    name: string;

    cards : Card[];

    isDealer: boolean;

    playingOrder: number;

    setInitialCards(passedCards: Card[]) {
        this.cards = passedCards;
    }
 
    playCard(card: Card) : Card {
        let cardIndex = this.cards.findIndex(x => x.rank === card.rank && x.suiteType == card.suiteType);
        if (cardIndex > 0)
            this.cards.splice(cardIndex, 1);
        else
            throw new Error("Player doesn't have the card");
        return card;
    }

    addNewCard(card: Card) : void {
        this.cards.push(card);
    }
}

export default Player;