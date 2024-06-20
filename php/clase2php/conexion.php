<?php

//conexion... funciones..

//funcion de conexion con retorno...

/*
..................................................Estatica
1-Lugar donde esta alojado mi BBDD->"localhost"->192.254.236.10
2-"root"---asdfasdf_admin
3-""-------134565@admin
4-"ventahelados" pasar el nombre de la BBDD..NO DE LA TABLA


*/


echo "estoy probando la conexion";

//que pasa con las funciones con retorno....
$conexion = mysqli_connect("localhost","root","","ventahelados");

if(mysqli_connect_errno()){

    echo "ERROR no se conecto: ". mysqli_connect_errno();

}else{
    echo "Se conecto de manera correcta mas facil que...";
}


$consultas = mysqli_query($conexion,"select * from usuarios");

var_dump($consultas);



?>