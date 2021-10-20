// sub class of Player, use inheritance to exchange data
const {Player} = require('./Player');

class AI extends Player {
    constructor() {
        super();
        this.name = "Dot Matrix"

    }

    chooseGesture() {
        let gest = this.gestures;
        let gestChoice = Math.floor(Math.random()*gest.length)
        this.chosenGesture = gest[gestChoice];
    }
}

module.exports = {
    AI: AI,
}