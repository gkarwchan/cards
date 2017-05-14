/// <reference path="../typings/index.d.ts" />
import { suite, test} from "mocha-typescript";
import Pile from '../app/pile';
import {Card, FaceCardType, SuiteType}  from '../app/card';
import {expect} from 'chai';


@suite("Pile tests")
class Basic {
    subject: Pile;

    before() {
        this.subject =  new Pile();
        let cards : Card[] = new Array<Card>();
        cards.push(new Card(5, SuiteType.Clubs));
        cards.push(new Card(1, SuiteType.Spades));
        cards.push(new Card(FaceCardType.Queen, SuiteType.Diamonds));
        this.subject.setPile(cards);  
    }


    @test("pickTopCard should give you the first card in the pile")
    assert_topcard() {
        let topCard = this.subject.pickTopCard();
        expect(topCard.rank).to.equal(12);
        expect(topCard.suiteType).to.equal(SuiteType.Diamonds);
    }

    @test("pickTopCard should return a card while there are cards in the pile")
    assert_topcard_return_card() {
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();

        // expect no Exceptions.
        //if this didn't throw error then we are passing the test.
    }

    @test("pickTopCard should throw exception when no cards in the pile")
    assert_topcard_throw_error() {
        
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        // calling for the 4th time throw error , because there are only 3 cards
        expect(() => {
            topCard = this.subject.pickTopCard();
        }).to.throw("No more cards");
    }

    @test("anyMoreCards should return true when there are cards")
    assert_anymorecard() {
        let topCard = this.subject.pickTopCard();
        expect(this.subject.anyMoreCards()).to.equal(true);
    }

    @test("anyMoreCards should return false when there are no more cards")
    assert_anymorecard_return_false() {
        let topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        topCard = this.subject.pickTopCard();
        expect(this.subject.anyMoreCards()).to.equal(false);
    }
    
    

};





