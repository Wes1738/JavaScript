// Verificações no programa, que são utilizadas para assegurar que
// tudo ocorra da forma esperada;
let arr = [2, 3, 6, 5];
let arr2 = [];

function iterarArray(arr) {
    if (arr.length == 0) {
        throw new Error("O Array precisa ter pelo menos 1 elemento");
    } else {
        arr.forEach(i => {
            console.log(i);
        });
    }
}

iterarArray(arr);
iterarArray(arr2);