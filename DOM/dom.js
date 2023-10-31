document.addEventListener('DOMContentLoaded', () =>{
    console.log("El sitio web, esta listo!")
})


// seleccionando elemento
let button = document.getElementById("btnEnviar")

// agregando el evento clikc

button.addEventListener('click', (e) => {
	e.preventDefault()
    console.log({e})
    alert("Me presionaste y sin mi permiso >:|")
})

button.addEventListener('mouseover', ()=>{
    console.log("Pasaste encima mio, irrespetuoso >:v")
})

button.addEventListener('mouseout', () => {
    console.log("Al fin te vaz, paz interior al fin !")
})
