let novoElemento = document.createElement("p");
let texto = document.createTextNode("Texto adicional aqui");

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
