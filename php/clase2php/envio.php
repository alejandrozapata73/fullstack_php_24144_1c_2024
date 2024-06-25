<?php


echo "estoy probando la conexion";

//que pasa con las funciones con retorno....
$conexion = mysqli_connect("localhost","root","","pruebas24144");

if(mysqli_connect_errno()){

    echo "ERROR no se conecto: ". mysqli_connect_errno();

}else{
    echo "Se conecto de manera correcta mas facil que...";
}

echo "<br>";

$consultas = mysqli_query($conexion,"select * from pruebas");

var_dump($consultas);

echo "<br>";
echo "<hr>";
// $listado = mysqli_fetch_assoc($consultas);

// var_dump($listado);

// echo "<br>";
// echo "<hr>";

// echo $listado['nombre'], " ";
// echo $listado['correo'];


//.... segunda parte...

// $listado = mysqli_fetch_array($consultas);

echo "<pre>";
// var_dump($listado);
echo "</pre>";

//recorrerlos de punta a punta

while($listado = mysqli_fetch_array($consultas)){

        echo $listado['id']," ", $listado['nombre'], " " , $listado['apellido'], "<br>";


}

//para el jueves....
