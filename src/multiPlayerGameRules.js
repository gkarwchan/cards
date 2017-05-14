"use strict";
// these are interfaces, classes and types required to represent a Multi player game, and its rules
// any multi player game (Euchre, Spades, Hearts) should implement these rules 
class PlayerCard {
}
class Trick {
}
class MultiPlayerGame {
    constructor() {
        this.players = new Array();
    }
    joinPlayer(player) {
        // playing order is the same order as player join the game.
        player.playingOrder = this.players.length;
        this.players.push(player);
    }
}
//# sourceMappingURL=multiPlayerGameRules.js.map