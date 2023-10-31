document.addEventListener('DOMContentLoaded', () =>{
    console.log("El sitio web, esta listo!")
})


// seleccionando elemento
let button = document.getElementById("btnEnviar")

// agregando el evento clikc

button.addEventListener('click', (e) => {
	console.log(e)
})