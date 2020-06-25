class Conta {

    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(500);

conta.depositar(1000);

console.log(conta.saldo);

conta.sacar(400);

console.log(conta.saldo);
