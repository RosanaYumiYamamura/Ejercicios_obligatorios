/*Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario). (SIN funciones) 
Muestre cuantos números son positivos, cuantos son negativos y cuantos ceros hay.  
Ejemplo: 
v= 0, -7, -9, 1, 0, 0. 
La salida es: 1 positivos, 2 negativos y 3. */

import * as r from "readline-sync";
const dim: number = r.questionInt ("Dimension de N numeros: ");
let numsArr: number [] = new Array (dim);
for (let i: number = 0; i < numsArr.length; i++) {
    numsArr[i] = r.questionInt("Ingrese un numero: ");
}
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;
for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] > 0) {
    positivos++;
  } else if (numsArr[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}
console.log(`Positivos: ${positivos}, Negativos: ${negativos}, Ceros: ${ceros}`);