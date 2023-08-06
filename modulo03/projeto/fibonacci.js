function calculeteFibonnaci(value = 15) {
    let fibonacci = [0, 1, 1];
    for(let i = 3; i < value; i++) 
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    return fibonacci;
}

function isFibonacci(value) {
    if(value == 0 || value == 1) return true;
    let fibonacci = [0, 1, 1];
    let i = 2;
    while(fibonacci[i] < value) { 
        i++;
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        if(fibonacci[i] == value) return true;
    }
    return false;
}

module.exports = {
    calculeteFibonnaci: calculeteFibonnaci,
    isFibonacci: isFibonacci
}