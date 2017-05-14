import {suite, test} from 'mocha-typescript';
import * as mocha from 'mocha';
import {Card, PictureCardType, SuiteType} from '../src/model/card';
import {expect} from 'chai';
describe("Card tests", function() {
    @suite("When create a new Card")
    class Basic {
        @test("can pass a numeric value as rank property")
        assert_rank_assignment() {
            var subject: Card = new Card(10, SuiteType.Clubs);

            expect(subject.rank).to.equal(10);
            expect(subject.suiteType).to.equal(SuiteType.Clubs);
        }   

        @test("or passing a picture type as rank property")
        assert_rank_assignment_with_picture_parameter() {
            var subject: Card = new Card(PictureCardType.Jack, SuiteType.Hearts);
            expect(subject.rank).to.equal(11);
            expect(subject.suiteType).to.equal(SuiteType.Hearts);
        }

        @test("should fail when rank is outside 1-13 range")
        assert_fail() {
            expect(() => {
                var subject: Card = new Card(14, SuiteType.Diamonds);
            }).to.throw("rank outside the range");
        }
    }

    @suite("When dealing with picture cards")
    class RankType{
        @test("should be able to switch between the Jack card and its equivalant numeric 11")
        assert_jack() {
            var subject: Card = new Card(PictureCardType.Jack, SuiteType.Diamonds);
            expect(subject.rank).to.equal(11);
            expect(subject.rank).to.equal(PictureCardType.Jack);
        }
    }


            //and dealing with a picture card"
        @suite("When convert a JavaScript Object")
        class JSObjectTest {
            obj: any;
            before() {
                var subject : Card =  new Card(PictureCardType.Jack, SuiteType.Diamonds);
                this.obj = subject.toJSObject();
            }
            @test("should convert suiteType to its string name")
            assert_suitename() {
                expect(this.obj.suite).to.equal('Diamonds');
            }
            @test("should convert rank to its picture name for picture cards")
            assert_jsonPictureCard() {
                expect(this.obj.rank).to.equal('Jack');
            }

            @test("should convert rank to its numeric value numeric cards")
            assert_jsonNumeriCard() {
                var subject : Card =  new Card(5, SuiteType.Diamonds);
                var json: any = subject.toJSObject();
                expect(json.rank).to.equal('5');
            }

        }


});