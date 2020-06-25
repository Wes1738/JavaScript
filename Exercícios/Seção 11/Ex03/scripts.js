class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set alterarRua(rua) {
        this.rua = rua;
    }
    set mudarBairro(bairro) {
        this.bairro = bairro;
    }
    set mudarcidade(cidade) {
        this.cidade = cidade;
    }
    set mudarEstado(estado) {
        this.estado = estado;
    }

    get mostrarRua() {
        return this.rua;
    }
    get mostrarCidade() {
        return this.cidade;
    }
    get mostrarBairro() {
        return this.bairro;
    }
    get mostrarEstado() {
        return this.estado;
    }

}

let endereco = new Endereco("Rua C23", "Setor Genoveva", "Amaralina", "Goiás");

console.log(endereco.mostrarRua);
console.log(endereco.mostrarBairro);
console.log(endereco.mostrarCidade);
console.log(endereco.mostrarEstado);

// endereco.alterarRua("Avenida Prioridade"); Aqui está errado!
endereco.alterarRua = "Avenida Prioridade";
endereco.mudarcidade = "Aparecida de Goiânia";
endereco.mudarBairro = "Setor Pedro";
endereco.mudarEstado = "Paraíba";

console.log(endereco);