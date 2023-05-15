sec = 1
let seccion2 = []
let seccion3 = []
let seccion4 = []
flag1 = 0
flag2 = 0
flag3 = 0
var form = document.getElementById("form");
function onload(flag){
    console.log(flag)
}
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
async function activar(pregunta, valor){
    if (sec == 1){
        if (pregunta == "1"){
            if (valor == "1"){
                document.getElementById("Tanhos").disabled = false
                document.getElementById("Tanhos").setAttribute("required", "")
            }
            if (valor == "0"){
                document.getElementById("Tanhos").disabled = true
                document.getElementById("Tanhos").removeAttribute("required")
                document.getElementById("Tanhos").value = ""

            }
        }
        // if (pregunta == "2"){
        //     if (valor == "1"){
        //         document.getElementById("Aml").disabled = false
        //         document.getElementById("Aanhos").disabled = false
        //         document.getElementById("Aml").setAttribute("required", "")
        //         document.getElementById("Aanhos").setAttribute("required", "")
        //     }
        //     if (valor == "0"){
        //         document.getElementById("Aml").disabled = true
        //         document.getElementById("Aanhos").disabled = true
        //         document.getElementById("Aml").removeAttribute("required")
        //         document.getElementById("Aanhos").removeAttribute("required")
        //         document.getElementById("Aml").value = ""
        //         document.getElementById("Aanhos").value = ""
        //     }
        // }
        if (pregunta == "3"){
            if (valor == "1"){
                document.getElementById("Aml").disabled = false
                document.getElementById("Aanhos").disabled = false
                document.getElementById("Aml").setAttribute("required", "")
                document.getElementById("Aanhos").setAttribute("required", "")
            }
            if (valor == "0"){
                document.getElementById("Aml").disabled = true
                document.getElementById("Aanhos").disabled = true
                document.getElementById("Aml").removeAttribute("required")
                document.getElementById("Aanhos").removeAttribute("required")
                document.getElementById("Aml").value = ""
                document.getElementById("Aanhos").value = ""
            }
            // if (valor == "1"){
            //     document.getElementById("ALesp").disabled = false
            //     document.getElementById("ALesp").setAttribute("required", "")

            // }
            // if (valor == "0"){
            //     document.getElementById("ALesp").disabled = true
            //     document.getElementById("ALesp").removeAttribute("required")
            //     document.getElementById("ALesp").value = ""
            // }
        }
        if (pregunta == "4"){
            if (valor == "1"){
                document.getElementById("Psanhos").disabled = false
                document.getElementById("Psanhos").setAttribute("required", "")

            }
            if (valor == "0"){
                document.getElementById("Psanhos").disabled = true
                document.getElementById("Psanhos").removeAttribute("required")
                document.getElementById("Psanhos").value = ""
            }
        }
        if (pregunta == "5"){
            if (valor == "1"){
                document.getElementById("ALesp").disabled = false
                document.getElementById("ALesp").setAttribute("required", "")

            }
            if (valor == "0"){
                document.getElementById("ALesp").disabled = true
                document.getElementById("ALesp").removeAttribute("required")
                document.getElementById("ALesp").value = ""
            }
        }
        if (pregunta == "6"){
            if (valor == "1"){
                document.getElementById("Fdesp").disabled = false
                document.getElementById("Fdesp").setAttribute("required", "")

            }
            if (valor == "0"){
                document.getElementById("Fdesp").disabled = true
                document.getElementById("Fdesp").removeAttribute("required")
                document.getElementById("Fdesp").value = ""
            }
        }
    }
    if (sec == 2){

    }
    if (sec == 3){
        if (pregunta == "1"){
            flag1 = 1
        }
        if (pregunta == "2"){
            flag2 = 1
        }
        if (pregunta == "3"){
            flag3 = 1
        }
        if (flag1==1 && flag2==1 && flag3==1){
            document.getElementById("resultados").disabled = false
            var a = document.getElementById("link");
            a.href = "/resultados"
            document.getElementById("link").setAttribute("href", "resultados")
        }
    }
}
async function pasar(){
    // document.getElementById("texto").innerHTML = preguntas[i]
    // if (i == preguntas.length-1){ //Numero de secciones -1
    //     btn = document.getElementById("siguiente");
    //     btn.innerHTML= "Aceptar";
    //     btn.id="resultados";
    //     document.getElementById("resultados").setAttribute("onclick", "enviar()")
        
    // }
    // if (i==20)
    // {
    //     texto = document.getElementById("instruccion");
    //     texto.innerHTML = "Por favor seleccione cierto o falso para cada una de las siguientes afirmaciones"
    //     btn3 = document.getElementById("btnradio3");
    //     btn4 = document.getElementById("btnradio4");
    //     btn3.remove()
    //     btn4.remove()
    //     btn3 = document.getElementById("btn3");
    //     btn4 = document.getElementById("btn4");
    //     btn3.remove()
    //     btn4.remove()
    //     btn1 = document.getElementById("btn1");
    //     btn2 = document.getElementById("btn2");
    //     btn1.innerHTML= "Cierto";
    //     btn2.innerHTML= "Falso";
    //     //Por si quieren invertir el orden de las preguntas de cierto y falso
    //     //btn1.innerHTML= "Falso";
    //     //btn2.innerHTML= "Cierto";
    // }
    if (sec == 1){
        taba = document.getElementsByName("Tbtnradio")
        for (i = 0; i < taba.length; i++) {
            if (taba[i].checked)
                taba = taba[i].value
        }
        tabaA = document.getElementById("Tanhos").value
        seccion2.push(taba)
        seccion2.push(tabaA)
        fump = document.getElementsByName("Fpbtnradio")
        for (i=0; i < fump.length; i++) {
            if (fump[i].checked)
                fump = fump[i].value
        }
        seccion2.push(fump)
        alco = document.getElementsByName("Abtnradio")
        for (i = 0; i < alco.length; i++) {
            if (alco[i].checked)
                alco = alco[i].value
        }
        alcoMl = document.getElementById("Aml").value
        alcoA = document.getElementById("Aanhos").value
        seccion2.push(alco)
        seccion2.push(alcoMl)
        seccion2.push(alcoA)
        susps = document.getElementsByName("Psbtnradio")
        for (i = 0; i < susps.length; i++) {
            if (susps[i].checked)
                susps = susps[i].value
        }
        suspsA = document.getElementById("Psanhos").value
        seccion2.push(susps)
        seccion2.push(suspsA)
        aler = document.getElementsByName("ALbtnradio")
        for (i = 0; i < aler.length; i++) {
            if (aler[i].checked)
                aler = aler[i].value
        }
        alerE = document.getElementById("ALesp").value
        seccion2.push(aler)
        seccion2.push(alerE)
        farm = document.getElementsByName("Fdbtnradio")
        for (i = 0; i < farm.length; i++) {
            if (farm[i].checked)
                farm = farm[i].value
        }
        farmE = document.getElementById("Fdesp").value
        seccion2.push(farm)
        seccion2.push(farmE)
        if (flag == 0 && sec == 1){
            sec += 2
            console.log("HOMBRE")
            document.getElementById("instruccion").innerHTML = "Antecedentes personal Patológicos"
            document.getElementById("form").innerHTML = `
            <div class="container mt-0 mb-5" style="padding: 0;">
                <h2 class="texto" id="texto">Enfermedades Psicológicas</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Epsbtnradio" id="Epsbtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                    <label class="btn btn-warning" for="Epsbtnradio1" id="Epsbtn1">Si</label>
                
                    <input type="radio" class="btn-check" name="Epsbtnradio" id="Epsbtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                    <label class="btn btn-warning" for="Epsbtnradio2" id="Epsbtn2">No</label>
                </div>
                <h2 class="texto" id="texto">Enfermedades Psiquiátricas</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio1" autocomplete="off" onclick="activar('2', '1')" required value="1">
                    <label class="btn btn-warning" for="Epsqbtnradio1" id="Eppsbtn1">Si</label>
                
                    <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio2" autocomplete="off" onclick="activar('2', '0')" value="0">
                    <label class="btn btn-warning" for="Epsqbtnradio2" id="Epsqbtn2">No</label>
                </div>
                <h2 class="texto" id="texto">Enfermedades Neurológicas</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Enbtnradio" id="Enbtnradio1" autocomplete="off" onclick="activar('3', '1')" required value="1">
                    <label class="btn btn-warning" for="Enbtnradio1" id="Enbtn1">Si</label>
                
                    <input type="radio" class="btn-check" name="Enbtnradio" id="Enbtnradio2" autocomplete="off" onclick="activar('3', '0')" value="0">
                    <label class="btn btn-warning" for="Enbtnradio2" id="Enbtn2">No</label>
                </div>
                <a id="link">
                <button type="button" class="btn btn-light enviar" id="siguiente" disabled>Siguiente</button>
                </a>
                <div class="progress">
                    <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                </div>
            </div>`
            btn = document.getElementById("siguiente");
            btn.innerHTML= "Aceptar";
            btn.id="resultados";
            document.getElementById("resultados").setAttribute("onclick", "enviar()")
            return
        }
        else{
            sec += 1 
        }
        document.getElementById("instruccion").innerHTML = "Antecedentes Gineco-obstétricos"
        document.getElementById("form").innerHTML = `
        <div class="container mt-0 mb-5" style="padding: 0;" id="cuestionarioMujer">
            <h2 class="texto" id="texto">Menarquía</h2>
                <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important; margin-bottom: 0!important;">
                    <div class="col-3">
                        <input type="number" name="Manhos" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Manhos" required>
                    </div>
                    <label for="años" class="col-form-label col-3 d-flex justify-content-start" style="color: white;">Años</label>
                </div>
                <div class="btn-group d-flex align-items-center m-5" style="margin-top: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <label for="años" class="col-form-label col-3 d-flex justify-content-start" style="color: white;">¿Ciclos Regulares?</label>
                    <input type="radio" class="btn-check" name="Mbtnradio" id="Mbtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                    <label class="btn btn-warning" for="Mbtnradio1" id="Mbtn1">Si</label>
                
                    <input type="radio" class="btn-check" name="Mbtnradio" id="Mbtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                    <label class="btn btn-warning" for="Mbtnradio2" id="Mbtn2">No</label>
                </div>
            <h2 class="texto" id="texto">Fecha de última menstruación</h2>
            <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important;">
                <div class="col-5">
                    <input type="date" name="Fechaum" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Fechaum" required>
                </div>
            </div>
            <a id="link">
                <button type="submit" class="btn btn-light enviar" id="siguiente">Siguiente</button>
            </a>
            <div class="progress">
                <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
        </div>`
        return
    }
    console.log("HOLAAAA")
    console.log(taba)
    console.log(tabaA)
    console.log(fump)
    console.log(alco)
    console.log(alcoMl)
    console.log(alcoA)
    console.log(susps)
    console.log(suspsA)
    console.log(aler)
    console.log(alerE)
    console.log(farm)
    console.log(farmE)
    //console.log(mena)
    //console.log(menaA)
    // console.log("Valor del boton: ", valor)
    // console.log(preguntas.length)
    // progreso = intervalo + progreso
    // console.log(progreso)
    // puntos.push(valor)
    // total_puntos = total_puntos + valor
    // document.getElementById("barra").setAttribute("style", "width: "+progreso+"%")
    // document.getElementById("barra").setAttribute("aria-valuenow", progreso)
    // if (i < preguntas.length-1){
    //     document.getElementById("btnradio1").checked = false;
    //     document.getElementById("btnradio2").checked = false;
    // }
    // if (i < 20){
    //     document.getElementById("btnradio3").checked = false;
    //     document.getElementById("btnradio4").checked = false;
    // }
    // //document.getElementById("btnradio5").checked = false;
    // bt= document.getElementById("siguiente");
    // bt.disabled = true;
    // sec += 1
    if (sec ==2){
        // document.getElementById("instruccion").innerHTML = "Antecedentes Gineco-obstétricos"
        // document.getElementById("form").innerHTML = `
        // <div class="container mt-0 mb-5" style="padding: 0;">
        //     <h2 class="texto" id="texto">Menarquía</h2>
        //         <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important; margin-bottom: 0!important;">
        //             <div class="col-3">
        //                 <input type="number" name="Manhos" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Manhos" required>
        //             </div>
        //             <label for="años" class="col-form-label col-3 d-flex justify-content-start" style="color: white;">Años</label>
        //         </div>
        //         <div class="btn-group d-flex align-items-center m-5" style="margin-top: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
        //             <label for="años" class="col-form-label col-3 d-flex justify-content-start" style="color: white;">¿Ciclos Regulares?</label>
        //             <input type="radio" class="btn-check" name="Mbtnradio" id="Mbtnradio1" autocomplete="off" onclick="activar('4', '1')" required value="1">
        //             <label class="btn btn-warning" for="Mbtnradio1" id="Mbtn1">Si</label>
                
        //             <input type="radio" class="btn-check" name="Mbtnradio" id="Mbtnradio2" autocomplete="off" onclick="activar('4', '0')" value="0">
        //             <label class="btn btn-warning" for="Mbtnradio2" id="Mbtn2">No</label>
        //         </div>
        //     <h2 class="texto" id="texto">Fecha de última menstruación</h2>
        //     <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important;">
        //         <div class="col-5">
        //             <input type="date" name="Fechaum" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Fechaum">
        //         </div>
        //     </div>
        //     <a id="link">
        //         <button type="submit" class="btn btn-light enviar" id="siguiente">Siguiente</button>
        //     </a>
        //     <div class="progress">
        //         <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        //     </div>
        // </div>`
        mena = document.getElementsByName("Mbtnradio")
        for (i = 0; i < mena.length; i++) {
            if (mena[i].checked)
                mena = mena[i].value
        }
        seccion3.push(mena)
        menaA = document.getElementById("Manhos").value
        seccion3.push(menaA)
        fechaUM = document.getElementById("Fechaum").value
        seccion3.push(fechaUM)
        console.log(mena)
        console.log(menaA)
        console.log(fechaUM)
        sec += 1
        document.getElementById("instruccion").innerHTML = "Antecedentes personal Patológicos"
        document.getElementById("formulario").innerHTML = `
        <form onsubmit="enviar(); return false;" id="form">
        <div class="container mt-0 mb-5" style="padding: 0;">
            <h2 class="texto" id="texto">Enfermedades Psicológicas</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Epsbtnradio" id="Epsbtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                <label class="btn btn-warning" for="Epsbtnradio1" id="Epsbtn1">Si</label>
            
                <input type="radio" class="btn-check" name="Epsbtnradio" id="Epsbtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                <label class="btn btn-warning" for="Epsbtnradio2" id="Epsbtn2">No</label>
            </div>
            <h2 class="texto" id="texto">Enfermedades Psiquiátricas</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio1" autocomplete="off" onclick="activar('2', '1')" required value="1">
                <label class="btn btn-warning" for="Epsqbtnradio1" id="Eppsbtn1">Si</label>
            
                <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio2" autocomplete="off" onclick="activar('2', '0')" value="0">
                <label class="btn btn-warning" for="Epsqbtnradio2" id="Epsqbtn2">No</label>
            </div>
            <h2 class="texto" id="texto">Enfermedades Neurológicas</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Enbtnradio" id="Enbtnradio1" autocomplete="off" onclick="activar('3', '1')" required value="1">
                <label class="btn btn-warning" for="Enbtnradio1" id="Enbtn1">Si</label>
            
                <input type="radio" class="btn-check" name="Enbtnradio" id="Enbtnradio2" autocomplete="off" onclick="activar('3', '0')" value="0">
                <label class="btn btn-warning" for="Enbtnradio2" id="Enbtn2">No</label>
            </div>
            <a id="link">
                <button type="button" class="btn btn-light enviar" id="siguiente" disabled>Siguiente</button>
            </a>
            <div class="progress">
                <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
        </div>
        </form>`
        // var form = document.getElementById("form");
        // function handleForm(event) { event.preventDefault(); } 
        // form.addEventListener('submit', handleForm);
        btn = document.getElementById("siguiente");
        btn.innerHTML= "Aceptar";
        btn.id="resultados";
        document.getElementById("resultados").setAttribute("onclick", "enviar()")
        return
    }
    // if (sec == 3){ //Numero de secciones -1
    //     enfps = document.getElementsByName("Epsbtnradio")
    //     for (i = 0; i < mena.length; i++) {
    //         if (enfps[i].checked)
    //             enfps = enfps[i].value
    //     }
    //     seccion4.push(enfps)
    //     enfpsq = document.getElementsByName("Epsqbtnradio")
    //     for (i = 0; i < mena.length; i++) {
    //         if (enfpsq[i].checked)
    //             enfpsq = enfpsq[i].value
    //     }
    //     seccion4.push(enfpsq)
    //     enfne = document.getElementsByName("Enbtnradio")
    //     for (i = 0; i < mena.length; i++) {
    //         if (enfne[i].checked)
    //             enfne = enfne[i].value
    //     }
    //     seccion4.push(enfne)
    // }
}

async function enviar(){
    enfps = document.getElementsByName("Epsbtnradio")
    for (i = 0; i < enfps.length; i++) {
        if (enfps[i].checked)
            enfps = enfps[i].value
    }
    seccion4.push(enfps)
    enfpsq = document.getElementsByName("Epsqbtnradio")
    for (i = 0; i < enfpsq.length; i++) {
        if (enfpsq[i].checked)
            enfpsq = enfpsq[i].value
    }
    seccion4.push(enfpsq)
    enfne = document.getElementsByName("Enbtnradio")
    for (i = 0; i < enfne.length; i++) {
        if (enfne[i].checked)
            enfne = enfne[i].value
    }
    seccion4.push(enfne)
    var a = document.getElementById("link");
    a.href = "/resultados"
    document.getElementById("link").setAttribute("href", "resultados")
    const request = new XMLHttpRequest()
    request.open('POST', `/resultados/${JSON.stringify(seccion2)}/${JSON.stringify(seccion3)}/${JSON.stringify(seccion4)}`)
    request.send();
    // $.ajax({
    //     type:'POST',
    //     url:'/resultadoss',
    //     data:{
    //         sec2:JSON.stringify(seccion2),
    //         sec3:JSON.stringify(seccion3),
    //         sec4:JSON.stringify(seccion4)
    //     },
    //     success: function()
    //     {
    //         alert('CAGADA')
    //     }
    // })
}