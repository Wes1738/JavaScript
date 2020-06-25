class ContaBancaria {
    
    constructor(saldoPoupanca, saldoCorrente, jurosPoupanca) {
        this.saldoPoupanca = saldoPoupanca;
        this.saldoCorrente = saldoCorrente;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositar(valor) {
        this.saldoCorrente += valor;
    }

    sacar(valor) {
        this.saldoCorrente -= valor;
    }

    transferenciaPoupanca(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }

    transferenciaCorrente(valor) {
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor; 
    }

    jurosDeAniversario() {
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends ContaBancaria {

    constructor(saldoPoupanca, saldoCorrente, jurosPoupanca) {
        super(saldoPoupanca, saldoCorrente, jurosPoupanca * 2);
    }

}

let conta = new ContaBancaria(1000, 500, 1);

conta.depositar(2000);
console.log(conta);

conta.sacar(1000);
console.log(conta);

conta.transferenciaPoupanca(1000);
console.log(conta);

conta.jurosDeAniversario();
console.log(conta);

let conta2 = new ContaEspecial(3000, 5500, 2);
console.log(conta2);

conta2.depositar(6500);
console.log(conta2);

conta2.sacar(100);
console.log(conta2);

conta2.jurosDeAniversario();
console.log(conta2);

