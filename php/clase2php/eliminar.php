<?php
echo "estoy eliminar";

//que pasa con las funciones con retorno....
$conexion = mysqli_connect("localhost","root","","pruebas24144");

if(mysqli_connect_errno()){

    echo "ERROR no se conecto: ". mysqli_connect_errno();

}else{
    echo "Se conecto BBDD Insertar...";
}

echo "<br>";


/*
de donde viene el ID?

-tabla donde figuren los datos:

Como vienen los datos de esa tabla:

-

Tabla
id....nombre....apellido....correo
1.....juan......perez.......juan@gmail.com...(boton)

*/





$id= $_GET['id'];


//video... delete from
$eliminar =  "DELETE FROM pruebas WHERE id='$id'";



$eliminarQuery = mysqli_query($conexion,$eliminar);

var_dump($eliminarQuery);

echo "<br>";

echo "<br>";

if(!$eliminarQuery){

    echo "ha ocurrido un ERROR: ";


}else{

    echo "No ha ocurrido un Error";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h2>Tengo un elemento oculto...</h2>




<a href="eliminar2.php?id=482"><img src="eliminar.php" alt=""></a>


    
</body>
</html>






