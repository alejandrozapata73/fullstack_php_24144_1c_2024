<?php

echo "Estoy probando funciones...";

//funciones....

echo "<br>";

function obtenerEdadMayor(int $anio, int $anioActual){


    $edad = $anioActual-$anio;

    if($edad>=18){

        return true;

    }else{
        return false;
    }


}

function crearSaltos(){
    echo "<br>";
    echo "<hr>";
}

// echo $edad;
// echo $anio;

//llamar-invocar

crearSaltos();


$valorRetornoFuncion = obtenerEdadMayor(1984,2024);


echo $valorRetornoFuncion;

crearSaltos();

if(obtenerEdadMayor(1984,2024)){
    echo "Es mayor de edad +++";
}else{
    echo "es menor de edad--";
}


//... isset...vs empty

crearSaltos();


$jueves;


echo "devol isset: ",isset($jueves);

crearSaltos();

if(isset($jueves)){
    echo "existe";
}else{
    echo "no existe";
}


if(empty($jueves)){
    echo "vacio...";
}


/*
preguntar para llenar datos

1-Post
2-name=nombre -> php: $_POST['nombre'] -> isset($_Post['nombre'])
3-empty($_POST['nombre'])

*/


//....Programacion Orientado a 


$alumno1Nombre = "marcelo";

$alumnosNombres = ["marcelo"];
$alumnosEdad = [39];
$alumnosAprobado = [true];

//Creacion de Clase principal

class Persona {
    //modificadores de acceso

    public $nombre;
    public $apellido;
    public $edad;
    public $telefono;

    //metodos...funciones

    function estudiarPHP(){
        echo "estoy estudiando PHP 🐘";
    }

    function hablar($tema){

        if($tema=="Python"){
        echo "hola voy a hablar de: ", $tema,"🐍";
        }elseif($tema=="PHP"){
            echo "hola voy a hablar de ....";
        }

    }

    function mostrarDatos(){

        echo "El dato del objeto es: ", $this->nombre;
        echo "El dato del objeto es: ", $this->apellido;
        echo "El dato del objeto es: ", $this->edad;
        echo "El dato del objeto es: ", $this->telefono;

    }

    //finde largo generar metodos para llamados de atributos

} 




//creacion de un objeto

$pablo = new Persona();

$pablo->nombre = "pablo";
$pablo->apellido = "Gabriel";
$pablo->edad= 32;
$pablo->telefono = 152369;

echo $pablo->nombre;

$pablo->estudiarPHP();
$pablo->mostrarDatos();


$marcelo = new Persona();
$marcelo->nombre = "Marcelo";
echo $marcelo->nombre;


/*

1-tener el form de registro peliculas... 
2-tener la tabla en la base de datos (5+1)
3-repasar poo

*/

//..funcion
crearSaltos();


$pablo->hablar("Pyhton");