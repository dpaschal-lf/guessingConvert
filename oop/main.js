

$(document).ready(startApp);
var game;
var generator;

function startApp(){
    generator = new RandomGenerator ();
    game = new Guessconvert (generator);
    game.guess_start();
}

class Guessconvert {
    constructor(generator) {
        this.handleGuess = this.handleGuess.bind(this);
        this.secretNumber;
        this.generator = generator;

    }

    guess_start( ) {
        this.secretNumber = this.pickRandomNumber(1,10);
        this.attachHandlers();
    }

    pickRandomNumber (min, max){
        this.generator.generate(min, max);
        return this.generator.getNum();
    }

    attachHandlers(){
        $("#submitGuess").click( this.handleGuess );
        $("#userGuess").focus( this.clearGuess );
    }

    handleGuess (){
        var userGuess = parseInt( $("#userGuess").val());
        if(userGuess<1 || userGuess>10){
            this.displayResult('invalid range.  Must be between 1 and 10');
            return;
        }
        if(userGuess === this.secretNumber){
            this.displayResult('you got it!');
        } else if (userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (userGuess > this.secretNumber){
            this.displayResult('too high!');
        }
    }

    clearGuess () {
        $("#userGuess").val('');
    }

    displayResult (message) {
        $("#display").text( message );
    }

}