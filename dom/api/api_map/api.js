
// let personaje1= {
//     nombre:"batman",
//     superPoder: "billetera",
//     edad: 45,
//     volar: false
// }

// let personaje2= {
//     nombre:"batman",
//     superPoder: "billetera",
//     edad: 45,
//     volar: false
// }


// let personaje3= {
//     nombre:"batman",
//     superPoder: "billetera",
//     edad: 45,
//     volar: false
// }

// let personajes = [

//     {
//         id: 1,
//         nombre:"batman",
//         superPoder: "billetera",
//         edad: 45,
//         volar: false
//     },
//     {
//         id: 2,
//         nombre:"aquaman",
//         superPoder: "hablarPeces",
//         edad: 45,
//         volar: false
//     },
//     {
//         id: 3,
//         nombre:"linternaVerde",
//         superPoder: "anillo",
//         edad: 45,
//         volar: true
//     }

// ]

// for(let i=0;i<personajes.length;i++){

//     console.log(personajes[i].nombre)
//     console.log(personajes[i].superPoder)

// }

// console.log("****Llamdo mediante foreach objeto***")

// personajes.forEach((objeto)=>console.log(objeto.nombre))






let contenedorPersonajes = document.getElementById('personajes')

fetch('https://rickandmortyapi.com/api/character')
.then((response)=> response.json())
.then((data)=>{

    console.log(data)
    // console.log(data.results)
    

    data.results.map((elemento)=>{

        const contenedorCreado = document.createElement("div")
        
        contenedorCreado.innerHTML = `
        <h4>${elemento.name}</h4>
        <img src="${elemento.image}">
        `;

        contenedorPersonajes.append(contenedorCreado)
    })

})