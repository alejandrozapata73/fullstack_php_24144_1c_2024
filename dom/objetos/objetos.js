




// function nombreFuncion(){

//     alert("bienvenidos... BAck")
// }


// function conRetorno(aproboFront){


//     if(aproboFront===true){

//         return true

//     }else{

//         return false
//     }


// }

// function sumarFlecha (a,b){

//     if(a){

//     }

//     return a+b

// }

//funcion flecha

// let sumarFlecha = (a,b) => {
//     if(a){

//     }
//     return a+b
// }


// sumarFlecha(10,15)


// //1-funcion declarativa
// function restarNumeros(a,b,c){

//     return a-b-c

// }

// //2-funcion "flecha"

// let restarNumeros = (a,b,c)=>{

//     let resultadoResta = a-b-c

//     return resultadoResta
// }

// //3
// let restarNumeros = (a,b,c)=>true

// //4
// let restarNumeros = () =>{


//     true
// }


//Array

let personajes = ["batman", "superman","linternaVerda","wonderwoman"]

let poderes = ["serMillonario","fuerza","anillo","lazo"]

// ["batman", "superman","linternaVerda","wonderwoman"]
// ["serMillonario","fuerza","anillo","lazo"]

console.log(personajes[0])
console.log(poderes[0])


//Objetos Literales

let casa = {
    nombre: "roman",
    apellido: "rodriguez",
    edad: 34,
   
}

let personaje1 = {
    nombre: "Batman",
    poder: "serMillonario",
    heroe: true,
    vuela: false,
    edad: 45,
    vida: 100,
    //metodo--funcion
    atenderBatiseñal: function (comisionado){
        alert("hola llamado batiseñal")
    },

    restarvida: function(){
        alert("restando vida")
    }

}

console.log(personaje1.nombre)
console.log(personaje1.vuela)

personaje1.atenderBatiseñal("hola") 

console.log("hola")

alert("hola")

let nombre ="alejandro"


console.log(nombre.length)

