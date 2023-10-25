/* Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
/* Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no modifiques (mutes) el array original.
*/

const regalos = obtenerListaRegalos()
let btnEmpaquetar = document.getElementById("btn-empaquetar");

function obtenerListaRegalos(){
  let list_regalos_html = document.querySelectorAll("ul li")
  let lista_regalos = []
  list_regalos_html.forEach((regalo) => {
    lista_regalos.push(regalo.textContent)
  })
  return lista_regalos
}



function envolver_regalos( regalo ){
  let envoltura_size = regalo.length + 2
  let envoltura = ""
  for(let i = 1; i <= 2*envoltura_size; i++){
    envoltura += "*"
    if (i == envoltura_size){
      envoltura += "\n*" + regalo + "*\n"
    }
  }
  return envoltura
}

function empaquetar_regalos( lista_regalos ){
  let regalos_envueltos = []
  lista_regalos.forEach((regalo) => {
    regalos_envueltos.push( envolver_regalos(regalo))
  })
  return regalos_envueltos
}

// EVENTOS
btnEmpaquetar.addEventListener('click', (e) => {
  e.preventDefault();
  let cajaRegalos = document.getElementById("lista-regalos-empaquetados")
  let htmlRegalos = ""
  lista_regalos_empaquetados.forEach( (regalo, index) => {
    htmlRegalos += 
    `<code>
    Regalo[${index + 1}] : ${regalo} : empaquetado correctamente
    </code>`
  })

  cajaRegalos.innerHTML = htmlRegalos
  console.log("Botón Presionado")
})

// MOSTRAR LOS RESULTADOS

console.log("REGALOS ENVUELTOS")
lista_regalos_empaquetados = empaquetar_regalos( regalos )
console.log(lista_regalos_empaquetados)















