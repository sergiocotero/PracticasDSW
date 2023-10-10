var peso = prompt("Escribe tu peso");
var opcion = prompt("Esribe 1 para saber tu peso en Marte o 2 para saberlo en Jupiter");
var peso_tierra =  9.81;
var peso_marte = 3.711;
var peso_jupiter =24.79;
var resultado;

if(opcion==1){
    resultado=(peso / peso_tierra) * peso_marte
    alert("Su peso en Marte es de: "+ resultado +" kilos");
} else if(opcion==2){
    resultado=(peso/peso_tierra)* peso_jupiter
    alert("Su peso un Jupiter es de: "+ resultado +" kilos");
}else{
    alert("No existe esa opción");
}

switch(opcion){
    case 1:
        resultado=(peso / peso_tierra) * peso_marte
        alert("Su peso en Marte es de: "+ resultado +" kilos");
        break;
    case 2:
        resultado=(peso/peso_tierra)* peso_jupiter
        alert("Su peso un Jupiter es de: "+ resultado +" kilos");
        break;
    default:
        alert("No existe esa opción");
        break;
}