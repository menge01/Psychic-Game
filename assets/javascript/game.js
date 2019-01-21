
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var lettersGuessed = [];

var computerGuess = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




document.onkeyup = function(event) {

	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	computerGuess.push(compGuess);

	console.log(computerGuess[0]);

//   var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var playerGuess  = event.key.toLowerCase();
	//lettersGuessed.push(playerGuess);

	console.log(computerGuess[0]);

	if (options.indexOf(playerGuess) > -1) {
		if (lettersGuessed.includes(playerGuess)) {
			var isDuplicate = false;
			for (var i = 0; i < lettersGuessed.length; i++) { //for every previous answer
				if (currentAnswer == lettersGuessed[i]) { //check if the current answer is a previous one
					isDuplicate = true;
					break; //exit loop
				}
			}
			if (!isDuplicate) { //different than previous
				lettersGuessed[lettersGuessed.length] = currentAnswer;
				//do other code here
			}
		}


       if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
		 
			
	wins++;

	guessesLeft = 9;

	lettersGuessed.length = 0;

	computerGuess.length = 0;

	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	computerGuess.push(compGuess);

	console.log(computerGuess[0]);

		}
	

 if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	 guessesLeft = guessesLeft-1;
	 lettersGuessed.push(playerGuess);

 }
 else {

	losses++;

	guessesLeft = 9;

	lettersGuessed.length = 0;

	computerGuess.length = 0;

	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	computerGuess.push(compGuess);

	console.log(computerGuess[0]);
 }





	

	}



var html = "<p>Guess what letter I'm thinking of!</p>" +

          "<p>Wins: " + wins + "</p>" +

          "<p>Losses: " + losses + "</p>" +

          "<p>Guesses left: " + guessesLeft + "</p>" +

          "<p>Your guesses so far: " + lettersGuessed + "</p>";

 

document.querySelector("#game").innerHTML = html;



}


