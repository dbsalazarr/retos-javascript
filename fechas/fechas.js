

const year = 2022
const holidays = ['01/06', '04/01', '12/25']
console.log(year +"/"+ holidays[0])
function diaSemana( dia ){
    dia = dia.toLowerCase();
    switch (dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            return true
        break;

        default :
            return false
        break;
    }
}

function obtenerDiaSemana(){
    const dia = new Date();

}