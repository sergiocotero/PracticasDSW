var miArray = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

console.log(miArray); //Muestro mi array

miArray.pop(); // Elimina el último dato de mi arreglo
console.log(miArray);

miArray.shift(); // Elimina el primer elemento de mi arreglo
console.log(miArray);

miArray.push("Sábado"); // Agrego, al final del arreglo, el dato Sábado
console.log(miArray);

miArray.unshift("Domingo"); // Agrego, al principio, el día Domingo
console.log(miArray);  


/*Utilice while para sumar los números del 1 al 5. (deberá obtener como resultado 15).*/

var a = 1;
var total = 0;
while(a <= 5)
{
    total += a;
    a += 1;
    console.log(total);
}

/* - Con do while, obtenga el factorial del número 5. (obtener como resultado 120). */

var res = 1;
var b = 1;
do
{
    res = res * b;
    b++;
} while(b <= 5)
console.log("El factorial de 5 es " + res);