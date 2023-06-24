/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus  tres notas) de un alumno  (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información*/
import * as rls from "readline-sync"

let nota, suma, promedio, contador: number;
contador = 1;
suma=0;
while (contador<=10){ // si es menor igual a 10 el ciclo va a trabajar, una vez llegado a 10(valor de contador) + 1 osea "11" el ciclo termina porq es mayor a "10"
    nota= rls.questionInt("Ingrese su nota:");
    suma= suma + nota;
    contador= contador+1;
}
promedio = suma/10;
console.log("El promedio de las notas es:", promedio);