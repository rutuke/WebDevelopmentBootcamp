var age = Number(prompt("What's your age?"));

if (age <0 ) {
alert("Error! Age can't be a negative number!");}
else if(age === 21) {
alert("Happy 21sy Birthday!");}
else if (age%2 !== 0) {
alert("Your age is odd!");}
else if(age % Math.sqrt(age) === 0) {
alert("Perfect Square!");}