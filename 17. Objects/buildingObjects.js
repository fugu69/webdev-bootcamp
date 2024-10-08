// Regular object
let bellBoy = {
    name: "Billy",
    hasWorkPermit: true,
    speakLanguages: ["English", "French"],
}

// Constructor function
function BellBoy (name, permit, languages){
    this.firstName = name,
    this.hasWorkPermit = permit,
    this.speakLanguages = languages
    this.moveSuitCase = function(){
        alert("The suitcase was moved!")
    }
}

let timmyBellBoy = new BellBoy("Timmy", true, ["English", "Spanish"])
console.log(timmyBellBoy.firstName)