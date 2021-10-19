//rock crushes scissors, scissors cuts paper 
//paper covers rock, rock crushes lizard
//lizard poisons spock, spock smashed scissors
//scissors decap lizard, lizard eats paper
//paper disproves spock, spock vaporized rock
const gestureArray = [];
class Game {
    constructor(type) {
        this.type = type;

    }
    mainRun() {
        this.playerChoice();
        this.battle();
    }
    playerChoice(){
        prompt("Please enter the number of the weapon you'd like to choose. /n 1: rock /n 2: paper /n 3: scissors /n 4: lizard /n 5: spock");
    }
}

module.exports = {
    Game:Game,

}
