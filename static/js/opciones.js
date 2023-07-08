function onload(flag, flag2, flaghorario){
    console.log("HOLA")
    console.log(flag)
    console.log(flag2)
    console.log(flaghorario)
    if(flag == 1){
        console.log(flaghorario)
        document.getElementById("start").disabled = true
        document.getElementById("startL").disabled = true
        document.getElementById("start").innerHTML = "GRACIAS POR REALIZAR LA ENCUESTA"
        document.getElementById("start").classList.remove('boton2')
        document.getElementById("start").classList.add('boton4')
        if (flag2 == 0){
            document.getElementById("btnHorario").setAttribute("disabled", "true")
            document.getElementById("resultados").setAttribute("disabled", "true")
            //document.getElementById("btnHorario").disabled = true
            //document.getElementById("resultados").disabled = true
            document.getElementById("btnHorario").innerHTML = "YA HAS REGISTRADO LOS HORARIOS"
            document.getElementById("btnHorario").classList.remove('boton2')
            document.getElementById("btnHorario").classList.add('boton4')
        }
        if (flaghorario == 0){
            console.log("BBBBBBBBBBBBB")
            document.getElementById("btnHorario").setAttribute("disabled", "true")
            document.getElementById("resultados").setAttribute("disabled", "true")
            document.getElementById("btnHorario").innerHTML = "NO PUEDES REGISTRAR LOS HORARIOS"
            document.getElementById("btnHorario").classList.remove('boton2')
            document.getElementById("btnHorario").classList.add('boton4')
        }
    }
    else if(flag == 2){
        document.getElementById("sex-ion").innerHTML = ""
        document.getElementById("sex-ion").innerHTML = `
        <form action="{{url_for('instrucciones')}}" method = 'get' class="formulario" autocomplete="off">
            <a href="exportarExcel" id="startL">
                <button type="button" class="boton2" action="" id="start">EXPORTAR</button><br>
            </a>
        </form>
        <a href = "descargarArchivos" id="aprofile" >
            <button class = "boton2" id="btnpr" type = "submit" action = "">Descargar Horarios</button>
        </a>
        <a href = "configuracion" id="resultados" >
            <button class = "boton2" id="btnHorario" type = "submit" action = "">Administrar horarios</button>
        </a>
        <a href="login">
                <button class="boton" action="" type="submit">Salir</button>
        </a>`
        // document.getElementById("start").setAttribute("action", "")
        // document.getElementById("startL").setAttribute("href", "exportarExcel")
        // document.getElementById("start").innerHTML = "EXPORTAR"
        // document.getElementById("btnpr").setAttribute("action", "")
        // document.getElementById("aprofile").setAttribute("href", "descargarArchivos")
        // document.getElementById("btnpr").innerHTML = "Descargar Horarios"
        // document.getElementById("btnpr").setAttribute("class", "boton2")
    }
    else{
        console.log("AAAAAAAAAAAAAA")
        if (flaghorario == 0){
            console.log("BBBBBBBBBBBBB")
            document.getElementById("btnHorario").setAttribute("disabled", "true")
            document.getElementById("resultados").setAttribute("disabled", "true")
            document.getElementById("btnHorario").innerHTML = "NO PUEDES REGISTRAR LOS HORARIOS"
            document.getElementById("btnHorario").classList.remove('boton2')
            document.getElementById("btnHorario").classList.add('boton4')
        }
    }
}

//StartL es el HREF de la encuesta
//start es el boton de la encuesta
//Aprofile es el HREF del perfil
//btnpr es el boton del perfil 