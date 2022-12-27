let preguntas = ["2.- Suelo caer en tentaciones que me dificultan cumplir con un compromiso", "3.- Busco conseguir beneficios inmediatos, en vez de esperar algo mejor más tarde", "4.- Continúo haciendo determinadas actividades placenteras a pesar de que los demás me advierten que me perjudican", "5.- Cuando algo se me antoja voy a por ello de forma inmediata, sin poder esperar"]
var i=0
let intervalo = 100/(preguntas.length+1);
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
    if (i==4)
    {
        btn = document.getElementById("siguiente");
        btn.innerHTML= "Resultados";
        btn.id="resultados";
        document.getElementById("resultados").setAttribute("onclick", "enviar()")
    }
    console.log(preguntas.length)
    progreso = intervalo + progreso
    console.log(progreso)
    puntos.push(valor)
    total_puntos = total_puntos + valor
    document.getElementById("barra").setAttribute("style", "width: "+progreso+"%")
    document.getElementById("barra").setAttribute("aria-valuenow", progreso)
    document.getElementById("btnradio1").checked = false;
    document.getElementById("btnradio2").checked = false;
    document.getElementById("btnradio3").checked = false;
    document.getElementById("btnradio4").checked = false;
    document.getElementById("btnradio5").checked = false;
    bt= document.getElementById("siguiente");
    bt.disabled = true;
}