let num = 10;

function numAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numAleatorio(num));
console.log(numAleatorio(52));
console.log(numAleatorio(17));