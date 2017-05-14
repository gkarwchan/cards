"use strict";
// Face cards will have matching numeric rank
var FaceCardType;
(function (FaceCardType) {
    FaceCardType[FaceCardType["Jack"] = 11] = "Jack";
    FaceCardType[FaceCardType["Queen"] = 12] = "Queen";
    FaceCardType[FaceCardType["King"] = 13] = "King";
    FaceCardType[FaceCardType["Ace"] = 1] = "Ace";
})(FaceCardType || (FaceCardType = {}));
exports.FaceCardType = FaceCardType;
;
var SuiteType;
(function (SuiteType) {
    SuiteType[SuiteType["Hearts"] = 0] = "Hearts";
    SuiteType[SuiteType["Diamonds"] = 1] = "Diamonds";
    SuiteType[SuiteType["Spades"] = 2] = "Spades";
    SuiteType[SuiteType["Clubs"] = 3] = "Clubs";
})(SuiteType || (SuiteType = {}));
exports.SuiteType = SuiteType;
;
class Card {
    constructor(rank, type) {
        if (rank > 0 && rank < 14)
            this._rank = rank;
        else
            throw new RangeError("rank outside the range");
        this._type = type;
    }
    get rank() {
        return this._rank;
    }
    get suiteType() {
        return this._type;
    }
    get facecard() {
        if (this._rank > 10 || this._rank === 1)
            return this._rank;
        else
            throw new RangeError("Card is not face card");
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map