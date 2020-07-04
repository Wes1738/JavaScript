let p = document.querySelector("#titulo-principal");

console.log(p.style);

p.style.backgroundColor = 'blue';
p.style.color = 'green';

setTimeout(function() {
    
p.style.backgroundColor = 'red';

}, 1500);