"use strict";
const card_1 = require("./card");
let createSuiteCards = function (type) {
    let cards = new Array();
    for (let i = 1; i < 14; i++) {
        cards.push(new card_1.Card(i, type));
    }
    return cards;
};
class Deck {
    // The standard deck : 52 cards, 13 of each suite
    static buildStandardDeck() {
        let deck = new Deck();
        deck.cards = new Array();
        deck.cards = deck.cards.concat(createSuiteCards(card_1.SuiteType.Clubs));
        deck.cards = deck.cards.concat(createSuiteCards(card_1.SuiteType.Hearts));
        deck.cards = deck.cards.concat(createSuiteCards(card_1.SuiteType.Spades));
        deck.cards = deck.cards.concat(createSuiteCards(card_1.SuiteType.Diamonds));
        return deck;
    }
    ;
    // shuffle the local cards by modifying the this.cards, and return them as well after being shuffled
    shuffle() {
        // this.cards = implement the magic algorithm to shuffle
        return this.cards;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Deck;
//# sourceMappingURL=deck.js.map