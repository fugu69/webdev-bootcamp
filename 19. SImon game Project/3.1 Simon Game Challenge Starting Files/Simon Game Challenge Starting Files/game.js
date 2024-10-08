<<<<<<< HEAD
let userClickedPattern = []

=======
>>>>>>> e30f933693f44eb8f9bcfcc3d8423ec75d4c19dc
let gamePattern = [];

const buttonColors = ["red", "blue", "green", "yellow"];

<<<<<<< HEAD
// Choose random color
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
=======
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 3);
>>>>>>> e30f933693f44eb8f9bcfcc3d8423ec75d4c19dc
    return randomNumber;
};

let randomChosenColour = buttonColors[nextSequence()];
gamePattern.push(randomChosenColour);

<<<<<<< HEAD
// Blinking button
=======
>>>>>>> e30f933693f44eb8f9bcfcc3d8423ec75d4c19dc
function blink_text() {
    $(`#${randomChosenColour}`).fadeOut(500);
    $(`#${randomChosenColour}`).fadeIn(500);
};
setInterval(blink_text, 2000);

<<<<<<< HEAD

// Creates user clicks pattern and plays according music
$(document).on("click", function(event){
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(`${event.target.classList}`)
});

// Plays music based on the choosen color
function playSound(name){
    let sound = new Audio(`./sounds/${name}.mp3`);
    sound.play();
};

function animatePress(currentColour){
    $(`${currentColour}`).addClass("pressed").delay(100).removeClass("pressed")
};
=======
$(`#${randomChosenColour}`).on("click", function(){
    let sound = new Audio(`./sounds/${randomChosenColour}.mp3`);
    sound.play();
});
>>>>>>> e30f933693f44eb8f9bcfcc3d8423ec75d4c19dc
