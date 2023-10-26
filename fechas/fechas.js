const holidays = ['01/06', '04/01', '12/25']
const weekDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const btnCalcular = document.getElementById("btn-calcular");

function obtenerListaFeriados(){
    let dates = document.querySelectorAll("ul li")
    let listDates = []

    dates.forEach((date) => {
        listDates.push(date.textContent)
    })
    return listDates
}

function generarFechas(date_list, year){
    let newDates = []
    date_list.forEach( (date) => {
        newDates.push(year+"/"+date)
    });
    return newDates
}

// console.log( generarFechas(holidays) )

function calcularHorasCompensacion(){
    const sltYear = document.getElementById("slt-year")
    let year = sltYear.options[sltYear.selectedIndex].value

    let new_dates = generarFechas( obtenerListaFeriados(), year )

    let cantidadDiasLaborales = 0
    new_dates.forEach( (date) => {
        cantidadDiasLaborales = esDiaLaboral( obtenerDiaSemana(date) ) ?  cantidadDiasLaborales += 1 : cantidadDiasLaborales += 0
    })
    return cantidadDiasLaborales*2
}

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
// console.log( esDiaLaboral(obtenerDiaSemana("2022/04/1")) )


// EVENTOS
btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    let contentDiv = document.getElementById("content-dias-laborables")
    let horasCompensar = 0
    const sltYear = document.getElementById("slt-year")
    let year = sltYear.options[sltYear.selectedIndex].value 
    let listDays = generarFechas(  obtenerListaFeriados(), year)
    let html = ""
    horasCompensar = calcularHorasCompensacion()
    listDays.forEach((day) => {
        html += `<p>La fecha ${day} fue ${obtenerDiaSemana(day)} </p>`
    });
    html += `Por lo tanto las horas a compensar son: ${horasCompensar}hrs`
    contentDiv.innerHTML = html
}) 