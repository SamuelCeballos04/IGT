async function valores(){
    lista = []
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('check');
    console.log("Input Elements: ", inputElements)
    for(var i=0; i < inputElements.length; i++){
          if(inputElements[i].checked){
               checkedValue = inputElements[i].value
               console.log("Valor del botón: ", checkedValue)
               lista.push(checkedValue)
          }
    }
    console.log("Lista: ", lista)
    dict = {}
    horasLunes = []
    horasMartes = []
    horasMiercoles = []
    horasJueves = []
    horasViernes = []
    // for(var j=0; j < lista.length; j++)
    //     {
    //     dia = lista[j][0]
    //     diaHora = lista[j]
    //     if (dia == "L")
    //         {
    //         diaHora = diaHora.slice(1)
    //         horasLunes.push(diaHora)
    //         dict["Lunes"] = horasLunes
    //         } 

    //     else if (dia == "M")
    //         {
    //         diaHora = diaHora.slice(1)
    //         horasMartes.push(diaHora)
    //         dict["Martes"] = horasMartes
    //         } 
    //     else if (dia == "I")
    //         {
    //         diaHora = diaHora.slice(1)
    //         horasMiercoles.push(diaHora)
    //         dict["Miércoles"] = horasMiercoles
    //         } 
    //     else if (dia == "J")
    //         {
    //         diaHora = diaHora.slice(1)
    //         horasJueves.push(diaHora)
    //         dict["Jueves"] = horasJueves
    //         } 
    //     else if (dia == "V")
    //         {
    //         diaHora = diaHora.slice(1)
    //         horasViernes.push(diaHora)
    //         dict["Viernes"] = horasViernes
    //         } 
    //     }
    console.log("Dias: ", dict)
    document.getElementById("diccInvisible").value = lista
}




