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

// Adicionar Elementos no Array
const numeros = [1, 2, 3, 4, 5, 6, 7];
numeros.push(8); //Insere no Final
console.log(numeros);
numeros.splice(3, 0, 17); //Insere no Meio
console.log(numeros);
numeros.unshift(38); //Insere no Ínicio
console.log(numeros);


// Remover Elementos no Array
numeros.pop(); // Remove o último elemento
console.log(numeros);
numeros.shift(); // Remove o Primeiro elemento
console.log(numeros);
numeros.splice(3, 1); //Remove do meio do Array
console.log(numeros);

// Esvaziar um Array
const letras = ['a', 'c', 'd', 'm', 'w','h'];
console.log(letras);
// letras.length = 0;
// console.log(letras);
// OU........
letras.splice(0, letras.length);
console.log(letras);

// Combinando e Cortando Arrays
const primeiro = [1, 2, 3, 4];
const segundo = [4, 5, 6, 7];

const combinado = primeiro.concat(segundo);
console.log(combinado);
// Dividindo o array
const cortado = combinado.slice(1, 3);
console.log(cortado);

// Usando o método Join
const frase = "Olá seja bem vindo ao meu GitHub";
const fraseSlug = frase.split(' ');
console.log(fraseSlug);
console.log(fraseSlug.join('-'));
