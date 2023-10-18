/* Con un for muestre el mensaje “Hola” siete veces, en el 4to hola debe mostrar el mensaje “soy el 4to” y después del 7mo hola el mensaje “Acabamos de saludar”.*/
for(var i=1; i <= 7; i++)
{
    if(i===4){
        console.log("Soy el 4to");
    }if(i===7){
        console.log("Acabo de saludar 7 veces");
    }else{
    console.log("Hola");
    }
}

/* Investigar for in, forEach, for of. Realice un ejemplo con cada uno de los for con un arreglo que contenga los primeros 11 meses del año. */
console.log("----------------");
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
for(let prop in meses)
{
console.log(prop +"="+ meses[prop]);
}


meses.forEach((element) => {
    console.log(element);
})


for(let vector of meses)
{
    console.log(vector);
}

/* Utilizando el arreglo anterior utilizar el for de su preferencia y hacer que omita el mes de Julio, con el mismo ejemplo
agregar diciembre pero fuera del arreglo y mostrar todos los meses por medio de un ciclo for incluido diciembre. */
console.log("----------------");
meses.forEach(element => {
    if(element === "Julio"){
        element = " ";
    }if(element){
        console.log(element)
    }if(element === "Noviembre"){
        console.log("Diciembre")
    }
})

