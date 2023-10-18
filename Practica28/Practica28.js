var num = prompt("Escribe un número");


parImpar(num);

function parImpar (numero)
{
    if(numero % 2){
        alert("El número es de tipo IMPAR");
    }else{
        alert("El número es de tipo PAR");
    }
}


var clima = prompt("¿Hay un huracan, si o no?");
    var verdadero = (clima == "si");
AvisoHuracan(verdadero);
function AvisoHuracan(hayUnHuracan)
{
    if(hayUnHuracan === true){
        alert("Hay un Huracan");
    }else{
        alert("Esta soleado");
    }
}


function OperacionesMatematicas(opcion, a, b) {
    switch (opcion) {
        case 1:
            var res = (a + b);
            return res;
        case 2:
            var res = (a - b);
            return res;
        case 3:
            var res = (a * b);
            return res;
        case 4:
            if (b !== 0) {
                var res = (a / b);
                return res;
            } else {
                return "Error: División por cero";
            }
        case 5:
            if (b !== 0) {
                var res = (a % b);
                return res;
            } else {
                return "Error: División por cero";
            }
        default:
            return 0;
    }
}

const operacion = prompt("Escribe la operación\n 1-Sumar\n 2-Restar\n 3-Multiplicar\n 4-Dividir\n 5-Residuo");
opcion = parseInt(operacion);
const a = parseFloat(prompt("Escribe el valor del primer número"));
const b = parseFloat(prompt("Escribe el valor del segundo número"));

const resultado = OperacionesMatematicas(opcion, a, b);

alert("El resultado de es: "+ resultado);
