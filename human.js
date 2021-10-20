// sub class of Player
const prompt = require('prompt-sync')();
const { Player } = require('./Player');

class Human extends Player {
    constructor(playerNum) {
        super();
        this.setName(playerNum)

    }

    setName(playerNum) {
        console.log(`What is your name ${playerNum}?`);
        this.name = prompt();
    }

    presentGestures() {
        let gest = this.gestures;
        console.log(`${this.name} please choose a gesture.`);
        for (let i = 0; i < gest.length; i++) {
            console.log(`${i + 1}: ${gest[i]}`);
        }
    }

    chooseGesture() {
        this.presentGestures();
        let userInput = prompt();
        if (!userInput.match(/^[1-5]$/)) {
            console.log("please make a valid selection");
            this.chooseGesture();
        }
        else this.chosenGesture = this.gestures[userInput - 1];
        //method to choose gesture    
    }


}

module.exports = {
    Human: Human,
}