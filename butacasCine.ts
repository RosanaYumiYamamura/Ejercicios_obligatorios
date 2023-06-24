/*Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada*/
import * as rls from "readline-sync"


function butacasDelCineA(numButacas: number): boolean[] {
    const arregloButacas: boolean[] = [];
    for (let i = 0; i < numButacas; i++) {
        const ocupada = Math.random() < 0.5; 
        arregloButacas [i] = (ocupada);
    }
    return arregloButacas;
}

function contarButacasDesocupadas(arregloButacas: boolean[]): number {
    let contadorDesocupadas = 0;
    for (const butaca of arregloButacas) {
        if (!butaca) {
            contadorDesocupadas++;
        }
    }
    return contadorDesocupadas;
}
let numButacas:number = rls.questionInt("Ingrese la cantidad de butacas: ");

const arregloButacas = butacasDelCineA(numButacas);
console.log("Estado de las butacas:", arregloButacas);
const butacasDesocupadas = contarButacasDesocupadas(arregloButacas);
console.log("El número de butacas desocupadas es:", butacasDesocupadas);
const butacasOcupadas = contarButacasDesocupadas (arregloButacas);
console.log("El número de butacas ocupadas es:", numButacas - butacasDesocupadas);