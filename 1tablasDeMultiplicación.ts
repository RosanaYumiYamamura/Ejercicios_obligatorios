//Algoritmo que muestre la tabla de multiplicación del "x"# y hasta que # ingresado por el usuario//
//Ingrese el número que quiere multiplicar: 9------Ingrese hasta qué número quiere multiplicar: 4///
//aplicar en terminal: npm i --save-dev @types/jquery

import * as rls from "readline-sync";

let no1 : number = rls.questionInt("Ingrese el número que quiere multiplicar: ");
let no2 : number = rls.questionInt("Ingrese hasta qué número quiere multiplicar: ");

for (let i:number = 1; i <= no2; i++){
    let result: number = no1*i;
    console.log(`${no1} x ${i} = ${result}`);
}