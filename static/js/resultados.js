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


$(document).ready(function () {
    var dt= new Date();
    var month=dt.getMonth(); // read the current month
    var year=dt.getFullYear(); // read the current year

    dt=new Date(year, month, 0o1);//Year , month,date format

    var first_day=dt.getDay(); //, first day of present month
    // document.write("first_day=" + first_day + "<br><br>");

    dt.setMonth(month+1,0); // Set to next month and one day backward.
    var last_date=dt.getDate(); // Last date of present month
    // document.write(dt); // Last date in full
    // document.write("<br><br> Last Date of the month =" + last_date + "<br><br>");

    var dy=1; // day variable for adjustment of starting date.
    // document.write ("<table><tr><td>Su</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>");

    for(i=1;i<=42;i++){
    let id = "la" + String(i)
    console.log(id)
    let celda = document.getElementById(id)
    // if((i%7)==0){document.write("</tr><tr>");} // if week is over then start a new line
    if((i>= first_day) && (dy<= last_date)){
    // document.write("<td>"+ dy +"</td>");
    celda.innerHTML = dy
    dy=dy+1;
    }else {celda.innerHTML = '*';} // Blank dates.
    } // end of for loop

    // document.write("</tr></table>")
});
