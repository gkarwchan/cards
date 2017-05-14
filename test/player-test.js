"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../typings/index.d.ts" />
const mocha_typescript_1 = require("mocha-typescript");
const card_1 = require("../app/card");
const player_1 = require("../app/player");
const chai_1 = require("chai");
let Basic = class Basic {
    before() {
        this.subject = new player_1.default();
        let cards = new Array();
        cards.push(new card_1.Card(5, card_1.SuiteType.Clubs));
        cards.push(new card_1.Card(1, card_1.SuiteType.Spades));
        cards.push(new card_1.Card(card_1.FaceCardType.Queen, card_1.SuiteType.Diamonds));
        this.subject.setInitialCards(cards);
    }
    assert_play_card() {
        let card = this.subject.playCard(new card_1.Card(1, card_1.SuiteType.Spades));
        chai_1.expect(this.subject.cards).to.have.lengthOf(2);
    }
    assert_play_card_exception() {
        chai_1.expect(() => {
            let card = this.subject.playCard(new card_1.Card(3, card_1.SuiteType.Spades));
        }).to.throw("Player doesn't have the card");
    }
};
__decorate([
    mocha_typescript_1.test("playCard should reduce the number of cards the player has")
], Basic.prototype, "assert_play_card", null);
__decorate([
    mocha_typescript_1.test("playCard should throw exception when player doesn't have the card")
], Basic.prototype, "assert_play_card_exception", null);
Basic = __decorate([
    mocha_typescript_1.suite("Player tests")
], Basic);
;
//# sourceMappingURL=player-test.js.map