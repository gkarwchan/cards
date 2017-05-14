"use strict";
class Player {
    setInitialCards(passedCards) {
        this.cards = passedCards;
    }
    playCard(card) {
        let cardIndex = this.cards.findIndex(x => x.rank === card.rank && x.suiteType == card.suiteType);
        if (cardIndex > 0)
            this.cards.splice(cardIndex, 1);
        else
            throw new Error("Player doesn't have the card");
        return card;
    }
    addNewCard(card) {
        this.cards.push(card);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Player;
//# sourceMappingURL=player.js.map