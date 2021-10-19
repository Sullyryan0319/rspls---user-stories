// Super class for human and AI


class Player {
    constructor() {
        this.name = "default";
        this.chosenGesture = "";
        this.wins = 0;
    }

    chooseGesture() {
        // method to choose gesture
    }
}

module.exports = {
    Player: Player,
}