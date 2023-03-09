//let preguntas = ["2.- Suelo caer en tentaciones que me dificultan cumplir con un compromiso", "3.- Busco conseguir beneficios inmediatos, en vez de esperar algo mejor más tarde", "4.- Continúo haciendo determinadas actividades placenteras a pesar de que los demás me advierten que me perjudican", "5.- Cuando algo se me antoja voy a por ello de forma inmediata, sin poder esperar", "Has terminado la encuesta, haz clic en aceptar para continuar"]
let preguntas = ["2. Me di cuenta que tenía la boca seca", 
                "3. No podía sentir ningún sentimiento positivo", 
                "4. Se me hizo difícil respirar", 
                "5. Se me hizo difícil tomar la iniciativa para hacer cosas", 
                "6. Reaccioné exageradamente en ciertas situaciones", 
                "7. Sentí que mis manos temblaban", 
                "8. He sentido que estaba gastando una gran cantidad de energía", 
                "9. Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo", 
                "10. He sentido que no había nada que me ilusionara", 
                "11. Me he sentido inquieto", 
                "12. Se me hizo difícil relajarme", 
                "13. Me sentí triste y deprimido", 
                "14. No toleré nada que no me permitiera continuar con lo que estaba haciendo", 
                "15. Sentí que estaba al punto de pánico", 
                "16. No me pude entusiasmar por nada", 
                "17. Sentí que valía muy poco como persona", 
                "18. He tendido a sentirme enfadado con facilidad", 
                "19. Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico", 
                "20. Tuve miedo sin razón", 
                "21. Sentí que la vida no tenía ningún sentido",
                "22. Tienes un diagnóstico previo de enfermedades psicológicas, neurológicas o psiquiátricas",
                "23. Eres zurdo",
                "24. Consumes alcohol o drogas",
                "25. Tienes un diagnóstico de enfermedades visuales",
                "Has terminado la encuesta, haz clic en aceptar para continuar"]
var i=0
let intervalo = 100/(preguntas.length);
let progreso = 0
var puntos = []
var valor
var total_puntos = 0

window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Write something clever here..";
  });
async function onload(){
    bt= document.getElementById("siguiente");
    bt.addEventListener("click", ()=>{
        
        i=i+1
     })
}


async function activar(element, val){
    bt= document.getElementById("siguiente");
    bt.disabled = false;
    valor = val
}

async function enviar(){
    document.getElementById("link").setAttribute("href", "resultados")
    console.log(total_puntos)
    const request = new XMLHttpRequest()
    request.open('POST', `/resultados/${JSON.stringify(puntos)}/${JSON.stringify(total_puntos)}`)
    request.send();
}

async function pasar(){
    document.getElementById("texto").innerHTML = preguntas[i]
    if (i == preguntas.length-1){
        btn2 = document.getElementById("btnradio2");
        btn1 = document.getElementById("btnradio1");
        btn2.remove()
        btn1.remove()
        btn2 = document.getElementById("btn2");
        btn1 = document.getElementById("btn1");
        btn2.remove()
        btn1.remove()
        console.log("Los valores son: ", puntos)
        btn = document.getElementById("siguiente");
        btn.innerHTML= "Aceptar";
        btn.id="resultados";
        document.getElementById("resultados").setAttribute("onclick", "enviar()")
        
    }
    if (i==20)
    {
        texto = document.getElementById("instruccion");
        texto.innerHTML = "Por favor seleccione cierto o falso para cada una de las siguientes afirmaciones"
        btn3 = document.getElementById("btnradio3");
        btn4 = document.getElementById("btnradio4");
        btn3.remove()
        btn4.remove()
        btn3 = document.getElementById("btn3");
        btn4 = document.getElementById("btn4");
        btn3.remove()
        btn4.remove()
        btn1 = document.getElementById("btn1");
        btn2 = document.getElementById("btn2");
        btn1.innerHTML= "Cierto";
        btn2.innerHTML= "Falso";
    }
    console.log("Valor del boton: ", valor)
    console.log(preguntas.length)
    progreso = intervalo + progreso
    console.log(progreso)
    puntos.push(valor)
    total_puntos = total_puntos + valor
    document.getElementById("barra").setAttribute("style", "width: "+progreso+"%")
    document.getElementById("barra").setAttribute("aria-valuenow", progreso)
    if (i < preguntas.length-1){
        document.getElementById("btnradio1").checked = false;
        document.getElementById("btnradio2").checked = false;
    }
    if (i < 20){
        document.getElementById("btnradio3").checked = false;
        document.getElementById("btnradio4").checked = false;
    }
    //document.getElementById("btnradio5").checked = false;
    bt= document.getElementById("siguiente");
    bt.disabled = true;
}