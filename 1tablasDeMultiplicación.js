"use strict";
//Algoritmo que muestre la tabla de multiplicación del "x"# y hasta que # ingresado por el usuario//
//Ingrese el número que quiere multiplicar: 9------Ingrese hasta qué número quiere multiplicar: 4///
//aplicar en terminal: npm i --save-dev @types/jquery
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var no1 = rls.questionInt("Ingrese el número que quiere multiplicar: ");
var no2 = rls.questionInt("Ingrese hasta qué número quiere multiplicar: ");
for (var i = 1; i <= no2; i++) {
    var result = no1 * i;
    console.log("".concat(no1, " x ").concat(i, " = ").concat(result));
}
