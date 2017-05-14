"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../typings/index.d.ts" />
const mocha_typescript_1 = require("mocha-typescript");
const pile_1 = require("../app/pile");
const card_1 = require("../app/card");
const chai_1 = require("chai");
let Basic = class Basic {
    before() {
        this.subject = new pile_1.default();
        let cards = new Array();
        cards.push(new card_1.Card(5, card_1.SuiteType.Clubs));
        cards.push(new card_1.Card(1, card_1.SuiteType.Spades));
        cards.push(new card_1.Card(card_1.FaceCardType.Queen, card_1.SuiteType.Diamonds));
        this.subject.setPile(cards);
    }
    assert_topcard() {
        let topCard = this.subject.pickTopCard();
        chai_1.expect(topCard.rank).to.equal(12);
        chai_1.expect(topCard.suiteType).to.equal(card_1.SuiteType.Diamonds);
    }
    assert_topcard_return_card() {
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        // expect no Exceptions.
        //if this didn't throw error then we are passing the test.
    }
    assert_topcard_throw_error() {
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        // calling for the 4th time throw error , because there are only 3 cards
        chai_1.expect(() => {
            topCard = this.subject.pickTopCard();
        }).to.throw("No more cards");
    }
    assert_anymorecard() {
        let topCard = this.subject.pickTopCard();
        chai_1.expect(this.subject.anyMoreCards()).to.equal(true);
    }
    assert_anymorecard_return_false() {
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        chai_1.expect(this.subject.anyMoreCards()).to.equal(false);
    }
};
__decorate([
    mocha_typescript_1.test("pickTopCard should give you the first card in the pile")
], Basic.prototype, "assert_topcard", null);
__decorate([
    mocha_typescript_1.test("pickTopCard should return a card while there are cards in the pile")
], Basic.prototype, "assert_topcard_return_card", null);
__decorate([
    mocha_typescript_1.test("pickTopCard should throw exception when no cards in the pile")
], Basic.prototype, "assert_topcard_throw_error", null);
__decorate([
    mocha_typescript_1.test("anyMoreCards should return true when there are cards")
], Basic.prototype, "assert_anymorecard", null);
__decorate([
    mocha_typescript_1.test("anyMoreCards should return false when there are no more cards")
], Basic.prototype, "assert_anymorecard_return_false", null);
Basic = __decorate([
    mocha_typescript_1.suite("Pile tests")
], Basic);
;
//# sourceMappingURL=pile-test.js.map