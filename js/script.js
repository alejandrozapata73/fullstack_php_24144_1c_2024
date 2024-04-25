// // alert("hola soy una ventana de Script externo")

// //tipos datos....Caractes
// // numeros- enteros -decimales    10  25   36, 32.5 1.5 etc
// //booleans---true o false / 1 0 / 

// console.log(10+5)
// console.log(3*2)
// console.log(10%2)
// console.log(10%3)
// console.log(10%7)

// // alert("10+5")
// // alert("100+1")


// //hola esto es un comentario
// alert("Pablo" + "Edad: " + (15+15))
//  /*
// esto es un bloque de codigo
// probando nuevas cosas
//  */

// // alert("Beatriz Noemi")

// // console.log("beatriz NoeMi")

// // document.write("Beatriz Noemi")

// //variables...una caja con un nombre

//  // cadena, un caracter, entero, decimal, booleano
 
//  /*Pseudocodigo

//  1-definir la variable nombre
//  2-asignar un valor del tipo cadena de carater "claudia"
//  3


//  */

//  var nombre = "claudia"

//  console.log(nombre)
//  alert("El nombre de usuario es: " + nombre)
//  document.write(nombre)

// //realizar el algoritmo sacar superficie de un cuadrado


// //lado * lado
// //lado (2)

// var ladoA = 10 //
// var ladoB = 10 //

// var superCuadrado = ladoA * ladoB

// console.log("La superficie del cuadrado es: " + superCuadrado)
// alert("")
// document.write("La superficie del cuadrado es: " + superCuadrado)

//perimetro...

//acumulador
// ladoA = ladoA + 15

//contadores
var contador = 0
contador = contador + 1 // 1
contador = contador + 1 // 2

//operador de incremento
contador++ //3

console.log(contador)//

//operador de decremento
contador--

console.log(contador)//

//video juegos..Algoritmos

var vidasMario = 3
const TORTUGA = 1
const SUMARVIDA = 1


console.log("inicio del juego+++ ")
console.log("la vida de mario es " +  vidasMario)

vidasMario = vidasMario - TORTUGA


// TORTUGA = 0

console.log("primer tope con tortuga..")
console.log(vidasMario)

vidasMario = vidasMario - TORTUGA

console.log("primer tope con tortuga..")
console.log(vidasMario)

console.log("Econtrar Vida")
vidasMario = vidasMario + SUMARVIDA
console.log(vidasMario)


//constantes - valor que no deberia modicarse

const PI = 3.141516
const E = 2.71
const IVADepende = 21
const GRAVEDAD = 9.8

// //

// // alert("hola super mario")
// var numeroA = Number(prompt("ingrese un numero"))

// // numeroA = Number(numeroA)//metodo number convierte un String a numero

// console.log(typeof numeroA)

// var numeroB = prompt ("ingrese otro numero")

// numeroB = Number(numeroB)

// console.log(numeroA)
// console.log(numeroB)

// var sumarNumeros = numeroA + numeroB

// console.log("la suma de los NA y NB es "+ sumarNumeros)


// console.log(10+10)
// console.log("10" + "10")

// trabajar con Edades 

// var edadUsuario = parseInt(prompt("ingrese su edad"))

// alert("la edad del usuario es: " + edadUsuario)

//Condicionales

//resultado Booleano = true o false
// if(edadUsuario>18){

//     alert("esta permitido actualizar la APP")
// }

//operadores de comparacion
/*
mayor >
mayor e igual >=
menor <
menor e igual <=
igual ==
igual stricto ===
distinto !=

*/

console.log(10>5)
console.log(10<8)//
console.log(1==1)
console.log(1!=1)
console.log(1=="1")//
console.log(1==="1")
console.log("++++")
console.log(1==true)//1 == 1
console.log(1===true)
console.log("++caracteres++")
console.log("a"=="a")
console.log("casa"=="casa")
//codigo ASSCII
//alt + 64
console.log("Casa"=="casa")
console.log("a">"A")
console.log("a"<"A")

//condicional

const nombreUsuario = "juan73"
const passUsuario = "123456"


var PassWord = prompt("ingrese su pass")

if(PassWord==passUsuario){
    console.log("hola soy un condicional")
    
}


if(vidaMario==0){
    alert("game over")
}