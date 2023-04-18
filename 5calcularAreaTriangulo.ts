//Realice un programa que devuelva el área del triángulo usando los siguientes pares de base-altura: • (1,2)(2,4)(3,6)(4,8)(5,10)(6,12)(7,14)
//Implemente un método llamado calcularAreaTriangulo que reciba  dos números por parámetro (uno llamado base y otro altura).

function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2;
}

let paresBaseAltura = [[1,2], [2,4], [3,6], [4,8], [5,10], [6,12], [7,14]];

for (let i = 0; i < paresBaseAltura.length; i++) {
    let base = paresBaseAltura[i][0];
    let altura = paresBaseAltura[i][1];
    let area = calcularAreaTriangulo(base, altura);
    console.log(`El área del triángulo con base ${base} y altura ${altura} es= ${area}`);
}