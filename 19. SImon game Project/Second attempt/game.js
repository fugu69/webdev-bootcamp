const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let gameOn = true;

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(500).fadeIn(500);
    playSound(randomChosenColour);
};

function playSound(name){
    let sound = new Audio(`./sounds/${name}.mp3`);
    sound.play();
};

$(".btn").on("click", function(event){
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1)
});

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed");
    }, 100)
};

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        };
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        strtOver();
    };
};

function strtOver(){
    level = 0;
    gamePattern = [];
    gameOn = true;
}

$(document).on("keypress", function(){
    if(gameOn){
        nextSequence();
        gameOn = false;
    };
});