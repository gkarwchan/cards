/* CardDeck-test.ts */
import { suite, test } from "mocha-typescript";
import {expect} from 'chai';
import * as mocha from 'mocha';
import * as Sinon from 'sinon';

import CardDeck from '../src/model/cardDeck';
import {Card, SuiteType}  from '../src/model/card';
import {cardShuffler, simpleCardShuffler} from '../src/model/cardShuffler';



describe ("CardDeck Tests", function() {

    let testCards: Card[] = [
        new Card(2, SuiteType.Clubs), 
        new Card(11, SuiteType.Hearts), 
        new Card(5, SuiteType.Diamonds),
        new Card(8, SuiteType.Spades),
        new Card(10, SuiteType.Diamonds)
        ];
    let proposedLength : number = testCards.length;


    @suite("When shuffle")
    class Basic {
        subject: CardDeck;
        mockCardShuffler : Sinon.SinonMock;
        before() {
            /* We create a mock for the cardShuffler, and pass the mock to the cardDeck
             If you are used to mock framework in .NET, Java, then you will find
             this mocking unusual.
             Sinon mocking is different that .NET , Java common mocking frameworks.
             As you see we create a concrete object of simpleCardShuffler.
             But even with this, we mock its method "shuffle", so when we call that method, 
             it is not simpleCardShuffler's method that is going to run, but it is our mock. */
            let shuffler = new simpleCardShuffler();
            this.mockCardShuffler = Sinon.mock(shuffler);
            // As you see here , we mock the method shuffle
            this.mockCardShuffler.expects("shuffle").returns([]);
            this.subject =  new CardDeck(testCards, shuffler);
        }


        @test("should call the shuffler passed from constructor")
        assert_shuffle_result_length() {
            // make sure that before shuffle we have all test cards (5)
            expect(this.subject.cards.length).to.equals(proposedLength);
            // Now this call the passed parameter, but as we mocked the method, then it is our mock that will be called.
            this.subject.shuffle();
            expect(this.subject.cards.length).to.equals(0)
            this.mockCardShuffler.verify();  // verify that we got the call 
            this.mockCardShuffler.restore(); // restore everything back and the class simpleCardShuffler will be back as it used to be
        }

    }

    describe ("When deal a card", function() {

        @suite("and when there are cards in the deck")
        class NextCardWithCards {

            subject: CardDeck;

            before() {
                this.subject =  new CardDeck(testCards, null);
                proposedLength = testCards.length;
            }
            @test("should get the first card from the deck") 
            assert_nextCad() {
                let card = this.subject.dealCard();
                expect(card.rank).to.equal(2);
                expect(card.suiteType).to.equal(SuiteType.Clubs);
            }


            @test("and the deck should be reduced by one card") 
            assert_cardRemoved() {
                expect(this.subject.cards.length).to.equal(proposedLength);
                let card = this.subject.dealCard();
                expect(this.subject.cards.length).to.equal(proposedLength - 1);
            }
        }

        @suite("and when there are no more cards in the deck")
        class NextCardWithoutCards {

            subject: CardDeck;

            before() {
                this.subject =  new CardDeck(testCards, null);
            }
            @test("should get undefined") 
            assert_nextCad() {
                var n = testCards.length;
                let localcard : Card;
                while(n--) {
                    localcard = this.subject.dealCard();
                    expect(localcard).to.be.not.null;
                }
                localcard = this.subject.dealCard();
                expect(localcard).to.be.undefined;
            }
        }
    });
});