/* *** in the file Card.ts ***** */
// Picture cards (Jack, Queen, King and Ace) will have matching numeric rank
enum PictureCardType {Jack = 11, Queen = 12, King = 13, Ace = 1};

enum SuiteType { Hearts , Diamonds, Spades, Clubs};


class Card {
    private _rank: number;
    private _type: SuiteType;
    private _isPicture = function() : boolean {
        return this._rank > 10 || this._rank === 1;
    }

    constructor(rank: number, type: SuiteType) {
        if (rank > 0 && rank < 14)
            this._rank = rank;
        else
            throw new RangeError("card rank outside the range");
        this._type = type;
    }

    get rank() : number {
        return this._rank;
    }

    get suiteType() : SuiteType {
        return this._type;
    }
    // convert to JS object that has the following format: {suite: 'Dimaonds', rank : 'Ace'}
    toJSObject(): any {
        return {suite: SuiteType[this._type], rank: this._isPicture()  ?  PictureCardType[this._rank] : this._rank.toString() };
    }

}

    export {Card , PictureCardType, SuiteType};