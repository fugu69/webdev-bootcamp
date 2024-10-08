function fibonacciGenerator(n) {

    let valuesList = [0, 1]
    
    for (let i = 0; i < n; i++){
        let currentValue = valuesList[i] + valuesList[i+1];
        valuesList.push(currentValue)
    }

    console.log(valuesList)
}