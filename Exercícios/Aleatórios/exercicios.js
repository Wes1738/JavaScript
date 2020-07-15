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

// Criar um Objeto endereço

let endereco = {
    rua: 'AV Guanabara',
    cidade: 'Alto Horizonte',
    CEP: '74540-190',
}

function exibirendereco (endereco) {
    for (const chave in endereco) {
        
        console.log(chave, endereco[chave]);
    }
}

exibirendereco(endereco);

// Criar um mini-blog

let postagem = {
    titulo: 'Lorem Ipsum',
    mensagem: 'Lorem Ipsum is a Dolor Pregnate',
    autor: 'Veneci Iandini',
    visualizacoes: '3456',
    comentarios: [
        { autor: 'dbc', mensagem: 'fhfsbbegjdbs'},
        { autor: 'PLM', mensagem: 'ikjhfbfbbfgfgfdda'}
    ],
    estaAoVivo: true
}

console.log(postagem);