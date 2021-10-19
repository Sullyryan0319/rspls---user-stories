// sub class of Human, use inheritance to exchange data
const Player = require('./Player');

class AI extends Player {
    constructor() {
        super();
        this.name = "Dot Matrix"
    }

    chooseGesture() {
        let choice = this.gesture
    }
}

module.exports = {
    AI:AI,
}