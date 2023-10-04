var valores = [true, 10, false, "Codigo", "herramientas", 7];

var textoMayor = valores[3] > valores[4];

var resTrue = valores[0] != valores[2];
var resFalse = valores[0] == valores[2];

var x = parseFloat(valores[1])+parseFloat(valores[1]);
var y = parseFloat(valores[1])-parseFloat(valores[5]);
var z = parseFloat(valores[1])*parseFloat(valores[5]);
var w = parseFloat(valores[1])/parseFloat(valores[5]);
var e = parseFloat(valores[1]) ** parseFloat(valores[5]);

alert(textoMayor 
    +"\n" + resTrue
    +"\n" + resFalse    
    +"\n" +"Suma: " +x
    +"\n" +"Resta: " +y
    +"\n" +"Multiplicación: " +z
    +"\n" +"División: "+w
    +"\n" +"Exponenecial "+e);