//• Realice un programa que devuelva la potencia de un número.
//• La base y el exponente deben ser ingresados por teclado. 
//• Sólo deben admitirse exponentes mayores o iguales a cero.
//• Recuerde que el resultado de un número elevado a 0 es 1. 
//• Separe la lógica de calcular la potencia utilizando métodos. 
//Función que calcula la potencia de una base (b) elevado al exponente (e)

import * as rls from "readline-sync";
function calcularPotencia(b:number, e:number): number {
    let i: number;
    let calculoParcial: number = 1;
    if (e == 0) {
        return 1;
    } else {
        for (i = 1; i <= e; i++) {
            calculoParcial = (calculoParcial * b);
        }
        return calculoParcial;
    }
}

let base : number = rls.questionInt("Ingrese Base: ");
let exponente : number = rls.questionInt("Ingrese Exponente: ");

if (exponente >= 0) {
    console.log("El resultado es:",calcularPotencia(base,exponente));
} else {
    console.log("El exponente",exponente, "no está admitido");
}
