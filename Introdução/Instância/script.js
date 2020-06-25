function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.cor = cor;
    this.patas = patas;
    this.uivar = function () {
        console.log("Auuuuuu");
    }

}

let pastorAlemao = new Cachorro("Pastor Alemão", 4, "Cinza");

pastorAlemao.uivar();