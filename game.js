//rock crushes scissors, scissors cuts paper 
//paper covers rock, rock crushes lizard
//lizard poisons spock, spock smashed scissors
//scissors decap lizard, lizard eats paper
//paper disproves spock, spock vaporized rock
const prompt = require('prompt-sync')();
const AI = require('./AI');
const Human = require('./Human');


class Game {
    constructor() {
        this.playerOne = new Human("Player One");
        this.playerTwo = null;

    }

    runGame() {
        console.log("Welcome to the RPSLS DEATH MATCH!!");
        this.chooseGame();
        this.battle();
        this.replayGame();
    }

    chooseGame() {
        console.log("what type of game would you like to play? /n Enter '1' for single player, enter '2' for multiplayer");
        let gameType = prompt();
        switch (gameType) {
            case '1':
                this.playerTwo = new AI();
                break;
            case '2':
                this.playerTwo = new Human("Player Two");
                break;
            default:
                console.log("Invalid Selection!");
                return this.chooseGame;
        }
    }



}

module.exports = {
    Game: Game,

}
