"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
const PessoaFisica_1 = require("./PessoaFisica");
const PessoaJuridica_1 = require("./PessoaJuridica");
class NotaFiscal {
    constructor(_numeroNotaFiscal) {
        this.pessoaF = new PessoaFisica_1.PessoaFisica(``, ``);
        this.pessoaJ = new PessoaJuridica_1.PessoaJuridica(``, ``);
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    setNumeroNotaFiscal(_numeroNotaFiscal) {
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    getNumeroNotaFiscal() {
        return this.numeroNotaFiscal;
    }
}
exports.NotaFiscal = NotaFiscal;
