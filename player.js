

class Player {
    constructor() {
        this.name = "default";
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.chosenGesture = "";
        this.wins = 0;
    }


    chooseGesture() {
    }
}

module.exports = {
    Player: Player,
}