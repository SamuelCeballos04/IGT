sec = 1
let seccion2 = []
let seccion3 = []
let seccion4 = []
flag1 = 0
flag2 = 0
flag3 = 0
flag4 = 0
flag5 = 0
flag6 = 0
flag7 = 0
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
                document.getElementById("Tcant").disabled = false
                document.getElementById("Tcant").setAttribute("required", "")
            }
            if (valor == "0"){
                document.getElementById("Tanhos").disabled = true
                document.getElementById("Tanhos").removeAttribute("required")
                document.getElementById("Tanhos").value = "0"
                document.getElementById("Tcant").disabled = true
                document.getElementById("Tcant").removeAttribute("required")
                document.getElementById("Tcant").value = "0"

            }
        }
        if (pregunta == "2"){
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
                document.getElementById("Aml").value = "0"
                document.getElementById("Aanhos").value = "0"
            }
        }
        if (pregunta == "3"){
            if (valor == "1"){
                document.getElementById("Pscant").disabled = false
                document.getElementById("Psanhos").disabled = false
                document.getElementById("Pscant").setAttribute("required", "")
                document.getElementById("Psanhos").setAttribute("required", "")
            }
            if (valor == "0"){
                document.getElementById("Pscant").disabled = true
                document.getElementById("Psanhos").disabled = true
                document.getElementById("Pscant").removeAttribute("required")
                document.getElementById("Psanhos").removeAttribute("required")
                document.getElementById("Pscant").value = "0"
                document.getElementById("Psanhos").value = "0"
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
        // if (pregunta == "4"){
        //     if (valor == "1"){
        //         document.getElementById("Psanhos").disabled = false
        //         document.getElementById("Psanhos").setAttribute("required", "")

        //     }
        //     if (valor == "0"){
        //         document.getElementById("Psanhos").disabled = true
        //         document.getElementById("Psanhos").removeAttribute("required")
        //         document.getElementById("Psanhos").value = "0"
        //     }
        // }
        // if (pregunta == "5"){
        //     if (valor == "1"){
        //         document.getElementById("ALesp").disabled = false
        //         document.getElementById("ALesp").setAttribute("required", "")

        //     }
        //     if (valor == "0"){
        //         document.getElementById("ALesp").disabled = true
        //         document.getElementById("ALesp").removeAttribute("required")
        //         document.getElementById("ALesp").value = "No"
        //     }
        // }
        // if (pregunta == "6"){
        //     if (valor == "1"){
        //         document.getElementById("Fdesp").disabled = false
        //         document.getElementById("Fdesp").setAttribute("required", "")

        //     }
        //     if (valor == "0"){
        //         document.getElementById("Fdesp").disabled = true
        //         document.getElementById("Fdesp").removeAttribute("required")
        //         document.getElementById("Fdesp").value = "No"
        //     }
        // }
    }
    if (sec == 2){
        if (pregunta == "4"){
            if (valor == "1"){
                document.getElementById("Anesp").disabled = false
                document.getElementById("Anesp").setAttribute("required", "")
            }
            if (valor == "0"){
                document.getElementById("Anesp").disabled = true
                document.getElementById("Anesp").removeAttribute("required")
                document.getElementById("Anesp").value = "No"
            }
        }
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
            if (valor == "1"){
                document.getElementById("EpscEs").disabled = false
                document.getElementById("EpscEs").required = true
                document.getElementById("PEpscbtnradio1").disabled = false
                document.getElementById("PEpscbtnradio1").required = true
                document.getElementById("PEpscbtnradio2").disabled = false
                document.getElementById("PEpsctexto").style.color = "white";
            }
            if (valor == "0"){
                flag4 = 0
                document.querySelector('input[name="PEpscbtnradio"]:checked').checked = false
                document.getElementById("EpscEs").disabled = true
                document.getElementById("EpscEs").value = "No"
                document.getElementById("EpscEs").required = false
                document.getElementById("PEpscbtnradio1").disabled = true
                document.getElementById("PEpscbtnradio1").required = false
                document.getElementById("PEpscbtnradio2").disabled = true
                document.getElementById("PEpsctexto").style.color = "rgba(255, 255, 255, 0.735)";
            }
        }
        if (pregunta == "4"){
            flag4 = 1
        }
        if (pregunta == "5"){
            flag5 = 1
            if (valor == "1"){
                document.getElementById("EpsqEs").disabled = false
                document.getElementById("EpsqEs").required = true
                document.getElementById("PEpsqbtnradio1").disabled = false
                document.getElementById("PEpsqbtnradio1").required = true
                document.getElementById("PEpsqbtnradio2").disabled = false
                document.getElementById("PEpsqtexto").style.color = "white";
            }
            if (valor == "0"){
                flag6 = 0
                document.querySelector('input[name="PEpsqbtnradio"]:checked').checked = false
                document.getElementById("EpsqEs").disabled = true
                document.getElementById("EpsqEs").required = false
                document.getElementById("EpsqEs").value = "No"
                document.getElementById("PEpsqbtnradio1").disabled = true
                document.getElementById("PEpsqbtnradio1").required = false
                document.getElementById("PEpsqbtnradio2").disabled = true
                document.getElementById("PEpsqtexto").style.color = "rgba(255, 255, 255, 0.735)";
            }
        }
        if (pregunta == "6"){
            flag6 = 1
        }
        if (pregunta == "7"){
            flag7 = 1
        }
        bandConf = 0
        bandConf2 = 0
        if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag5 == 1 && flag7 == 1){
            console.log("HOLA")
            pr3 = document.querySelector('input[name="Epscbtnradio"]:checked').value;
            if (pr3 == 1){
                bandConf = 0
                if (flag4 == 1){
                    bandConf = 1
                }
                else{
                    document.getElementById("resultados").disabled = true
                    var a = document.getElementById("link");
                    a.href = "" //Version Local
                }
            }
            else if (pr3 == 0){
                bandConf = 1
            }
            pr5 = document.querySelector('input[name="Epsqbtnradio"]:checked').value;
            if (pr5 == 1){
                bandConf2 = 0
                if (flag6 == 1){
                    bandConf2 = 1
                }
                else{
                    document.getElementById("resultados").disabled = true
                    var a = document.getElementById("link");
                    a.href = "" //Version Local
                }
            }
            else if (pr5 == 0){
                bandConf2 = 1
            }
        }
        if (bandConf == 1 && bandConf2 == 1){
            document.getElementById("resultados").disabled = false
            var a = document.getElementById("link");
            //a.href = "/opciones" //Version Local
            a.href = "/igt/opciones" //Version En linea
            document.getElementById("link").setAttribute("href", "opciones")
        }
        // if (pregunta == "1"){
        //     flag1 = 1
        // }
        // if (pregunta == "2"){
        //     flag2 = 1
        // }
        // if (pregunta == "3"){
        //     flag3 = 1
        // }
        // if (flag1==1 && flag2==1 && flag3==1){
        //     document.getElementById("resultados").disabled = false
        //     var a = document.getElementById("link");
        //     //a.href = "/resultados" //Version Local
        //     a.href = "/igt/resultados" //Version En linea
        //     document.getElementById("link").setAttribute("href", "resultados")
        // }
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
        tabaC = document.getElementById("Tcant").value
        seccion2.push(taba)
        seccion2.push(tabaC)
        seccion2.push(tabaA)
        // fump = document.getElementsByName("Fpbtnradio")
        // for (i=0; i < fump.length; i++) {
        //     if (fump[i].checked)
        //         fump = fump[i].value
        // }
        // seccion2.push(fump)
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
        suspsD = document.getElementById("Pscant").value
        suspsA = document.getElementById("Psanhos").value
        seccion2.push(susps)
        seccion2.push(suspsD)
        seccion2.push(suspsA)
        // aler = document.getElementsByName("ALbtnradio")
        // for (i = 0; i < aler.length; i++) {
        //     if (aler[i].checked)
        //         aler = aler[i].value
        // }
        // alerE = document.getElementById("ALesp").value
        // seccion2.push(aler)
        // seccion2.push(alerE)
        // farm = document.getElementsByName("Fdbtnradio")
        // for (i = 0; i < farm.length; i++) {
        //     if (farm[i].checked)
        //         farm = farm[i].value
        // }
        // farmE = document.getElementById("Fdesp").value
        // seccion2.push(farm)
        // seccion2.push(farmE)
        if (flag == 0 && sec == 1){
            sec += 2
            console.log("HOMBRE")
            document.getElementById("instruccion").innerHTML = "Antecedentes personal Patológicos"
            document.getElementById("formulario").innerHTML = `
            <form onsubmit="enviar(); return false;" id="form">
            <div class="container mt-0 mb-5" style="padding: 0;">
                <h2 class="texto" id="texto">¿Padeces epilepsia?</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Epibtnradio" id="Epibtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                    <label class="btn btn-warning" for="Epibtnradio1" id="Epibtn1">Si</label>

                    <input type="radio" class="btn-check" name="Epibtnradio" id="Epibtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                    <label class="btn btn-warning" for="Epibtnradio2" id="Epibtn2">No</label>
                </div>
                <h2 class="texto" id="texto" >¿Tu mamá o papá lo padecen?</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="PEpibtnradio" id="PEpibtnradio1" autocomplete="off" onclick="activar('2', '1')" required value="1" >
                    <label class="btn btn-warning" for="PEpibtnradio1" id="PEpibtn1">Si</label>

                    <input type="radio" class="btn-check" name="PEpibtnradio" id="PEpibtnradio2" autocomplete="off" onclick="activar('2', '0')" value="0" >
                    <label class="btn btn-warning" for="PEpibtnradio2" id="PEpibtn2">No</label>
                </div>
                <h2 class="texto" id="texto">¿Padeces alguna enfermedad psicológica diagnosticada? (Ansiedad, Depresión, TDA, entre otras) </h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Epscbtnradio" id="Epscbtnradio1" autocomplete="off" onclick="activar('3', '1')" required value="1">
                    <label class="btn btn-warning" for="Epscbtnradio1" id="Epscbtn1">Si</label>

                    <input type="radio" class="btn-check" name="Epscbtnradio" id="Epscbtnradio2" autocomplete="off" onclick="activar('3', '0')" value="0">
                    <label class="btn btn-warning" for="Epscbtnradio2" id="Epscbtn2">No</label>
                </div>
                <div class="row align-items-center m-5 justify-content-center h-auto" style="margin-top: 0!important;">
                    <label for="EpscEs" class="col-form-label col-2 d-flex justify-content-center" style="color: white;">¿Cuál o cuáles? </label>
                    <div class="col h-auto">
                        <input type="text" name="EpscEs" class="form-control" style="height: 20vw; margin-bottom: 0;"id="EpscEs" value="No" disabled>
                    </div>
                </div>
                <h2 class="texto" id="texto" style="color: rgba(255, 255, 255, 0.735);">¿Tu mamá o papá lo padecen?</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="PEpscbtnradio" id="PEpscbtnradio1" autocomplete="off" onclick="activar('4', '1')" required value="1" disabled>
                    <label class="btn btn-warning" for="PEpscbtnradio1" id="PEpscbtn1">Si</label>

                    <input type="radio" class="btn-check" name="PEpscbtnradio" id="PEpscbtnradio2" autocomplete="off" onclick="activar('4', '0')" value="0" disabled>
                    <label class="btn btn-warning" for="PEpscbtnradio2" id="PEpscbtn2">No</label>
                </div>
                <h2 class="texto" id="texto">¿Padeces alguna enfermedad psiquiátrica diagnosticada? (Trastorno bipolar, Esquizofrenia, psicosis, entre otras) </h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio1" autocomplete="off" onclick="activar('5', '1')" required value="1">
                    <label class="btn btn-warning" for="Epsqbtnradio1" id="Epsqsbtn1">Si</label>

                    <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio2" autocomplete="off" onclick="activar('5', '0')" value="0">
                    <label class="btn btn-warning" for="Epsqbtnradio2" id="Epsqbtn2">No</label>
                </div>
                <div class="row align-items-center m-5 justify-content-center h-auto" style="margin-top: 0!important;">
                    <label for="EpsqEs" class="col-form-label col-2 d-flex justify-content-center" style="color: white;">¿Cuál o cuáles? </label>
                    <div class="col h-auto">
                        <input type="text" name="EpsqEs" class="form-control" style="height: 20vw; margin-bottom: 0;"id="EpsqEs" value="No" disabled>
                    </div>
                </div>
                <h2 class="texto" id="texto" style="color: rgba(255, 255, 255, 0.735);">¿Tu mamá o papá lo padecen?</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="PEpsqbtnradio" id="PEpsqbtnradio1" autocomplete="off" onclick="activar('6', '1')" required value="1" disabled>
                    <label class="btn btn-warning" for="PEpsqbtnradio1" id="PEpsqbtn1">Si</label>

                    <input type="radio" class="btn-check" name="PEpsqbtnradio" id="PEpsqbtnradio2" autocomplete="off" onclick="activar('6', '0')" value="0" disabled>
                    <label class="btn btn-warning" for="PEpsqbtnradio2" id="PEpsqbtn2">No</label>
                </div>
                <h2 class="texto" id="texto">4.	¿Alguna vez has tenido algún traumatismo craneoencefálico (golpes en la cabeza que te hayan causado inconsciencia)?</h2>
                <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio1" autocomplete="off" onclick="activar('7', '1')" required value="1">
                    <label class="btn btn-warning" for="Traumabtnradio1" id="Traumabtn1">Si</label>

                    <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio2" autocomplete="off" onclick="activar('7', '0')" value="0">
                    <label class="btn btn-warning" for="Traumabtnradio2" id="Traumabtn2">No</label>

                    <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio3" autocomplete="off" onclick="activar('7', '2')" value="2">
                    <label class="btn btn-warning" for="Traumabtnradio3" id="Traumabtn3">No lo sé</label>
                </div>
                <a id="link">
                    <button type="button" class="btn btn-light enviar" id="siguiente" disabled>Siguiente</button>
                </a>
                <div class="progress">
                    <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                </div>
            </div>
            </form>`
            btn = document.getElementById("siguiente");
            btn.innerHTML= "Aceptar";
            btn.id="resultados";
            document.getElementById("resultados").setAttribute("onclick", "enviar()")
            seccion3.push("NO APLICA")
            seccion3.push("NO APLICA")
            seccion3.push("NO APLICA")
            seccion3.push("NO APLICA")
            seccion3.push("NO APLICA")
            return
        }
        else{
            sec += 1
        }
        document.getElementById("instruccion").innerHTML = "Antecedentes Gineco-obstétricos"
        document.getElementById("form").innerHTML = `
        <div class="container mt-0 mb-5" style="padding: 0;" id="cuestionarioMujer">
        <h2 class="texto" id="texto">Fecha de última menstruación (día del primer sangrado)</h2>
            <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important;">
                <div class="col-5">
                    <input type="date" name="Fechaum" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Fechaum" required>
                </div>
            </div>
        <h2 class="texto" id="texto">¿Tus ciclos son regulares?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-top: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Crbtnradio" id="Crbtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                <label class="btn btn-warning" for="Crbtnradio1" id="Crbtn1">Si</label>
                <input type="radio" class="btn-check" name="Crbtnradio" id="Crbtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                <label class="btn btn-warning" for="Crbtnradio2" id="Crbtn2">No</label>
            </div>
        </div>
        <h2 class="texto" id="texto">¿Cuántos días dura tu ciclo menstrual?</h2>
            <div class="row align-items-center m-5 justify-content-center" style="margin-top: 0!important;">
                <div class="col-5">
                    <input type="number" name="Dciclo" class="form-control" style="height: 4vh; margin-bottom: 0;" id="Dciclo" required value = "0" min = "1" max = "20">
                </div>
        </div>
        <h2 class="texto" id="texto">¿Usas anticonceptivos hormonales (pastillas, parches u otros) de forma regular?</h2>
        <div class="btn-group d-flex align-items-center m-5" style="margin-top: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="Anbtnradio" id="Anbtnradio1" autocomplete="off" onclick="activar('4', '1')" required value="1">
            <label class="btn btn-warning" for="Anbtnradio1" id="ALbtn1">Si</label>
            <input type="radio" class="btn-check" name="Anbtnradio" id="Anbtnradio2" autocomplete="off" onclick="activar('4', '0')" value="0">
            <label class="btn btn-warning" for="Anbtnradio2" id="ALbtn2">No</label>
                </div>
                <div class="row align-items-center m-5 justify-content-center h-auto" style="margin-top: 0!important;">
                    <label for="años" class="col-form-label col-2 d-flex justify-content-center" style="color: white;">¿Cuáles? </label>
                    <div class="col h-auto">
                        <input type="text" name="Anesp" class="form-control" style="height: 20vw; margin-bottom: 0;"id="Anesp" value="No" disabled>
                    </div>
                </div>
        </div>
            <a id="link">
                <button type="submit" class="btn btn-light enviar" id="siguiente">Siguiente</button>
            </a>
            <div class="progress">
                <div id="barra" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
            </div>
            `
        return
    }
    console.log("HOLAAAA")
    console.log(seccion2)
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
        fechaUM = document.getElementById("Fechaum").value
        seccion3.push(fechaUM)
        ciclo = document.getElementsByName("Crbtnradio")
        for (i = 0; i < ciclo.length; i++) {
            if (ciclo[i].checked)
                ciclo = ciclo[i].value
        }
        seccion3.push(ciclo)
        diasCiclo = document.getElementById("Dciclo").value
        seccion3.push(diasCiclo)
        anti = document.getElementsByName("Anbtnradio")
        for (i = 0; i < anti.length; i++) {
            if (anti[i].checked)
                anti = anti[i].value
        }
        antiEsp = document.getElementById("Anesp").value
        seccion3.push(anti)
        seccion3.push(antiEsp)
        console.log(seccion3)
        sec += 1



        document.getElementById("instruccion").innerHTML = "Antecedentes personal Patológicos"
        document.getElementById("formulario").innerHTML = `
        <form onsubmit="enviar(); return false;" id="form">
        <div class="container mt-0 mb-5" style="padding: 0;">
            <h2 class="texto" id="texto">¿Padeces epilepsia?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Epibtnradio" id="Epibtnradio1" autocomplete="off" onclick="activar('1', '1')" required value="1">
                <label class="btn btn-warning" for="Epibtnradio1" id="Epibtn1">Si</label>

                <input type="radio" class="btn-check" name="Epibtnradio" id="Epibtnradio2" autocomplete="off" onclick="activar('1', '0')" value="0">
                <label class="btn btn-warning" for="Epibtnradio2" id="Epibtn2">No</label>
            </div>
            <h2 class="texto" id="PEpitexto" ">¿Tu mamá o papá lo padecen?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="PEpibtnradio" id="PEpibtnradio1" autocomplete="off" onclick="activar('2', '1')" required value="1">
                <label class="btn btn-warning" for="PEpibtnradio1" id="PEpibtn1">Si</label>

                <input type="radio" class="btn-check" name="PEpibtnradio" id="PEpibtnradio2" autocomplete="off" onclick="activar('2', '0')" value="0">
                <label class="btn btn-warning" for="PEpibtnradio2" id="PEpibtn2">No</label>
            </div>
            <h2 class="texto" id="texto">¿Padeces alguna enfermedad psicológica diagnosticada? (Ansiedad, Depresión, TDA, entre otras) </h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Epscbtnradio" id="Epscbtnradio1" autocomplete="off" onclick="activar('3', '1')" required value="1">
                <label class="btn btn-warning" for="Epscbtnradio1" id="Epscbtn1">Si</label>

                <input type="radio" class="btn-check" name="Epscbtnradio" id="Epscbtnradio2" autocomplete="off" onclick="activar('3', '0')" value="0">
                <label class="btn btn-warning" for="Epscbtnradio2" id="Epscbtn2">No</label>
            </div>
            <div class="row align-items-center m-5 justify-content-center h-auto" style="margin-top: 0!important;">
                <label for="EpscEs" class="col-form-label col-2 d-flex justify-content-center" style="color: white;">¿Cuál o cuáles? </label>
                <div class="col h-auto">
                    <input type="text" name="EpscEs" class="form-control" style="height: 20vw; margin-bottom: 0;"id="EpscEs" value="No" disabled>
                </div>
            </div>
            <h2 class="texto" id="PEpsctexto" style="color: rgba(255, 255, 255, 0.735);">¿Tu mamá o papá lo padecen?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="PEpscbtnradio" id="PEpscbtnradio1" autocomplete="off" onclick="activar('4', '1')" required value="1" disabled>
                <label class="btn btn-warning" for="PEpscbtnradio1" id="PEpscbtn1">Si</label>

                <input type="radio" class="btn-check" name="PEpscbtnradio" id="PEpscbtnradio2" autocomplete="off" onclick="activar('4', '0')" value="0" disabled>
                <label class="btn btn-warning" for="PEpscbtnradio2" id="PEpscbtn2">No</label>
            </div>
            <h2 class="texto" id="PEpstexto">¿Padeces alguna enfermedad psiquiátrica diagnosticada? (Trastorno bipolar, Esquizofrenia, psicosis, entre otras) </h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio1" autocomplete="off" onclick="activar('5', '1')" required value="1">
                <label class="btn btn-warning" for="Epsqbtnradio1" id="Epsqsbtn1">Si</label>

                <input type="radio" class="btn-check" name="Epsqbtnradio" id="Epsqbtnradio2" autocomplete="off" onclick="activar('5', '0')" value="0">
                <label class="btn btn-warning" for="Epsqbtnradio2" id="Epsqbtn2">No</label>
            </div>
            <div class="row align-items-center m-5 justify-content-center h-auto" style="margin-top: 0!important;">
                <label for="EpsqEs" class="col-form-label col-2 d-flex justify-content-center" style="color: white;">¿Cuál o cuáles? </label>
                <div class="col h-auto">
                    <input type="text" name="EpsqEs" class="form-control" style="height: 20vw; margin-bottom: 0;"id="EpsqEs" value="No" disabled>
                </div>
            </div>
            <h2 class="texto" id="PEpsqtexto" style="color: rgba(255, 255, 255, 0.735);">¿Tu mamá o papá lo padecen?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important; role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="PEpsqbtnradio" id="PEpsqbtnradio1" autocomplete="off" onclick="activar('6', '1')" required value="1" disabled>
                <label class="btn btn-warning" for="PEpsqbtnradio1" id="PEpsqbtn1">Si</label>

                <input type="radio" class="btn-check" name="PEpsqbtnradio" id="PEpsqbtnradio2" autocomplete="off" onclick="activar('6', '0')" value="0" disabled>
                <label class="btn btn-warning" for="PEpsqbtnradio2" id="PEpsqbtn2">No</label>
            </div>
            <h2 class="texto" id="texto">4.	¿Alguna vez has tenido algún traumatismo craneoencefálico (golpes en la cabeza que te hayan causado inconsciencia)?</h2>
            <div class="btn-group d-flex align-items-center m-5" style="margin-bottom: 1.5rem!important;" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio1" autocomplete="off" onclick="activar('7', '1')" required value="1">
                <label class="btn btn-warning" for="Traumabtnradio1" id="Traumabtn1">Si</label>

                <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio2" autocomplete="off" onclick="activar('7', '0')" value="0">
                <label class="btn btn-warning" for="Traumabtnradio2" id="Traumabtn2">No</label>

                <input type="radio" class="btn-check" name="Traumabtnradio" id="Traumabtnradio3" autocomplete="off" onclick="activar('7', '2')" value="2">
                <label class="btn btn-warning" for="Traumabtnradio3" id="Traumabtn3">No lo sé</label>
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
    // enfps = document.getElementsByName("Epsbtnradio")
    // for (i = 0; i < enfps.length; i++) {
    //     if (enfps[i].checked)
    //         enfps = enfps[i].value
    // }
    // seccion4.push(enfps)
    // enfpsq = document.getElementsByName("Epsqbtnradio")
    // for (i = 0; i < enfpsq.length; i++) {
    //     if (enfpsq[i].checked)
    //         enfpsq = enfpsq[i].value
    // }
    // seccion4.push(enfpsq)
    // enfne = document.getElementsByName("Enbtnradio")
    // for (i = 0; i < enfne.length; i++) {
    //     if (enfne[i].checked)
    //         enfne = enfne[i].value
    // }
    // seccion4.push(enfne)
    epilepsia = document.querySelector('input[name="Epibtnradio"]:checked').value;
    epilepsiaPadres = document.querySelector('input[name="PEpibtnradio"]:checked').value;
    seccion4.push(epilepsia)
    seccion4.push(epilepsiaPadres)
    ePsi = document.querySelector('input[name="Epscbtnradio"]:checked').value;
    ePsiEs = document.getElementById("EpscEs").value
    if (ePsi == 1){
        ePsiPadres = document.querySelector('input[name="PEpscbtnradio"]:checked').value;
    }
    else{
        ePsiPadres = 0
    }
    seccion4.push(ePsi)
    seccion4.push(ePsiEs)
    seccion4.push(ePsiPadres)
    ePsiq = document.querySelector('input[name="Epsqbtnradio"]:checked').value;
    ePsiqEs = document.getElementById("EpsqEs").value
    if (ePsiq == 1){
        ePsiqPadres = document.querySelector('input[name="PEpsqbtnradio"]:checked').value;
    }
    else{
        ePsiqPadres = 0
    }
    seccion4.push(ePsiq)
    seccion4.push(ePsiqEs)
    seccion4.push(ePsiqPadres)
    traumatismo = document.querySelector('input[name="Traumabtnradio"]:checked').value;
    seccion4.push(traumatismo)
    var a = document.getElementById("link");
    a.href = "/opciones"
    document.getElementById("link").setAttribute("href", "opciones")
    const request = new XMLHttpRequest()
    request.open('POST', `/resultados/${JSON.stringify(seccion2)}/${JSON.stringify(seccion3)}/${JSON.stringify(seccion4)}`) //Version Local
    // request.open('POST', `/igt/resultados/${JSON.stringify(seccion2)}/${JSON.stringify(seccion3)}/${JSON.stringify(seccion4)}`) //Version En linea
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