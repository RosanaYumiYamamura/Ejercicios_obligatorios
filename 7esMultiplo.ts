
//• Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique cómo parámetro es múltiplo del segundo.
//• Recuerde que un número es múltiplo de otro si al dividirlo su resto es cero.
//• Recuerde que la operación mod permite saber si el resto de una división es cero.
//Función que verifica si un número (dividendo) es múltiplo de otro (divisor)

import * as rls from "readline-sync";
function esMultiplo(dividendo:number, divisor:number): boolean {
    return ((dividendo % divisor) == 0);
}
let numero1 : number = rls.questionInt("Ingrese un Numero: ");
let numero2 : number = rls.questionInt("Ingrese otro Numero: ");
if (esMultiplo(numero1, numero2)) {
    console.log("El Numero",numero1, "ES multiplo de",numero2);
} else {
    console.log("El Numero",numero1, "NO es multiplo de",numero2);
}