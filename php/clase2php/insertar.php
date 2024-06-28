<?php
echo "estoy probando la conexion";

//que pasa con las funciones con retorno....
$conexion = mysqli_connect("localhost","root","","pruebas24144");

if(mysqli_connect_errno()){

    echo "ERROR no se conecto: ". mysqli_connect_errno();

}else{
    echo "Se conecto BBDD Insertar...";
}

echo "<br>";


$usuario = "admin";
$edad = 19;



$id = 800;


if(isset($id) && $usuario=="admin" && $edad>=18){

    $nombre = "Carla";
    $apellido = "Tapia";

    echo "esta todo en true el usuario es administrador", $id;

    $insertarDatos =  "insert into pruebas(id,nombre,apellido,correo) values('$id','$nombre','$apellido','rompiendoBAseg@gmail.com')";

    mysqli_query($conexion,$insertarDatos);

}else{
    echo "no existe la variable y tampoco sos administrador....";
}










// for($i=300;$i<500;$i++){

//     echo "probando un ciclo", $i;

//     $insertarDatos =  "insert into pruebas(id,nombre,apellido,correo) values('$i','$nombre','$apellido','marcelog@gmail.com')";

//     mysqli_query($conexion,$insertarDatos);

// }







