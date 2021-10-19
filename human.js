// sub class of Player
const prompt = require('prompt-sync')();
const Player = require('./Player');

class Human extends Player {
    constructor(playerNum) {
        super();
        this.setName(playerNum)

    }

    setName(playerNum) {
        console.log(`What is your name ${playerNum}?`);
        this.name = prompt();
    }

    chooseGesture() {
        //method to choose gesture    
    }


}

module.exports = {
    Human: Human,
}