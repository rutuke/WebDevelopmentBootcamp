var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", function(){
    // if white make it purple
    // else make it white
    if(isPurple){
        body.style.background = "white";
    } else {
        body.style.background = "purple";
        }
    isPurple =! isPurple;
});
// can do "document.body"

// classList = toggle!

// toggle a class
button.addEventListener("click", function(){
    body.classList.toggle("purple");
});

// turns the class on and off!