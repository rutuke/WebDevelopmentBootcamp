//To test if the person is allowed into the concert venue, and if they can drink.
var age = prompt("What's your age?");
if (age < 18){
alert("You can't enter the venue!");}
else if(age > 18 && age<21) {
alert("You can enter, but you can't drink!");}
else { alert("You can enter and drink!");}