// Leer valores hasta que se introduzca un cero (0).
// El usuario puede introducir valores positivos y negativos.
//Encontrar el máximo de los elementos que se introdujeron.
//Analizar cómo cambia el programa para hallar el mínimo.
//Ingrese número: 9
//Ingrese número: 7
//Ingrese número: -1
//Ingrese número: 1
//Ingrese número: 0
//El máximo es: 9

import * as rls from "readline-sync";
let numMax: number;
let numMin: number;
let contTotal: number = 2;
let suma: number = 0;
let promedio: number = 0;

let n1: number = rls.questionFloat("Ingrese numero: ");

if (n1 !== 0) {

    suma = n1;
    let n2: number = rls.questionFloat ("Ingrese numero: ");

    if (n2 !== 0) {
        suma += n2;
        promedio = suma/2;

        if ( n1 > n2 ){
        numMax = n1;
        numMin = n2;
        }
        else {
        numMax = n2;
        numMin = n1;
        }

        let nn: number = 1;

        while ( nn !== 0 ) {
            nn = rls.questionFloat("Ingrese numero: ");

            if ( numMax < nn && nn !== 0) numMax = nn; //Determinacion del MAX
            if ( numMin > nn && nn !== 0) numMin = nn; //Determinacion del MIN
            if (nn !==0) {
                suma += nn;
                contTotal += 1;
                promedio = suma/contTotal;
            }

        }

        console.log(`${numMax} es el máximo. ${numMin} es el mínimo. ${promedio}es el promedio.`);

    }   else console.log(`${n1} es el máximo. ${n1} es el mínimo. ${n1}es el promedio.`);
}
