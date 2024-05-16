console.log("probando iniciar sesion")


const filas = document.getElementsByClassName("fila");

const nombresFilas = document.getElementsByClassName("nombre")

console.log(filas)
console.log(filas[0].textContent)

for(let i=0;i<filas.length;i++){

    console.log(filas[i])


}




filas[0].style.backgroundColor = "red";

// array.forEach(element => {
    
// });

const nombres = ["juan","pedro","marcos"]


for(let i=0;i<nombres.length;i++){

    console.log(nombres[i])
}


nombres.forEach((e)=> console.log(e))







for(let i=0;i<filas.length;i++){

    console.log(filas[i].textContent)

    // if(i%2==0){
    // // filas[i].style.color = "#ff0000"; 
    // // filas[i].style.backgroundColor = "black";
    // console.log(i)
    
    // }

}

for(let i=0;i<nombresFilas.length;i++){
    console.log(nombresFilas[i].textContent)
}

const htres = document.querySelectorAll("h3")

htres.forEach(element => {
    console.log(element.textContent)
});


//caputar y agregar un listener

let capturaPrimerh3 = document.getElementById("primerh3")
let datos = document.getElementById("datos")
//listener ("evento","funcion/invocar")
capturaPrimerh3.addEventListener("click",nombrarAlumnosBack)

let vida = 0

function nombrarAlumnosBack(){
   
    vida++
    datos.textContent = vida
    console.log(vida)
}


//Validacion de Formulario

const form = document.querySelector('form');
// Agrega un evento de escucha para cuando se envía el formulario


/* 
form.addEventListener('submit', pararSubmit)

function pararSubmit() {

     event.preventDefault(); 

}


form.addEventListener('submit', (event) => {

    event.preventDefault()

})

*/




form.addEventListener('submit', (e) => {
    // Si la validación del formulario no es exitosa

   
    if (!validarForm()) {


        // Muestra un mensaje en la consola indicando que el formulario no es válido
        console.log('El formulario no es válido. Por favor, corrige los errores.');
        // Evita que el formulario se envíe
        e.preventDefault(); // Evita que el formulario se envíe si hay errores de validación


        

    } else {
        // Si la validación del formulario es exitosa, muestra un mensaje en la consola
        console.log('El formulario es válido. Enviar datos...');
        alert("el formulario pudo enviar los datos")
        // Aquí puedes enviar los datos del formulario o realizar otras acciones
    }


});



function validarForm(){

    let esValido = true;
    //................True...................True
    esValido = validarCampo('password') && esValido; // Validar campo de email
    

    return esValido
}


const validarCampo = (campo) => {
    const field = document.getElementById(campo); // Obtiene el elemento del campo mediante su ID
    const value = field.value

    if (value === '') {
        return false; // Devuelve false indicando que la validación ha fallado
    } else {
      return true; // Devuelve true indicando que la validación ha tenido éxito
    }

};




//input usuario input password

let inputUsuario = document.getElementById("usuario")

let inputPasswor = document.getElementById("password")

let a =inputUsuario.value

let b=inputPasswor.value

if(a==='' && b===''){

    alert("esta vacio")
    
}
//