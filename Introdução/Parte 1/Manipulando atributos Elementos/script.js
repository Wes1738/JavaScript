let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.informaticaemacao.com.br';

a.setAttribute('href', link);
console.log(a.getAttribute('href'));
