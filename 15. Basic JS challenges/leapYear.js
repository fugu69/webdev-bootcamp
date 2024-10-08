let year = prompt("Enter an year");
function isLeapYear(year){
    if (year%4 == 0 && year%100 != 0){
        alert("Leap year")
    }
    else if(year%100 == 0 && year%400 == 0){
        alert("Leap year")
    }
    else{
        alert("Not a leap year")
    }
}

isLeapYear(year);