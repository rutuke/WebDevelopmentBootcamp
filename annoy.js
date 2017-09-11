// var answer = prompt("Are we there yet?");

// while ( answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet?");
// }
// // alert("Yay we made it!");

// //check if string contains 'yes' or 'yeah'

// answer.indexOf("yes");
// answer.indexOf("yeah");

// Version 2:

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}
alert("we made it!!!");