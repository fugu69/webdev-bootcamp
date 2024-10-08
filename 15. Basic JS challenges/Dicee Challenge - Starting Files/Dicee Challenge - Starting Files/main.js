let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

let winner = document.querySelector("h1")

if (randomNumber1 > randomNumber2){
    winner.textContent = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2){
    winner.textContent = "Player 2 wins!"
} else {
    winner.textContent = "Draw!"
}