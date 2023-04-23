/*Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario). (CON funciones) 
Muestre cuantos números son positivos, cuantos son negativos y cuantos ceros hay.  
Ejemplo: 
v= 0, -7, -9, 1, 0, 0. 
La salida es: 1 positivos, 2 negativos y 3. */

import * as r from "readline-sync";

const dim: number = r.questionInt("Dimension de N numeros: ");
let numsArr: number[] = new Array(dim);

for (let i: number = 0; i < numsArr.length; i++) {
  numsArr[i] = r.questionInt("Ingrese un numero: ");
}

function countPosNegZero(arr: number[]): {pos: number, neg: number, zero: number} {
  let pos: number = 0;
  let neg: number = 0;
  let zero: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  return {pos, neg, zero};
}

const count = countPosNegZero(numsArr);
console.log(`positivos:${count.pos}, negativos:${count.neg} y ceros:${count.zero}`);

