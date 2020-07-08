let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (erro, texto) => {

    if (erro) {
        throw erro;
    } else {
        console.log(texto);
    }

});

writeFile("arquivo.txt", "Texto escrito por writeFile", (error) => {

    if (error) {
        throw error;
    } else {
        console.log("Escreveu com Sucesso!");
    }

});