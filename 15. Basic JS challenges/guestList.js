let guestlist = ["dima", "alyona", "lera"];
let name = prompt("Enter your name").toLowerCase();
if (guestlist.includes(name)){
    alert("Welcome to the party!")
}
else{
    alert("Sorry, maybe next time.")
}