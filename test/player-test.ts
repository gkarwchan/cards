/// <reference path="../typings/index.d.ts" />
import { suite, test} from "mocha-typescript";
import {Card, FaceCardType, SuiteType} from '../app/card';
import Player from '../app/player';
import {expect} from 'chai';

@suite("Player tests")
class Basic {
    subject: Player;

    before() {
        this.subject =  new Player();
        let cards : Card[] = new Array<Card>();
        cards.push(new Card(5, SuiteType.Clubs));
        cards.push(new Card(1, SuiteType.Spades));
        cards.push(new Card(FaceCardType.Queen, SuiteType.Diamonds));
        this.subject.setInitialCards(cards);  
    }


    @test("playCard should reduce the number of cards the player has")
    assert_play_card() {
        let card = this.subject.playCard(new Card(1, SuiteType.Spades));
        expect(this.subject.cards).to.have.lengthOf(2);
    }


    @test("playCard should throw exception when player doesn't have the card")
    assert_play_card_exception() {
        expect(() => {
            let card = this.subject.playCard(new Card(3, SuiteType.Spades));
        }).to.throw("Player doesn't have the card");
    }
    
    

};





