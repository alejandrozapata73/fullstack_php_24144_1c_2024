
let contenedorPersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos) => {
        // console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
            <h4>${elementos.name}</h4>
            <img src="${elementos.image}">
            
        `;


       contenedorPersonajes.append(contenedorCreado)


    });

})