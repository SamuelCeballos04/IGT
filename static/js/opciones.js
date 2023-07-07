function onload(flag, flag2){
    if(flag == 1){
        document.getElementById("start").disabled = true
        document.getElementById("startL").disabled = true
        document.getElementById("start").innerHTML = "GRACIAS POR REALIZAR LA ENCUESTA"
        document.getElementById("start").classList.remove('boton2')
        document.getElementById("start").classList.add('boton4')
    }
    else if(flag == 2){
        document.getElementById("start").setAttribute("action", "")
        document.getElementById("startL").setAttribute("href", "exportarExcel")
        document.getElementById("start").innerHTML = "EXPORTAR"
        document.getElementById("btnpr").setAttribute("action", "")
        document.getElementById("aprofile").setAttribute("href", "descargarArchivos")
        document.getElementById("btnpr").innerHTML = "Descargar Horarios"
        document.getElementById("btnpr").setAttribute("class", "boton2")
    }
    if (flag2 == 0){
        //document.getElementById("btnHorario").setAttribute("disabled", "true")
        document.getElementById("resultados").setAttribute("href", "configuracion")
        //document.getElementById("btnHorario").disabled = true
        //document.getElementById("resultados").disabled = true
        document.getElementById("btnHorario").setAttribute("action", "")
        document.getElementById("btnHorario").innerHTML = "Administrar horarios"
        document.getElementById("btnHorario").setAttribute("class", 'boton2')
        //document.getElementById("btnHorario").classList.add('boton4')
    }
}

//StartL es el HREF de la encuesta
//start es el boton de la encuesta
//Aprofile es el HREF del perfil
//btnpr es el boton del perfil 