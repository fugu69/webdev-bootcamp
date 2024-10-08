let output = []
let initialValue = 1;

function fizzbuzz() {

    let newValue;

    if (initialValue%3 == 0 && initialValue%5 == 0){
        output.push("FizzBuzz");
    } else if (initialValue%3 == 0 && initialValue%5 != 0){
        output.push("Fizz");
    } else if (initialValue%3 != 0 && initialValue%5 == 0){
        output.push("Buzz");
    } else {
        output.push(initialValue);
    }
    
    initialValue ++
    console.log(output)
}
