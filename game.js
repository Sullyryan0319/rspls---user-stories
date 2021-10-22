
const prompt = require('prompt-sync')();
const { AI } = require('./AI');
const { Human } = require('./Human');
const { Player } = require('./Player');

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

    battle() {
        let player1 = this.playerOne;
        let player2 = this.playerTwo;

        while (player1.wins < 2 && player2.wins < 2) {
            player1.chooseGesture();
            player2.chooseGesture();
            this.showPicks();

            if (player1.chosenGesture === player2.chosenGesture) {
                console.log("It's a tie!!");
            }
            else if (player1.chosenGesture === player1.gestures[0] && player2.chosenGesture === player2.gestures[1]) {
                console.log(`${player2.name} wins!: Paper covers rock`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[0] && player2.chosenGesture === player2.gestures[2]) {
                console.log(`${player1.name} wins!: Rock smashes scissors`);
                player1.wins++;

            }
            else if (player1.chosenGesture === player1.gestures[0] && player2.chosenGesture === player2.gestures[3]) {
                console.log(`${player1.name} wins!: Rock crushes lizard`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[0] && player2.chosenGesture === player2.gestures[4]) {
                console.log(`${player2.name} wins!: Spock vaporizes rock`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[1] && player2.chosenGesture === player2.gestures[0]) {
                console.log(`${player1.name} wins!: Paper covers rock`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[1] && player2.chosenGesture === player2.gestures[2]) {
                console.log(`${player2.name} wins!: Scissors cut paper`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[1] && player2.chosenGesture === player2.gestures[3]) {
                console.log(`${player2.name} wins!: Lizard eats paper`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[1] && player2.chosenGesture === player2.gestures[4]) {
                console.log(`${player1.name} wins!: Paper disproves Spock`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[2] && player2.chosenGesture === player2.gestures[0]) {
                console.log(`${player2.name} wins!: Rock smashes scissors`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[2] && player2.chosenGesture === player2.gestures[1]) {
                console.log(`${player1.name} wins!: Scissors cut paper`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[2] && player2.chosenGesture === player2.gestures[3]) {
                console.log(`${player1.name} wins!: Scissors decapitate lizard`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[2] && player2.chosenGesture === player2.gestures[4]) {
                console.log(`${player2.name} wins!: Spock smashes scissors`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[3] && player2.chosenGesture === player2.gestures[0]) {
                console.log(`${player2.name} wins!: Rock crushes lizard`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[3] && player2.chosenGesture === player2.gestures[1]) {
                console.log(`${player1.name} wins!: Lizard eats paper`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[3] && player2.chosenGesture === player2.gestures[2]) {
                console.log(`${player2.name} wins!: Scissors decapitate lizard`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[3] && player2.chosenGesture === player2.gestures[4]) {
                console.log(`${player1.name} wins!: Lizard poisons spock`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[4] && player2.chosenGesture === player2.gestures[0]) {
                console.log(`${player1.name} wins!: Spock vaporized rock`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[4] && player2.chosenGesture === player2.gestures[1]) {
                console.log(`${player2.name} wins!: Paper disproves spock`);
                player2.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[4] && player2.chosenGesture === player2.gestures[2]) {
                console.log(`${player1.name} wins!: Spock smashes scissors`);
                player1.wins++;
            }
            else if (player1.chosenGesture === player1.gestures[4] && player2.chosenGesture === player2.gestures[3]) {
                console.log(`${player2.name} wins!: Lizard poisons spock`);
                player2.wins++;
            }
            this.scoreboard();
        }
    }


                showPicks(){
                    let player1 = this.playerOne;
                    let player2 = this.playerTwo;
                    console.log(`${player1.name} chose: ${player1.chosenGesture}`);
                    console.log(`${player2.name} chose: ${player2.chosenGesture}`);


                }

                scoreboard(){
                    let player1 = this.playerOne;
                    let player2 = this.playerTwo;
                    console.log(`${player1.name} has ${player1.wins} wins`);
                    console.log(`${player2.name} has ${player2.wins} wins`);
                   
                }

                replayGame(){
                    console.log("Would you like to play again? Enter '1' to play again or '2' to quit.");
                    let replayPrompt = prompt();
                    if(replayPrompt == 1){
                        this.runGame();
                    }
                    else{
                        console.log("Bye Felicia!");
                    }
                }



            }

            module.exports = {
                Game: Game,

            }
