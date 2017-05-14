"use strict";
class Pile {
    setPile(pileCards) {
        this.cards = pileCards;
    }
    pickTopCard() {
        if (this.cards.length > 0)
            return this.cards.pop();
        else
            throw new Error("No more cards");
    }
    anyMoreCards() {
        return this.cards.length > 0;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pile;
//# sourceMappingURL=pile.js.map