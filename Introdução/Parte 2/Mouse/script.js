let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function () {
    console.log("Clicou no Botão 01");
});

btn1.addEventListener("mouseup", function () {
    console.log("Soltou o Botão 01");
});

btn2.addEventListener("dblclick", function () {
    console.log("Clicou duas vezes!!");
});

btn2.addEventListener("contextmenu", function (ev) {

    ev.preventDefault();
    console.log("Botão Direito foi acionado!");
});
