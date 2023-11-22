/*function verificar(){
    var comprobar = (document.getElementById("id").focus());
    if(comprobar === "")
    {
        imprimir();
    }else
    {
        alert("Falta rellenar un input");
    }
}*/

/*function verificar() {
    var campos = document.getElementsByTagName("input");
    for (var i = 0; i < campos.length; i++) {
      if (campos[i].value == "") {
        alert("El campo " + campos[i].name + " está vacío");
      }
    }
    imprimir();
  }*/
  function verificar() {
    var espanol = document.getElementById("espanol");
    var biologia = document.getElementById("biologia");
    var sitiosWeb = document.getElementById("sitiosWeb");
    var programacion = document.getElementById("programacion");
    var equipo = document.getElementById("equipo");
    var baseDatos = document.getElementById("baseDatos");
    var ciberseguridad = document.getElementById("ciberseguridad");
    var extraccion = document.getElementById("extraccion");
  
    if (espanol.value == "") {
      alert("Falta rellenar calificación para Español");
      nombre.focus();
      return false;
    }
    if (biologia.value == "") {
      alert("Falta rellenar calificación para Biologia");
      apellido.focus();
      return false;
    }
    if (sitiosWeb.value == "") {
      alert("Falta rellenar calificación para Diseño de Sitios Web");
      email.focus();
      return false;
    }
    if (programacion.value == "") {
      alert("Falta rellenar calificación para Programacion");
      telefono.focus();
      return false;
    }
    if (equipo.value == "") {
      alert("Falta rellenar calificación para Administración de equipo");
      direccion.focus();
      return false;
    }
    if (baseDatos.value == "") {
      alert("Falta rellenar calificación para Base de Datos");
      ciudad.focus();
      return false;
    }
    if (ciberseguridad.value == "") {
      alert("Falta rellenar calificación para Ciberseguridad");
      estado.focus();
      return false;
    }
    if (extraccion.value == "") {
      alert("Falta rellenar calificación para Extracción de Datos");
      codigoPostal.focus();
      return false;
    }
  
    imprimir();
  }
function imprimir(){
    
    var m1 = parseFloat(document.getElementById("espanol").value);
    var m2 = parseFloat(document.getElementById("biologia").value);
    var m3 = parseFloat(document.getElementById("programacion").value);
    var m4 = parseFloat(document.getElementById("baseDatos").value);
    var m5 = parseFloat(document.getElementById("sitiosWeb").value);
    var m6 = parseFloat(document.getElementById("equipo").value);
    var m7 = parseFloat(document.getElementById("ciberseguridad").value);
    var m8 = parseFloat(document.getElementById("extraccion").value);
    var promedio = (m1+m2+m3+m4+m5+m6+m7+m8)/8

    if(promedio >= 85){
        alert( 
            "Español: " + m1 + "\n"+
            "Biologia: " + m1 + "\n"+
            "Diseño de Sitios Web: " + m1 + "\n"+
            "Programación: " + m1 + "\n"+
            "Base de Datos: " + m1 + "\n"+
            "Administración de equipo: " + m1 + "\n"+
            "Ciberseguridad: " + m1 + "\n"+
            "Extracción de Datos: " + m1 + "\n"
            +promedio+"\n ¡Lo lograste! Detente aquí para tomar un descanso, guerrero");
    }else{
        alert("Has decepcionado a toda tu generación, que los Dioses se apiaden de tí");
    }
}