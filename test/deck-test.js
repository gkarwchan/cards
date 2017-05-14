"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../typings/index.d.ts" />
const mocha_typescript_1 = require("mocha-typescript");
const deck_1 = require("../app/deck");
const card_1 = require("../app/card");
const chai_1 = require("chai");
let Basic = class Basic {
    before() {
        this.subject = deck_1.default.buildStandardDeck();
    }
    assert_standard_deck_length() {
        chai_1.expect(this.subject.cards).to.have.lengthOf(52);
    }
    assert_standard_deck_rank_count() {
        for (var i = 1; i < 14; i++) {
            var result = this.subject.cards.filter(card => card.rank === i);
            chai_1.expect(result).to.have.lengthOf(4);
        }
    }
    assert_standard_deck_stuitetype_count() {
        let result = this.subject.cards.filter(card => card.suiteType === card_1.SuiteType.Clubs);
        chai_1.expect(result).to.have.lengthOf(13);
        result = this.subject.cards.filter(card => card.suiteType === card_1.SuiteType.Hearts);
        chai_1.expect(result).to.have.lengthOf(13);
        result = this.subject.cards.filter(card => card.suiteType === card_1.SuiteType.Diamonds);
        chai_1.expect(result).to.have.lengthOf(13);
        result = this.subject.cards.filter(card => card.suiteType === card_1.SuiteType.Spades);
        chai_1.expect(result).to.have.lengthOf(13);
    }
};
__decorate([
    mocha_typescript_1.test("Standard Deck should contains 52 cards")
], Basic.prototype, "assert_standard_deck_length", null);
__decorate([
    mocha_typescript_1.test("Standard Deck should contains 4 cards for each rank")
], Basic.prototype, "assert_standard_deck_rank_count", null);
__decorate([
    mocha_typescript_1.test("Standard Deck should contains 13 cards for each Suite type")
], Basic.prototype, "assert_standard_deck_stuitetype_count", null);
Basic = __decorate([
    mocha_typescript_1.suite("Standard Deck tests")
], Basic);
;
//# sourceMappingURL=deck-test.js.map