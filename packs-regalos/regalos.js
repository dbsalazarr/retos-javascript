/*
Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

 el pack de regalos pesa 4 + 4 + 4 = 12
 los renos pueden llevar (2 * 6) + (2 * 6) = 24
 por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
*/
const cajasRegalos = ["book", "doll", "ball"]
const renos = ["dasher", "dancer"]

document.addEventListener('DOMContentLoaded', ()=> {
    // Documento se ha cargado correctamente
    const lblPesoRegalos = document.getElementById("peso-regalos")
    const lblCapacidadRenos = document.getElementById("capacidad-renos")

    let listaRegalos, listaRenos 
    listaRegalos = obtenerListaItems(".lista-regalos li")
    listaRenos = obtenerListaItems(".lista-renos li")

    // EVENTO CLICK DE UN ENLACE a
    document.getElementById("btnDistribuirRegalos").addEventListener('click', (e) => {
        e.preventDefault();
        const lblPacksDistribuir = document.getElementById("packs-distribuir")
        lblPacksDistribuir.innerText = `Los renos pueden llevar ${distribuirRegalos(listaRegalos, listaRenos)} packs de regalos`
        
    })
    
    // MOSTRAR RESULTADOS Y CALCULOS
    lblPesoRegalos.innerText = `El peso de los regalos es: ${calcularPeso(listaRegalos, "regalos")}`
    lblCapacidadRenos.innerText = `La capacidad de carga los renos es: ${calcularPeso(listaRenos, "renos")}`
})


function obtenerListaItems( tagHTML ){
    const itemsHTML = document.querySelectorAll(tagHTML)
    let listaItems = []
    itemsHTML.forEach( (item)=>{
        listaItems.push( item.textContent )
    })
    return listaItems
}

function calcularPeso( pack, option ){
    let pesoCalculado = 0
    pack.forEach(( item ) => {
        pesoCalculado += item.length
    })
    if(option == "regalos"){
        return pesoCalculado
    }else if(option == "renos"){
        return 2*pesoCalculado
    }else{
        return 0
    }
}

function distribuirRegalos(listRegalos, listRenos){
    let pesoRegalos, capacidadRenos, sePuedeLlevar = 0
    pesoRegalos = calcularPeso(listRegalos, "regalos")
    capacidadRenos = calcularPeso(listRenos, "renos")
    if (capacidadRenos % pesoRegalos == 0){
        sePuedeLlevar = capacidadRenos / pesoRegalos
    }else{
        sePuedeLlevar = (capacidadRenos - capacidadRenos%pesoRegalos)/pesoRegalos
    }
    return sePuedeLlevar
}
console.log("Los renos pueden llevar ", distribuirRegalos(cajasRegalos, renos), " packs de regalos")
