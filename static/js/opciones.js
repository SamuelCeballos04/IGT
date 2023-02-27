function onload(flag){
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
        document.getElementById("aprofile").disabled = true
        document.getElementById("btnpr").disabled = true
    }
}