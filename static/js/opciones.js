function onload(flag){
    if(flag == 1){
        document.getElementById("start").disabled = true
        document.getElementById("startL").disabled = true
        document.getElementById("start").innerHTML = "YA REALIZASTE LA ENCUESTA"
        document.getElementById("start").classList.remove('boton2')
        document.getElementById("start").classList.add('boton4')
    }
}