/*Falta poner comentarios*/
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"]; //Este es un array
let correcta = [1,0,2,1,2,0,1]; //Son las respuestas correstas


let opciones = []; //Se crea un nuevo arreglo vacio

/*Aquí se guardan las opciones a mostrar en el array creado anteriormente, "opciones"*/
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

/** Se declaran variables */
let posActual = 0;
let cantidadAcertadas = 0;

/** Se inicia una función que indica el inicio del juego. Lee el valor de las variables actuales y pide del documento HTML dos elemtos mediante sus ID.
 * Luego inicia la siguiente función
*/
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

/** En esta función se muestra la imagen de "las maravillas del mundo" */
function cargarMaravilla(){
    if(maravillas.length <= posActual){ /** Lee la cantidad de elementos almacenados en el array y lo relaciona con la variable previamente definida que muestra la posición actual*/
        terminarJuego();                /** Dentro de este if, mientras la posición actual sea menor a la longitud del array el juego seguira corriendo */
    }
    else{
        limpiarOpciones();              /** En caso de que no se cumpla la condición el continuara a la función que limpia las opciones que se muestran */
                                        /** Una vez limpia se pasa a la siguiente maravilla del mundo */
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual]; /* Aquí lee la imagen que se esta mostrando mediante su ID y la cambia por una del array con la posición actual */
        document.getElementById("n0").innerHTML = opciones[posActual][0];             /** En estas otras tres lineas de código hace lo mismo que la anterior y cambia las opciones mostradas*/
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

/** Aquí limpia las opciones mostradas consiguiendo el ID y con .className regresa el valor contenida en la clase a su estado originan (Osea después de ponerse verde o rojo vuelve a gris)*/
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

/** Esta función recibe la opción escogida en un parametro y lo evalua si es la respuesta correcta o no*/
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;        /* Se suma una cifra más a la posición actual */
    setTimeout(cargarMaravilla,1000); /** Esta función sirve para ejecutar una función tras un periodo determinado */
}

/** En esta función se termina el juego */
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

/** Aquí sencillamente se limpia la pantalla y se regresa al inicio */
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none"; /** Se oculta el contenido, se limpia*/
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}