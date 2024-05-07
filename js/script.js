// // // alert("hola soy una ventana de Script externo")

// // //tipos datos....Caractes
// // // numeros- enteros -decimales    10  25   36, 32.5 1.5 etc
// // //booleans---true o false / 1 0 / 

// // console.log(10+5)
// // console.log(3*2)
// // console.log(10%2)
// // console.log(10%3)
// // console.log(10%7)

// // // alert("10+5")
// // // alert("100+1")


// // //hola esto es un comentario
// // alert("Pablo" + "Edad: " + (15+15))
// //  /*
// // esto es un bloque de codigo
// // probando nuevas cosas
// //  */

// // // alert("Beatriz Noemi")

// // // console.log("beatriz NoeMi")

// // // document.write("Beatriz Noemi")

// // //variables...una caja con un nombre

// //  // cadena, un caracter, entero, decimal, booleano
 
// //  /*Pseudocodigo

// //  1-definir la variable nombre
// //  2-asignar un valor del tipo cadena de carater "claudia"
// //  3


// //  */

// //  var nombre = "claudia"

// //  console.log(nombre)
// //  alert("El nombre de usuario es: " + nombre)
// //  document.write(nombre)

// // //realizar el algoritmo sacar superficie de un cuadrado


// // //lado * lado
// // //lado (2)

// // var ladoA = 10 //
// // var ladoB = 10 //

// // var superCuadrado = ladoA * ladoB

// // console.log("La superficie del cuadrado es: " + superCuadrado)
// // alert("")
// // document.write("La superficie del cuadrado es: " + superCuadrado)

// //perimetro...

// //acumulador
// // ladoA = ladoA + 15

// //contadores
// var contador = 0
// contador = contador + 1 // 1
// contador = contador + 1 // 2

// //operador de incremento
// // contador++ //3

// console.log(contador)//

// //operador de decremento
// contador--

// console.log(contador)//

// //video juegos..Algoritmos

// var vidasMario = 3
// const TORTUGA = 1
// const SUMARVIDA = 1


// console.log("inicio del juego+++ ")
// console.log("la vida de mario es " +  vidasMario)

// vidasMario = vidasMario - TORTUGA


// // TORTUGA = 0

// console.log("primer tope con tortuga..")
// console.log(vidasMario)

// vidasMario = vidasMario - TORTUGA

// console.log("primer tope con tortuga..")
// console.log(vidasMario)

// console.log("Econtrar Vida")
// vidasMario = vidasMario + SUMARVIDA
// console.log(vidasMario)


// //constantes - valor que no deberia modicarse

// const PI = 3.141516
// const E = 2.71
// const IVADepende = 21
// const GRAVEDAD = 9.8

// // //

// // // alert("hola super mario")
// // var numeroA = Number(prompt("ingrese un numero"))

// // // numeroA = Number(numeroA)//metodo number convierte un String a numero

// // console.log(typeof numeroA)

// // var numeroB = prompt ("ingrese otro numero")

// // numeroB = Number(numeroB)

// // console.log(numeroA)
// // console.log(numeroB)

// // var sumarNumeros = numeroA + numeroB

// // console.log("la suma de los NA y NB es "+ sumarNumeros)


// // console.log(10+10)
// // console.log("10" + "10")

// // trabajar con Edades 

// // var edadUsuario = parseInt(prompt("ingrese su edad"))

// // alert("la edad del usuario es: " + edadUsuario)

// //Condicionales

// //resultado Booleano = true o false
// // if(edadUsuario>18){

// //     alert("esta permitido actualizar la APP")
// // }

// //operadores de comparacion
// /*
// mayor >
// mayor e igual >=
// menor <
// menor e igual <=
// igual ==
// igual stricto ===
// distinto !=

// */

// // console.log(10>5)
// // console.log(10<8)//
// // console.log(1==1)
// // console.log(1!=1)
// // console.log(1=="1")//
// // console.log(1==="1")
// // console.log("++++")
// // console.log(1==true)//1 == 1
// // console.log(1===true)
// // console.log("++caracteres++")
// // console.log("a"=="a")
// // console.log("casa"=="casa")
// // //codigo ASSCII
// // //alt + 64
// // console.log("Casa"=="casa")
// // console.log("a">"A")
// // console.log("a"<"A")

// // // //condicional

// const nombreUsuario = "juan73"
// const passUsuario = "123456"


// // // var PassWord = prompt("ingrese su pass")

// // // if(PassWord==passUsuario){
// // //     console.log("hola soy un condicional")
    
// // // }


// // // if(vidaMario==0){
// // //     alert("game over")
// // // }


// //operadores de relacion..Operadores logicos
// //AND

// /*
// Tabla de verdad 

// true  and true   = true
// true  and false  = false
// false and true   = false
// false and false  = false 
//       &&


// */

// const passUsuarioA      = "123456"
// const correoUsuario     = "alejandro@gmail.com"
// const permitirUsuario   = 18
// const sosRobot          = false

// var correoInput = "alejandro@gmail.com"
// var passInput = "123456"


// /*
// Prueba de Escritorio:
// true   && true = true
// false  && true = false

// */


// /*Operador Logico OR

// true  || true || true   = true
// true  || false  = true
// false || true   = true
// false || false  = false

// false  || true = true

// */

// /*
// Negado: !

// */

// // if(correoUsuario == correoInput && passUsuarioA==passInput && edadUsuario > edadInput && sosRobot==inputRobot){

// //     alert("podes ingresar con tu usuario: " + correoInput)
// //     document.write("podes ingresar con tu usuario: " + correoInput)

// //     if(edadInput > 18){


// //     }


// // }else{

// //     alert("el usuario o contraseña no es correcto")
// // }

// // // if(!true){

// // //     alert("hola probando el negado")

// // // }else{

// // //     alert("hola inviertiendo el negado")
// // // }

// // console.log(!10<5)//


// //algoritmo..problema

// // const dia = parseInt(prompt("ingrese en numeros el dia"))

// // console.log(typeof dia)


// // if(dia!=="1"){
// //     alert("es Lunes")
// // }else if(dia!=="2"){
// //     alert("es marte")
// // }else if(dia !== "3"){
// //     alert("Es miercoles")
// // }else if(dia !== "4"){
// //     alert("es jueves")
// // }else{
// //     alert("no ingre nada")
// // }

// // switch(dia){

// //     //dia !== "1" || 1
// //     case "1":
// //         alert("es Lunes Switch")
// //         break
// //     case "2":
// //         alert("es martes Switch")
// //         break
// //     case "3":
// //         alert("es miercoles Switch")
// //     default:
// //         alert("ningun dia...")
// //         break

// // }

// //calculadora---
// /*
// +
// -
// *
// /
// */

// /* Cajero

// 1-consultar Saldo
// 2-retirar efectivo
// 3-transferir
// 4-pagar impuestos
// 5-depositar

// */


// let saldoUsuario = 10000

// let saldoCajero =  20000


// const opcionCajero = prompt("elegir alguna opcion: 1-consultar saldo 2-retirar efectivo")


// switch(opcionCajero){

//     case "1":
//         alert("esta por consultar saldo")
//         alert("su saldo es: "+saldoUsuario)
//         if(saldoUsuario<=0){
//             alert("Abrazo contenedor")
//             alert("tenemos la mejor oferta de creditos")
//             //funcion para enviar link
//         }
//         break
//     case "2":
//         if(saldoCajero<=0){
//             alert("luz titilante roja")

//         }

//         const sacarPlata = Number(prompt("ingrese la cantida a extrer"))

//         if(sacarPlata<saldoUsuario){

//             saldoUsuario = saldoUsuario - sacarPlata
//             alert("su saldo actual es: " + saldoUsuario)
//             saldoCajero = saldoCajero - sacarPlata
//         }
//         else{
//             alert("el monto a extraer es superior a su saldo")
//         }
//         break

//     default:
//         alert("ninguna opcion es correcto")
//         break



// }


// const rangoEdad = Number(prompt("ingrese su edad"))

// console.log(typeof rangoEdad)
// // alert(typeof rangoEdad)


// // 7 = false  || true = true
// if(rangoEdad>=18 && rangoEdad<=120){

//     alert("el usuario es mayor de edad: " + rangoEdad)

//     switch(rangoEdad){
//         case 55:
//             alert("paga boleto estudiantil")
            
//         break
//         case 60:
//     }

// }else{
//     alert("no esta en el rango de edad...")
// }




/*
1-contador = 0 < 5 = true
2-contador = 7 < 5 = false

*/


/*
1-contador = 1 <5 = true
*/

/*
1-contador = 0 <5 =true
2-contador = 1 <5 =true



*/
// while(contador<=2){

//     alert("hola soy un virus!!!")
//     console.log("el contador es: " + contador)

    

//     var numeroMagico = Number(prompt("ingrese un numero para sacar el virus"))

//     const numeroVirus = 7

//     if(numeroMagico==numeroVirus){
//         alert("has encontrado el numero magico")
//         break
//     }

//     contador++

// // }


// // let contador = 0

// // while(contador<=50){

// //     // if(contador%2==0){
// //     //     console.log(contador)
// //     // }

// //     if(contador==25){
// //         break
// //     }else{
// //         console.log(contador)
// //     }

// //     contador++

// // }



// // do{

// //     contador=30
// //     alert("hola probando el do while")
// //     contador=8

// // }while(contador<10)




// let nombre1 = "Walter"
// let nombre2 = "sergio"
// let nombre3 = "karla"


// // let edadesUsuarios = [25,85,45,74]
// // let notasUsuarios = [7.5,5.99,8,7]
// // let aproboPreEntrega = [true, false, true, false]

// // let StringNumbersBool = ["walter",25,7.5,true]

// // console.log(nombres[0])
// // console.log(nombres[3])
// // console.log(nombres[4])
// // let bot
// // console.log(bot)





// //....indice=    0         1        2         3
// let nombres = ["Walter","sergio","karla","bot1=Santi"]

// console.log(nombres.length)//cantidad de elementos que 

// let contador = 0


//   while(contador<nombres.length){

//      let nombreUsuario = prompt("ingrese su  nombre")

//      nombres[contador] = nombreUsuario
    
   
//      contador++
//  }

//  //leer array..

//  //while()



//  //


// let alumnosInscriptos       = ["sergio","yesica","pablo","guillermo"]

// let alumnosNotasPreEntrega  = [true,true,false,true]

// console.log("Nombre Alumno: " + alumnosInscriptos[0])
// console.log("Estado de entrega: " + alumnosNotasPreEntrega[0])

// console.log("***Notas de Alumnos****")

//  for(i = 0;i<alumnosInscriptos.length;i++){

//   console.log("Nombre Alumno: " + alumnosInscriptos[i])
//   console.log("Estado de entrega: " + alumnosNotasPreEntrega[i])
//   console.log("***************************")

//  }

 //tarea....

 //funciones!!!

 /*
input..recibe "algo"

internamente....

 output..salida
 */


//  alert("hola funciones")

 let numeroA = 15

 let numeroB = 20

 let numeroC = 30

 let numeroD = 40


let sumaNumerosA = numeroA + numeroB + "Total Pago"



//funciones

function sumarNumeros(){

  alert("hola funcion: modificada")
  console.log("hola este es otro bloque interno")

}

//tipo "global"
let numA = 30
let numB = 20

function sumarNumerosParametros(a,b){

  let sumar = a + b
  console.log("La suma de los numeros es: " + sumar)
  
}

sumarNumerosParametros(numA,numB)

sumarNumerosParametros(45,14)

sumarNumerosParametros(100,50)

console.log("hola soy un console y descubri que soy una funcion")


//crear una funcion que me defina si un numero es par...



function numPar(valorEvaluar) {
  
  if(valorEvaluar%2==0){
    alert("Felicitaciones es PAR!!!!")
  }

}


let ecografiaJuan = parseInt(prompt("ingrese un numero"))


for(i=0;i<50;i++){
numPar(ecografia)
}


if(true){
  numPar(2)
}