<?php

    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "formulario"; //Nombre de la base de datos

    $conexion = mysqli_connect ($servidor, $usuario, $clave, $bd);

?>

<!---------------------------------------------------------------------------->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../estilos/formulario.css">
    <link rel="stylesheet" href="../estilos/estilos.css">
    <title>Formulario</title>

</head>
<body>
    <nav>
        <ul>
            <li><a href="../Inicio.html">Inicio</a></li>
            <li><a href="../Inicio.html#Historia">Historia</a></li>
            <li><a href="../Inicio.html#Lugares">Lugares turísticos</a></li>
            <li><a href="../Inicio.html#Platillos">Platillos típicos</a></li>
            <li><a href="../Inicio.html#Contacto">Contacto</a></li>
        </ul>
    </nav>

<div id="formularioDiv">
    <form id="registroForm" onsubmit="return validarFormulario()" action="" method="post">
        <table>
            <tr>
                <th>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required autofocus pattern="[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+">
                </th>
            </tr>
            <tr>
                <th>
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required pattern="[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+">
                </th>
            </tr>
            <tr>
                <th>            
                    <label for="edad">Edad:</label>
                    <input type="number" id="edad" name="edad">
                </th>
            </tr>
            <tr>
                <th>
                    <label for="sexo">Sexo:</label>
                    <select id="sexo" name="sexo" required>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <label for="ciudad">Ciudad:</label>
                    <select id="ciudad" name="ciudad" required>
                    <option value="opcion1">Vientián</option>
                    <option value="opcion2">Luang Prabang</option>
                    <option value="opcion3">Vang Vieng</option>
                    <option value="opcion4">Nong Kiau</option>
                    <option value="opcion5">Muang Ngoi</option>
                    <option value="opcion6">Huay Xai</option>
                    <option value="opcion7">Savannakhet</option>
                    <option value="opcion8">Phonsavan</option>
                    <option value="opcion9">Ngoi</option>
                    <option value="opcion10">Pakse</option>
        </select>
                </th>
            </tr>
            <tr>
                <th>
                    <label for="celular">Celular:</label>
                    <input type="tel" id="celular" name="celular" required pattern="[0-9]+">
                </th>
            </tr>
            <tr>
                <th>
                    <label for="transporte">Transporte:</label>
                    <select id="transporte" name="transporte" required>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <label for="camisa">Camisa:</label>
                    <select id="camisa" name="camisa" onchange="mostrarTalla()">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <div id="tallaDiv" style="display: none">
                        <label for="talla">Talla:</label>
                        <select id="talla" name="talla">
                            <option value="ninguna">Ninguna</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                <th>
            </tr>
            <tr>
                <th>
                    <label for="comentarios">Comentarios:</label>
                    <textarea id="comentarios" name="comentarios" rows="4"></textarea>
                </th>
            </tr>
        </table>

        <input id="enviar" type="submit" name="Registrar">
    </form>
</div>
    <!--<video src="https://youtu.be/2FbsNZp0eVg">LAOS | Cinematic Travel Video</video>-->
<footer>
    <p>&copy; 2023 Información sobre Laos</p>
</footer>

<script>
    function validarFormulario() {
        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var edad = document.getElementById('edad').value;
        var celular = document.getElementById('celular').value.trim();
        var camisa = document.getElementById('camisa').value;

        // Validar que los campos no estén vacíos
        if (nombre === '' || apellido === '' || edad === '' || celular === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return false;
        }

        // Validar que la edad sea un número válido
        if (isNaN(edad) || edad < 18 || edad > 60) {
            alert('Ingrese una edad válida entre 18 y 60 años.');
            return false;
        }

        // Validar que el número de celular sea un número válido
        if (isNaN(celular)) {
            alert('Ingrese un número de celular válido.');
            return false;
        }

        // Si selecciona camisa = sí, mostrar el campo de talla
        if (camisa === 'si') {
            var talla = document.getElementById('talla').value;
            if (talla === 'ninguna') {
                alert('Seleccione una talla para la camisa.');
                return false;
            }
        }
    }

    function mostrarTalla() {
        var camisaSeleccionada = document.getElementById('camisa').value;
        var tallaDiv = document.getElementById('tallaDiv');

        if (camisaSeleccionada === 'si') {
            tallaDiv.style.display = 'block';
        } else {
            tallaDiv.style.display = 'none';
        }
    }
</script>

</body>
</html>

<!---------------------------------------------------------------------------->
<?php
if(isset($_POST['Registrar'])){
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $edad=$_POST['edad'];
    $sexo=$_POST['sexo'];
    $ciudad=$_POST['ciudad'];
    $celular=$_POST['celular'];
    $transporte=$_POST['transporte'];
    $camisa=$_POST['camisa'];
    $talla=$_POST['talla'];
    $comentarios=$_POST['comentarios'];

    $guardar = "INSERT INTO registro VALUES ('', '$nombre', '$apellido', '$edad', '$sexo', '$ciudad', '$celular',
                                              '$transporte', '$camisa', '$talla', '$comentarios')";

    $ejecutar = mysqli_query ($conexion, $guardar);

    header("Location: ../Inicio.html");

	exit;
}
?>