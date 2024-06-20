<?php



/*

insert into peliculas...

*/


if($_POST) {


    var_dump($_POST);


    /*

        insert into peliculas...

    */


    //datos que vienen de una base de datos...
    $admin="admin";
    $claveUsuario = "123456";
    $pagoMembresia = false;
    $roles = ['admin','gestor','colaborador','alumno'];




    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $clave = $_POST['clave'];

   
    echo "<br>";

    if($nombre==$admin && $clave ==$claveUsuario && $pagoMembresia==true) {


        /*

            insert into peliculas...

        */


        echo "el nombre de usuario es: ". $nombre;
        echo "su claves : " . $clave;    

    
        

    }else {


        echo "ustede no puede visualizar la clave por usuario o pass incorrectos o membresia no paga";
        // if($pagoMembresia==false){
        //     echo "ustede debe pagar la cuota....";
        // }

    }





}else{

    echo "no hay datos que se implementan del formulario";

}