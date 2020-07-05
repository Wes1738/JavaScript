let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
    console.log("Clicou no Button!");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

//  -------------- OU ----------------------
btn2.addEventListener("click", function (EVENT) {
   console.log(EVENT);
});

p.addEventListener("click", function () {
    console.log("Clicou no Parágrafo");
})