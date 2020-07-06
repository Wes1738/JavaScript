window.addEventListener("keydown", function (e) {
   
    if (e.key == 'w') {
        console.log("Apertou a Tecla W");
    } else if (e.key == "Enter") {
        console.log("Apertou o Enter");
    }
});

window.addEventListener("keyup", function (ev) {
    
    if (ev.key == "Enter") {
        console.log("Soltou o Enter!");
    }
})