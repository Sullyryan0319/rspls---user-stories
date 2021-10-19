//rock crushes scissors, scissors cuts paper 
//paper covers rock, rock crushes lizard
//lizard poisons spock, spock smashed scissors
//scissors decap lizard, lizard eats paper
//paper disproves spock, spock vaporized rock
const gestureArray = [];
class game {
    constructor(type) {
        this.type = type;
        this.gestureArray = ["rock", "paper", "scissors", "lizard", "spock"];
    }
}

module.exports = {
    gestureArray: gestureArray,
}