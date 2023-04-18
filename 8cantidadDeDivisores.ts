//• Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores. 
//• Por ejemplo, para el número 16, sus divisores son 1, 2, 4 y 8, 16, por lo que la respuesta debería ser 5.
// • Re-utilice el método esMultiplo implementado para el ejercicio anterior.
//Función que verifica si un número (dividendo) es múltiplo de otro (divisor)

import * as rls from "readline-sync";
function esMultiplo(dividendo:number, divisor:number) : boolean {
    return ((dividendo % divisor) == 0);
}

//Función que determina la cantidad de divisores que tiene un número (nro)
function cantidadDeDivisores(nro: number) : number {
    let i: number;
    let cantidad: number = 0;

    for (i = 1; i <= nro; i++) {
        if (esMultiplo(nro,i)) {
            cantidad = cantidad + 1;
        }
    }
return cantidad;
}

let numero : number = rls.questionInt("Ingrese un Numero: ");
console.log("La cantidad de divisores del Numero",numero, "es",cantidadDeDivisores(numero));