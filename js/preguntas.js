let preguntas = ["2.- Suelo caer en tentaciones que me dificultan cumplir con un compromiso", "3.- Busco conseguir beneficios inmediatos, en vez de esperar algo mejor más tarde", "4.- Continúo haciendo determinadas actividades placenteras a pesar de que los demás me advierten que me perjudican", "5.- Cuando algo se me antoja voy a por ello de forma inmediata, sin poder esperar"]
var i=0
async function onload(){
    bt= document.getElementById("siguiente");
    bt.addEventListener("click", ()=>{
        
        i=i+1
     })
}

async function activar(element){
    bt= document.getElementById("siguiente");
    bt.disabled = false;
}

async function enviar(){
    document.getElementById("link").setAttribute("href", "resultados.html")
}

async function pasar(){
    document.getElementById("texto").innerHTML = preguntas[i]
    if (i==3)
    {
        btn = document.getElementById("siguiente");
        btn.innerHTML= "Resultados";
        btn.id="resultados";
        document.getElementById("resultados").setAttribute("onclick", "enviar()")
    }
}