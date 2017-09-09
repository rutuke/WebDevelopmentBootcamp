var number = 8;

var answer = Number(prompt("Guess a number between 1 and 10"));

if (answer === number) { alert("You're right! " + number + " is correct!");}

else if (answer > number) { alert("Guess again, your answer is too high!");}

else { alert("Guess again, your answer is too low!");}