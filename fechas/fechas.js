const year = 2022
const holidays = ['01/06', '04/01', '12/25']
const weekDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

function generarFechas(date_list){
    let new_dates = []
    date_list.forEach( (date) => {
        new_dates.push(year+"/"+date)
    });
    return new_dates
}

// console.log( generarFechas(holidays) )

function calcularHorasCompensacion(){
    let new_dates = generarFechas(holidays)
    let cantidadDiasLaborales = 0
    new_dates.forEach( (date) => {
        cantidadDiasLaborales = esDiaLaboral( obtenerDiaSemana(date) ) ?  cantidadDiasLaborales += 1 : cantidadDiasLaborales += 0
    })
    return cantidadDiasLaborales*2
}

console.log("La cantidad de horas a recuperar es: ", calcularHorasCompensacion())

function esDiaLaboral( dia ){
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

function obtenerDiaSemana( fecha ){
    const nuevaFecha = new Date(fecha);
    let dia = weekDays[ nuevaFecha.getDay() ]
    return dia
}

console.log( obtenerDiaSemana("2022/04/1") )
