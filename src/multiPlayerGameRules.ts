import {Card} from './card';
import Player from './player';


// these are interfaces, classes and types required to represent a Multi player game, and its rules
// any multi player game (Euchre, Spades, Hearts) should implement these rules 

class PlayerCard {
    player: Player;
    card: Card;
}


class Trick {
    cards: Card[];
}

// Each player on his turn , has few allowed cards depending on the game rules and the leading card
// this interface to describe the function that filter player hands with allowed cards to play
// Leading card is optional, and it is null when the player leading himself
interface allowedCardsFilter {
    (playerHandCards: Card[], leadingCard?: Card) : Card[];
}


// Every turn there is one winner
// this interface define the function that will contains the logic for deciding the winner among many cards
interface winnerDeciderLogic {
    (playerCards: PlayerCard[]) : PlayerCard;
}


// this interface define the function that will calculate the scores from the tricks
interface TricksScoreCalculator {
    (tricks: Trick[]) : number;
}

abstract class MultiPlayerGame {
    players: Player[];

    abstract allowedCardPredictor : allowedCardsFilter;
    abstract winnerCardPredictor: winnerDeciderLogic;
    abstract countingScorePredictor: TricksScoreCalculator;

    constructor() {
        this.players = new Array<Player>();
    }

    joinPlayer(player: Player) {
        // playing order is the same order as player join the game.
        player.playingOrder = this.players.length;
        this.players.push(player);
    }

}