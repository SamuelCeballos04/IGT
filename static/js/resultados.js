let fechainicio = ""
let fechafin = ""
let diafechainicio = ""
let mesfechainicio = ""
let anhofechainicio = ""
let diafechafin = ""
let mesfechafin = ""
let anhofechafin = ""
let arreglohorarios = []

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


// $(document).ready(function () {
//     var dt= new Date();
//     var month=dt.getMonth(); // read the current month
//     var year=dt.getFullYear(); // read the current year
    
//     dt=new Date(year, month, 0o1);//Year , month,date format

//     var first_day=dt.getDay(); //, first day of present month
//     // document.write("first_day=" + first_day + "<br><br>");

//     dt.setMonth(month+1,0); // Set to next month and one day backward.
//     var last_date=dt.getDate(); // Last date of present month
//     // document.write(dt); // Last date in full
//     // document.write("<br><br> Last Date of the month =" + last_date + "<br><br>");

//     var dy=1; // day variable for adjustment of starting date.
//     // document.write ("<table><tr><td>Su</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>");
//     console.log(typeof dy)
//     for(i=1;i<=42;i++){
//     let id = "la" + String(i)
//     let idch = "ch" + String(i)
//     console.log(id)
//     let celda = document.getElementById(id)
//     // if((i%7)==0){document.write("</tr><tr>");} // if week is over then start a new line
//     if((i>= first_day) && (dy<= last_date)){
//     // document.write("<td>"+ dy +"</td>");
//         if (dy < diafechainicio || dy > diafechafin){
//             console.log(diafechainicio)
//             console.log(dy)
//             document.getElementById(idch).setAttribute("disabled", "true")
//         }
        
//     celda.innerHTML = dy
//     dy=dy+1;
//     }else {
//         celda.innerHTML = '*';
//         document.getElementById(idch).setAttribute("disabled", "true")
//     } // Blank dates.
//     } // end of for loop

//     // document.write("</tr></table>")
// });

function onload(inicio, fin){
    console.log("FUNCION")
    console.log("INICIO: ", inicio)
    console.log("FIN: ", fin)

    diafechainicio = inicio.substring(8,10)
    mesfechainicio = inicio.substring(5,7)
    anhofechainicio = inicio.substring(0,4)
    diafechafin = fin.substring(8,10)
    mesfechafin = fin.substring(5,7)
    anhofechafin = fin.substring(0,4)
    console.log("diafechaincio: ", diafechainicio)
    console.log("mesfechaincio: ", mesfechainicio)
    console.log("anhofechaincio: ", anhofechainicio)
    diafechainicio = parseInt(diafechainicio)
    mesfechainicio = parseInt(mesfechainicio)
    mesfechainicio = parseInt(mesfechainicio)
    diafechafin = parseInt(diafechafin)
    mesfechafin = parseInt(mesfechafin)
    mesfechafin = parseInt(mesfechafin)
    console.log("tipo dia: " + diafechainicio + " " + typeof diafechainicio)

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
    console.log(typeof dy)
    for(i=1;i<=42;i++){
    let cellID = "cell" + String(i)
    let id = "la" + String(i)
    let idch = "ch" + String(i)
    console.log(id)
    let celda = document.getElementById(id)
    // if((i%7)==0){document.write("</tr><tr>");} // if week is over then start a new line
    if((i>= first_day) && (dy<= last_date)){
    // document.write("<td>"+ dy +"</td>");
        if (dy < diafechainicio || dy > diafechafin){
            console.log(dy)
            document.getElementById(idch).setAttribute("disabled", "true")
        }
        else{
            let id = document.getElementById(idch)
            console.log("IIIIIIIIIIIIIIIIID: ", idch)
            if (idch == "ch41" || idch == "ch42" || idch == "ch34" || idch == "ch35" || idch == "ch27" || idch == "ch28" || idch == "ch20" || idch == "ch21" || idch == "ch13" || idch == "ch14" || idch == "ch6"|| idch == "ch7"){
                document.getElementById(idch).setAttribute("disabled", "true")
                console.log("NOOOOOOOOOOOOOOOOO", i)
            }
            else{
                document.getElementById(cellID).style.backgroundColor = "#eebb2e"
                console.log("Sí entra", i)
            }
        }
        
    celda.innerHTML = dy
    dy=dy+1;
    }else {
        celda.innerHTML = '*';
        document.getElementById(idch).setAttribute("disabled", "true")
    } // Blank dates.
    } // end of for loop

    // document.write("</tr></table>")

}

async function cerrar(){
    var band = 0
    var menu = document.getElementById("menu"); 
    var celda = document.getElementById("celdaSel").innerHTML
    console.log("CELDA: ", celda)
    menu.classList.add("oculto");
    for (i=43; i<=53; i++){
        if(document.getElementById("ch"+String(i)).checked == true){
            band = 1
        }
        document.getElementById("ch"+String(i)).checked = false         
    }
    if (band == 0){
        document.getElementById(celda).style.backgroundColor = "#eebb2e"
    }
    // bandcolor = 0
    // for (i = 1; i <= 42; i++){
    //     let celda = document.getElementById("cell"+String(i))
    //     if (celda.style.backgroundColor == "rgb(238, 187, 46)"){
    //         document.getElementById("Envia").disabled = true
    //         bandcolor = 1
    //         console.log("SUCCESS")
    //     }
    // }
    // if (bandcolor == 0){
    //     console.log("ACTIVADO CERRAR")
    //     document.getElementById("Envia").disabled = false
    // }
}

async function closemodal(){
    var horas = []
    var menu = document.getElementById("menu"); 
    menu.classList.add("oculto");
    for (i=43; i<=53; i++){
        document.getElementById("ch"+String(i)).checked = false         
    }
    let dia = document.getElementById("dia").innerHTML
    let mes = document.getElementById("mes").innerHTML
    mes = parseInt(mes)
    if (mes < 10){
        mes = String(mes)
        mes = "0" + mes
    }
    else{
        mes = String(mes)
    }
    var hora = "NA"
    let cita = dia + mes + hora
    horas.push(cita)
    horas = JSON.stringify(horas)
    arreglohorarios.push(horas)
    console.log(arreglohorarios)
}

async function guardarhorario(){
    var horasdicc = {id: "", valor: ""}
    var horas = []
    var menu = document.getElementById("menu"); 
    menu.classList.add("oculto");
    let dia = document.getElementById("dia").innerHTML
    console.log("Dia: ", dia)
    let mes = document.getElementById("mes").innerHTML
    mes = parseInt(mes)
    if (mes < 10){
        mes = String(mes)
        mes = "0" + mes
    }
    else{
        mes = String(mes)
    }
    for (i=44; i<=53; i++){
        if(document.getElementById("ch"+String(i)).checked == true){    
            var hora = document.getElementById("la"+String(i)).innerHTML
            let cita = hora
            horas.push(cita)
        }
        document.getElementById("ch"+String(i)).checked = false         
    }
    bandcolor = 0
    // for (i = 1; i <= 42; i++){
    //     let celda = document.getElementById("cell"+String(i))
    //     console.log(celda.style.backgroundColor)
    //     if (celda.style.backgroundColor == "rgb(238, 187, 46)"){
    //         document.getElementById("Envia").disabled = true
    //         bandcolor = 1
    //         console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRROR")
    //     }
    // }
    // if (bandcolor == 0){
    //     console.log("ACTIVADO GUARDAR")
    //     document.getElementById("Envia").disabled = false
    // }
    let clave = dia + mes
    for (let index = 0; index < arreglohorarios.length; index++){
        if (arreglohorarios[index].id == clave){
            arreglohorarios[index].valor = horas
            console.log(arreglohorarios)
            return
        }
    }
    horasdicc.id = dia + mes
    horasdicc.valor = horas
    arreglohorarios.push(horasdicc)
    console.log(arreglohorarios)
    // bandcolor = 0
    // for (i = 1; i <= 42; i++){
    //     let celda = document.getElementById("cell"+String(i))
    //     console.log(celda.style.backgroundColor)
    //     if (celda.style.backgroundColor == "rgb(238, 187, 46)"){
    //         document.getElementById("Envia").disabled = true
    //         bandcolor = 1
    //         console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRROR")
    //     }
    // }
    // if (bandcolor == 0){
    //     console.log("ACTIVADO GUARDAR")
    //     document.getElementById("Envia").disabled = false
    // }
}

// $(document).on('submit','#formulario',function(e){
//     e.preventDefault()
// });

function enviarHorario(){
    for (var i = 1; i <= 42; i++){
        celda = document.getElementById("cell"+String(i))
        if (celda.backgroundColor == "rgb(238, 187, 46)"){
            console.log("SÍ ENTRAAAAAAAAAAAAAAAAAA")
            var horasdicc = {id: "", valor: ""}
            let horas = []
            let diaC = document.getElementById("dia").innerHTML
            let mes = document.getElementById("mes").innerHTML
            mes = parseInt(mes)
            if (mes < 10){
                mes = String(mes)
                mes = "0" + mes
            }
            else{
                mes = String(mes)
            }
            let clave = diaC + mes
            horasdicc.id = clave
            horasdicc.valor = horas
            arreglohorarios.push(horasdicc)
            }
        }
    $.ajax({
        type:'POST',
        url:'/opciones',
        data:{
            bandera: JSON.stringify("0"),
            horariosPy: JSON.stringify(arreglohorarios)
        },
        success:function(response)
        {
            var base_url = window.location.origin;
            base_url = base_url + "/opciones"
            window.location = base_url
            // $("#target").val('')
            // $("#button").prop("disabled",true);
            console.log(response[0])
            // window.location.reload();
        }
    })
}

function colorearCelda(cellID, checkID, labelID) {
    document.getElementById("Envia").disabled = false
    console.log("colorear celda")
    let diaC = document.getElementById("dia").innerHTML
    let mes = document.getElementById("mes").innerHTML
    mes = parseInt(mes)
    if (mes < 10){
        mes = String(mes)
        mes = "0" + mes
    }
    else{
        mes = String(mes)
    }
    let clave = diaC + mes
    console.log("CLAVEEEEEE: ", clave)
    let horas = []
    for (let index = 0; index < arreglohorarios.length; index++){
        console.log("FOOOOOOOOOOOOOor")
        if (arreglohorarios[index].id == clave){
            console.log(arreglohorarios)
            horas = arreglohorarios[index].valor
            console.log("HORAAAAAAAAAAAAAS: ", horas)
            for (var i = 44; i <= 53; i++){
                for (let index = 0; index < horas.length; index++){
                    if (horas[index] == document.getElementById("la"+String(i)).innerHTML){
                        document.getElementById("ch"+String(i)).checked = true
                    }
                }
            }
        }
    }
    ch = document.getElementById(checkID)
      var dia = document.getElementById(labelID).innerHTML
      console.log("DIA: ", dia)
      document.getElementById("dia").innerHTML = dia
      var dt= new Date();
      var month=dt.getMonth();
      month = month + 1
      document.getElementById("mes").innerHTML = month
      var mesText = ""
      if (month == 1){
          mesText = "Enero"
      }
      else if (month == 2){
          mesText = "Febrero"
      }
      else if (month == 3){
          mesText = "Marzo"
      }
      else if (month == 4){
          mesText = "Abril"
      }
      else if (month == 5){
          mesText = "Mayo"
      }
      else if (month == 6){
          mesText = "Junio"
      }
      else if (month == 7){
          mesText = "Julio"
      }
      else if (month == 8){
          mesText = "Agosto"
      }
      else if (month == 9){
          mesText = "Septiembre"
      }
      else if (month == 10){
          mesText = "Octubre"
      }
      else if (month == 11){
          mesText = "Noviembre"
      }
      else if (month == 12){
          mesText = "Diciembre"
      }
      console.log("Mes: ", mesText)
      document.getElementById("diasel").innerHTML = dia + " de " + mesText
      document.getElementById("celdaSel").innerHTML = cellID
      var checkbox = document.getElementById(checkID);
      var menu = document.getElementById("menu"); 
      checkbox.addEventListener("change", function() {
        // Verifica si el checkbox está marcado o no
        if (this.checked) {
          // Si está marcado, muestra el menú
          menu.classList.remove("oculto");
          var celda = document.getElementById(cellID);
        celda.style.backgroundColor = "#01C929"
        } else {
          // Si no está marcado, oculta el menú
          menu.classList.add("oculto");
        }
      }); 
  }