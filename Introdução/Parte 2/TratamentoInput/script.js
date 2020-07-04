function checarNumero(valor) {
    
    let resultado = Number(valor);

    if(Number.isNaN(resultado)) {
        // Por favor, informe um Número
        return null;
    } else {
        return resultado;
    }
}

console.log(checarNumero(17));
console.log(checarNumero('Brasil'));
console.log(checarNumero(38));
