

// Loop through each element and add a click event listener
<<<<<<< HEAD
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("click");
    });
}
=======
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         const buttonInnerHTML = this.innerHTML;
//         makeSound(buttonInnerHTML)
//         buttonAnimation(buttonInnerHTML)
//     });
// };

$(".drum").click(function(){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML) 
})


// document.addEventListener("keypress", function(event){
//     // console.log(event.type, event.key)
//     makeSound(event.key)
//     buttonAnimation(event.key)
// });

$(document).keypress(function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch(key){
        case("w"):
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case("a"):
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case("s"):
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case("d"):
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case("j"):
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case("k"):
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case("l"):
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(key)
    }
};

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
};
>>>>>>> e30f933693f44eb8f9bcfcc3d8423ec75d4c19dc
