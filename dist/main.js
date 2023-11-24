"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotaFiscal_1 = require("./model/NotaFiscal");
const notaF1 = new NotaFiscal_1.NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`Helliot Miranda`);
notaF1.pessoaF.setCpf(`475275178-08`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal número: ${notaF1.getNumeroNotaFiscal()}`);
const notaF2v = new NotaFiscal_1.NotaFiscal(`547frfr5-22`);
notaF1.pessoaF.setNome(`Renata Silva`);
notaF1.pessoaF.setCpf(`319367528-83`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal número: ${notaF2v.getNumeroNotaFiscal()}`);
//# sourceMappingURL=main.js.map