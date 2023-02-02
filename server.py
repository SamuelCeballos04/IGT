from flask import Flask, render_template, request, redirect, url_for, make_response,flash, session
from conexion import conexion
from datetime import datetime, timedelta
import json
import math



database = conexion()

app = Flask("__name__")

app.secret_key='secreta'

@app.route('/')
def index():
    session['my_var'] = ''
    session['my_var2'] = ''
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['correo']
        password = request.form['password']
        print("Usuario: ", user)
        print("Contraseña: ", password)
    
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            print("Data: ", data)
            band = True
            if data == None:
                band = False
            if band == True:   
                if data[7] == user and data[8] == password:
                    session['my_var'] = user
                    session['my_var2'] = password
                    session['my_var3'] = data[1]
                    return redirect(url_for('opciones'))
            elif band == False:
                return redirect(url_for('login'))


    return render_template('login.html')

@app.route('/opciones', methods=["GET", "POST"])
def opciones():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    else:
        my_var3 = session.get('my_var3', None)  
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            cursor = database.cursor()
            cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
            data_2 = cursor.fetchone()
            band = 1
            if data_2 == None:
                band = 0
            else:
                band = 1      
        return render_template('opciones.html', name=my_var3, bandera = band)

@app.route('/perfil', methods=['GET', 'POST'])
def perfil():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            print("Data: ", data)
            print("Fecha de nacimiento: ", data[3])
            fechaActual = datetime.now()
            fechaFinal = fechaActual.date()
            print("Fecha final: ", fechaFinal)
            edadDias = fechaFinal - data[3]
            print("Edad: ", edadDias)
            año = timedelta(days=365)
            print("Año: ", año)
            print(type(año))
            print(type(edadDias))
            edad = edadDias / año
            print("Edad final: ", edad)
            edad = math.trunc(edad)
            print("Edad final en enteros: ", edad)
            print("Sexo: ", data[10])
            if data[10] == False:
                sexo = "MUJER"
            elif data[10] == True:
                sexo = "HOMBRE"
        return render_template('perfil.html', data = data, edad=edad, sexo = sexo)

@app.route('/pregunta')
def pregunta():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            cursor = database.cursor()
            cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
            data_2 = cursor.fetchone()
            band = True
            if data_2 == None:
                band = False
            if band == True:
                return redirect(url_for('opciones'))
        return render_template('pregunta.html')

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        nombre = request.form["nombre"].upper()
        apellidos = request.form["apellidos"].upper()
        fechaN = request.form["fechaN"]
        escolaridad = request.form["escolaridad"].upper()
        carrera = request.form["carrera"].upper()
        telefono = request.form["telefono"]
        correoE = request.form["correo"]
        contraseña = request.form["password"]
        sexo = request.form["sexo"]
        print("Nombre: ", nombre)
        print("Apellidos: ", apellidos)
        print("Fecha de nacimiento: ", fechaN)
        print("Escolaridad: ", escolaridad)
        print("Carrera: ", carrera)
        print("Telefono: ", telefono)
        print("Correo: ", correoE)
        print("Contraseña: ", contraseña)
        print("Sexo: ", sexo)    
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (correoE, contraseña))
            data = cursor.fetchone()
            if data == None:
                cursor.execute("INSERT INTO participante (nombre, apellidos, fechanac, telefono, escolaridad, carrera, correo, contraseña, sexo)VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)", (nombre, apellidos, fechaN, telefono, escolaridad, carrera, correoE, contraseña, sexo))
                database.commit()
                return redirect(url_for('login'))
            else:
                return redirect(url_for('registro'))
    return render_template('registro.html')

@app.route('/editarDatos', methods=['GET', 'POST'])
def editarDatos():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
        
    if user == '' and password == "":
        return redirect(url_for('login'))
    if database:
        cursor = database.cursor()
        cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
        data = cursor.fetchone()
        print("Carrera: ", data[6])
        print(type(data[6]))
        if request.method == "POST":
            print("Sí entra al POST")
            nombre = request.form["nombre"].upper()
            apellidos = request.form["apellidos"].upper()
            fechaN = request.form["fechaN"]
            escolaridad = request.form["escolaridad"].upper()
            carrera = request.form["carrera"].upper()
            telefono = request.form["telefono"]
            contraseña = request.form["password"]
            sexo = request.form["sexo"]
            print("Nombre: ", nombre)
            print("Apellidos: ", apellidos)
            print("Fecha de nacimiento: ", fechaN)
            print("Escolaridad: ", escolaridad)
            print("Carrera: ", carrera)
            print("Telefono: ", telefono)
            print("Contraseña: ", contraseña)
            print("Sexo: ", sexo)
            cursor.execute("UPDATE participante SET nombre=%s, apellidos=%s, fechanac=%s, telefono=%s, escolaridad=%s, carrera=%s, contraseña=%s, sexo=%s WHERE correo=%s", (nombre, apellidos, fechaN, telefono, escolaridad, carrera, contraseña, sexo, user))
            database.commit()
            session['my_var3'] = nombre
            session['my_var2'] = request.form['password']
            return redirect(url_for('opciones'))
    return render_template('editarDatos.html', data = data)

@app.route('/resultados/<string:puntos>/<string:total_puntos>', methods=['GET', 'POST'])
def resultadoss(puntos, total_puntos):
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    else:
        valores = json.loads(puntos)
        dicc = dict()
        dicc2 = dict()
        #enunciado = ["1.- Busco actividades en las que obtengo un placer rápido, aunque sean perjudiciales", "2.- Suelo caer en tentaciones que me dificultan cumplir con un compromiso", "3.- Busco conseguir beneficios inmediatos, en vez de esperar algo mejor más tarde", "4.- Continúo haciendo determinadas actividades placenteras a pesar de que los demás me advierten que me perjudican", "5.- Cuando algo se me antoja voy a por ello de forma inmediata, sin poder esperar"]
        enunciado = ["Me ha costado mucho descargar la tension", 
                    "Me di cuenta que tenia la boca seca", 
                    "No podia sentir ningun sentimiento positivo", 
                    "Se me hizo dificil respirar", 
                    "Se me hizo dificil tomar la iniciativa para hacer cosas", 
                    "Reaccione exageradamente en ciertas situaciones", 
                    "Senti que mis manos temblaban", 
                    "He sentido que estaba gastando una gran cantidad de energia", 
                    "Estaba preocupado por situaciones en las cuales podia tener panico o en las que podria hacer el ridiculo", 
                    "He sentido que no habia nada que me ilusionara", 
                    "Me he sentido inquieto", 
                    "Se me hizo dificil relajarme", 
                    "Me senti triste y deprimido", 
                    "No tolere nada que no me permitiera continuar con lo que estaba haciendo", 
                    "Senti que estaba al punto de panico", 
                    "No me pude entusiasmar por nada", 
                    "Senti que valia muy poco como persona", 
                    "He tendido a sentirme enfadado con facilidad", 
                    "Senti los latidos de mi corazon a pesar de no haber hecho ningun esfuerzo fisico", 
                    "Tuve miedo sin razon", 
                    "Senti que la vida no tenia ningún sentido",
                    "Tienes un diagnostico previo de enfermedades psicologicas, neurologicas o psiquiatricas",
                    "Eres zurdo",
                    "Consumes alcohol o drogas",
                    "Tienes un diagnostico de enfermedades visuales"]
        i = 1
        while (i<26):
            num = str(i)
            clave = "Enunciado " + num
            dicc[clave] = [enunciado[i-1]]
            if i <= 21:
                if(valores[i-1] == 0):
                    dicc2[clave] = ["Nunca", valores[i-1]]
                elif(valores[i-1] == 1):
                    dicc2[clave] = ["Rara vez", valores[i-1]]
                elif(valores[i-1] == 2):
                    dicc2[clave] = ["Algunas veces", valores[i-1]]
                elif(valores[i-1] == 3):
                    dicc2[clave] = ["Con frecuencia", valores[i-1]]
            else: 
                if(valores[i-1] == 0):
                    dicc2[clave] = ["Cierto"]
                elif(valores[i-1] == 1):
                    dicc2[clave] = ["Falso"]
            i+=1
        
        valores
        preguntasJson = json.dumps(dicc)
        respuestasJson = json.dumps(dicc2)
        print("Preguntas Json: ", preguntasJson)
        print("\nRespuestas Json: ", respuestasJson)
        aptitud = True
        #print(valor[21])
        #print("Tipo de dato de valor: ", type(valor[21]))
        if (valores[21] == 0 or valores[22] == 0 or valores[23] == 0 or valores[24] == 0):
            aptitud = False
        print("Aptitud: ", aptitud)
        total = json.loads(total_puntos)
        puntos_totales = total
        print("Los puntos obtenidos son: %s" % (puntos_totales))
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            cursor.execute("INSERT INTO encuesta (id_participante, pregunta, respuesta) VALUES (%s, %s, %s)", (data, preguntasJson, respuestasJson))
            cursor.execute("UPDATE participante set aptitud = %s where id_participante = %s;", (aptitud, data))
            database.commit()
 
        return render_template('resultados.html')

@app.route('/resultados', methods=['GET', 'POST'])
def resultados():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()
            cursor = database.cursor()
            cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
            data_2 = cursor.fetchone()
            band = True
            if data_2 != None:
                band = False
                if data_2[0] == None:
                    band = True
            if band == True:
                return redirect(url_for('opciones'))
        print("Entra al else")
        if request.method == "POST":
            print("Sí entra al POST")
            dias = request.form.getlist("dias")
            print("Dias: ", dias)
            hora = request.form["hora"]
            print("Hora: ", hora)
            horafin = request.form["fin"]
            print("Hora final: ", horafin)
            horaAp = hora + '-' + horafin
            print("Hora de la cita: ", horaAp)
            if database:            
                cursor = database.cursor()
                cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
                data = cursor.fetchone()
                #cursor.execute("UPDATE encuesta set diascita = %s, horacita=%s where id_participante=%s", (dias, horaAp, data))
                #database.commit()
            return redirect(url_for('opciones'))
        return render_template('resultados.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
    # Ruta para el navegador: localhost:5000
    # Si es necesario se puede cambiar el puerto si está en uso









