<?php

echo "hola soy los datos enviados mediante el form (get)";

//variables de entorno...
var_dump($_POST);

echo "<hr>";

echo "El usuario es: ".  $_POST['nombre'];
echo "el apellido es: " . $_POST['apellido'];
echo "el password es: " . $_POST['password'];
echo "cantidad Cards: " . $_POST['cantidadCards'];

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$apellido = $_POST['apellido']; 
$tipo_usser = $_POST['tiposuario'];
$descripcion = $_POST['descripcion'];
$cantidadCards = $_POST['cantidadCards'];

// si el usuario es admin.. que me muestre la card pertinente, y si no que me muestre un mensaje de alerta

echo "<br>";





?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <div class="container">

    <div class="card" style="width: 18rem;">
  <img src="https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x00ffffff-no-rj" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> <?php echo $nombre ?></h5>
    <p class="card-text"> <?php echo $descripcion ?></p>
    <a href="index.php" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>


<?php

    if($nombre=="alejandro" && $edad>=18 && $tipo_usser=="premium"){

    echo "Soy el admin"; ?>


    
     <div class="card" style="width: 18rem;">
      <img src="https://yt3.googleusercontent.com/  vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x0  0ffffff-no-rj" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> <?php echo $nombre ?></h5>
        <p class="card-text"> <?php echo $descripcion ?></p>
        <a href="index.php" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
   

<?php

    }else{
      
      echo "no sos usuario administrador";
      ?>;

      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <?php

    }

?>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>



<?php

//
// if($nombre=="alejandro"){


// }elseif($nombre=="jeremias"){

// }else{


// }

//

// switch($opcionCajero){

//   case "1":
//     echo "usuario Admin";
//     break;
//   case "2":
//     echo "usuario comun";
//     break;
//   case "3":  
//     echo "usuario platino";
//     break;

//   default:
//     echo "El usuario es default";
//     break;

// }



// $contador = 0;


// while($contador<5){



// echo "esta girando..";


// //$contador++;


// }



//........0 <  4.............
for($i=0;$i<$cantidadCards;$i++){

  echo "probando ciclo for";
?>

     <div class="card" style="width: 18rem;">
      <img src="https://img.freepik.com/foto-gratis/mano-usando-computadora-portatil-pantalla-virtual-documento-aprobar-linea-concepto-gestion-erp-garantia-calidad-papel_616485-61.jpg?t=st=1717685991~exp=1717689591~hmac=cc8ecd5a808621cf27cdf2064f72334d9d9e708c5d5d9a5d9f8dba0a5bb03c8d&w=1380" class="card-img-top" alt="...">
      <div class="card-body">
      <span class="badge rounded-pill bg-info text-dark"> <?php echo $i +1 ?></span>
        <h5 class="card-title"> <?php echo $nombre ?></h5>
        <p class="card-text"> <?php echo $descripcion ?></p>
        <a href="index.php" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
       </div>

      
      <?php
}
?>


<?php


echo "<hr>";

for($i=0;$i<$cantidadCards;$i++){

  echo $i;

?>


      <div class="alert alert-primary" role="alert">
        Numero de Card:  <?php echo $i +1 ?>

        <span class="badge rounded-pill bg-info text-dark"> <?php echo $i +1 ?></span>

       </div>

      
      <?php
}
?>


<?php

echo "<br>";
echo "<hr>";
//conversiones....tipos de datos

$numero = 15;
$gramos = 12.5;
$verdad = true;
$nombres = "alejandro";

echo "<hr>";
echo "el tipo de dato ingresado es: ", gettype($numero);
echo "<hr>";
if(is_int($numero) && $numero >= 0){

  echo "Es un numero!!!";

}else {
  echo "No es un numero";
}

if(is_float($numero)){

}

if(is_string($numero)){
  
}

if(is_numeric($numero)){
  
}

if(is_bool($numero)){
  
}

if(is_array($numero)){
  
}

if(is_object($numero)){
  
}

 $nombres = ["juan","marcos","martin","pedro","felipe","martin","pablo"];


 $apellido = ["juan","marcos","martin","pedro","felipe","martin","pablo"];

 echo $nombres[0];

 echo count($nombres);

 for($i=0;$i<count($nombres);$i++){

  echo $nombres[$i];

 }

 foreach($nombres as $indice){

  echo "<br>";
  echo $indice;

 }

//  //scope..
// echo $indice;



echo "<br>";
echo "<hr>";


$datos = [

  "nombre"=>"leandro",
  "apellido"=>"wagner",
  "edad"=>38,
  "aprobado"=>true

];

echo "VarDump <br>";
var_dump($datos);
echo "<br>";
echo $datos["nombre"], $datos["apellido"];;
echo $datos["apellido"];


//formulario

$peliculas = [

  "titulo"=>"matrix",
  "descripcion"=>"pelicula basada en ..",
  "genero"=>"accion",
  "cantidadEstrellas"=>5,
  "director"=>true
];


//otra forma de crear array por indice
$apellidos = array(1,2,3);

$apellido[0];
//fin ejemplo



/*
 let nombres = {



 }


*/

/*
crear formulario de peliculas...

1-nombre
2-descripcion
3-genero
4-calificacion
5-anio
6-director (nombre)

a) cuando presione enviar.. deberia mostrarse la informacion en un archivo del tipo php....

*/

?>






