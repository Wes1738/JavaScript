// Troca de Lugar
let a = 'vermelho';
let b = 'azul';

let c = b;
b = a;
a = c;

console.log(a);
console.log(b);

// Criar função somar que retorna a 
// soma de todos os múltiplos de 3 e 5
// Multiplos de 3 : 3, 6, 9
// Múltiplos de 5: 5, 10

somar(10);

function somar(limite) {

    let multiplos3 = 0;
    let multiplos5 = 0;
    let soma = 0;

    for (let i = 0; i <= limite; i++) {
        
        if (i%3 === 0) {
            multiplos3 += i;
        }

        if (i%5 === 0) {
            multiplos5 += i;
        }

        soma = multiplos5 + multiplos3;
        
    }

    console.log(soma);
}

// Criar uma função para exibir os números primos dentro de um determinado limite

function exibirNumerosPrimos(limite) {

    for (let numero  = 2; numero <= limite; numero++) {
        
      let ehPrimo = true;

      for (let divisor = 2; divisor < numero; divisor++) {
          if (numero % divisor === 0) {
              ehPrimo = false;
              break;
          }
          
      }

      if (ehPrimo) console.log(numero);
        
    }
}

exibirNumerosPrimos(10);