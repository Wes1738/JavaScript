const calculadora = {

    somar: function (h, y) {
        return h + y;
    },

    subtrair: function (x, y) {
        return x - y;
    },

    multiplicar: function (x, y) {
        return x * y;
    },

    dividir: function (x, y) {
        
        if (y == 0) {
            console.log("Não existe divisão por 0");
        } else {
            return x/y;
        }
    }
};

console.log(calculadora.somar(2, 6));
console.log(calculadora.subtrair(22, 8));
console.log(calculadora.multiplicar(6, 6));
console.log(calculadora.dividir(10, 0));
console.log(calculadora.dividir(10, 5));