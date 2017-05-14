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
const chai_1 = require("chai");
let Basic = class Basic {
    before() {
    }
    assert_rank_assigment() {
        var subject = new card_1.Card(10, card_1.SuiteType.Clubs);
        var result = subject.rank;
        chai_1.expect(result).to.equal(10);
    }
    assert_facecard_assignmet() {
        var subject = new card_1.Card(card_1.FaceCardType.King, card_1.SuiteType.Clubs);
        var result = subject.rank;
        chai_1.expect(result).to.equal(13);
    }
    assert_fail() {
        chai_1.expect(() => {
            var subject = new card_1.Card(14, card_1.SuiteType.Diamonds);
        }).to.throw("rank outside the range");
    }
    assert_jack() {
        var subject = new card_1.Card(11, card_1.SuiteType.Diamonds);
        chai_1.expect(subject.facecard).to.equal(card_1.FaceCardType.Jack);
    }
};
__decorate([
    mocha_typescript_1.test("can create card with numeric rank")
], Basic.prototype, "assert_rank_assigment", null);
__decorate([
    mocha_typescript_1.test("or assign a facecard value interchangably with number")
], Basic.prototype, "assert_facecard_assignmet", null);
__decorate([
    mocha_typescript_1.test("should fail when rank is outside allowed range")
], Basic.prototype, "assert_fail", null);
__decorate([
    mocha_typescript_1.test("numeric rank 11 matches Jack Facecard")
], Basic.prototype, "assert_jack", null);
Basic = __decorate([
    mocha_typescript_1.suite("create new card tests")
], Basic);
;
//# sourceMappingURL=card-test.js.map