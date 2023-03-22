from flask import Flask, render_template, request, redirect, url_for, make_response,flash, session, abort, send_file
from flask_session import Session
from conexion import conexion
from datetime import datetime, timedelta
import json
import math
import smtplib, ssl 
from email.message import EmailMessage
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from fpdf import FPDF
import pandas as pd
import pysftp
import os

database = conexion()

app = Flask("__name__")

app.secret_key='secreta'
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

class PDF(FPDF):
    def lines(self):
        self.set_draw_color(45, 50, 100)
        self.set_line_width(1.0)
        self.rect(10, 10, 190, 277)
    def titles(self):
        self.set_xy(0.0,0.0)
        self.set_font('Arial', 'B', 20)
        self.set_text_color(0, 0, 0)    
        self.cell(w=210.0, h=40.0, align='C', txt="¡Gracias por participar en la aplicación de esta prueba!", border=0)
    def subtitles(self):
        self.set_font('Arial', 'B', 15)
        self.set_xy(40,40)
        self.write(h = 22, txt="Tus respuestas han sido guardadas correctamente")
    def text(self, escribir):
        self.set_xy(10,65)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=escribir)
    def listL(self, lunes):
        self.set_xy(70,110)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=lunes)
    def listM(self, martes):
        self.set_xy(70,120)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=martes)
    def listI(self, miercoles):
        self.set_xy(70,130)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=miercoles)
    def listJ(self, jueves):
        self.set_xy(70,140)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=jueves)
    def listV(self, viernes):
        self.set_xy(70,150)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=viernes)
    def footerPDF(self, footer):
        self.set_xy(10, 240)
        self.set_font('Arial', '', 13)
        self.write(h = 5, txt=footer)
    def footerFin(self, footer):
        self.set_xy(90,260)
        self.set_font('Arial', 'B', 15)
        self.write(h = 5, txt=footer)

def enviarCorreoRegistro(destinatario):
    sender_email = "gogamblergo@gmail.com"
    sender_password = "erzoxzrlhiaquqxj"
    recipient_email = destinatario
    subject = "Registro exitoso"
    body = """
    <html>
    <body>
        <H1 style = "color: black; text-align: center;">¡Gracias por registrarte!</H1>
        <H2 style = "color: black; text-align: center;">Tu perfil fue creado correctamente</H2>
        <p style = "color: black">A continuación, deberás seguir estos pasos para realizar tu encuesta: </p>
        <p style = "color: black">1. Inicia sesión con tu correo y contraseña previamente registrados. </p>
        <p style = "color: black">2. En la ventana principal, pulsa el botón de <b>comenzar encuesta.</b></p>
        <p style = "color: black">3. Lee las preguntas con atención y responde de acuerdo a lo que se solicite.</p>
        <p style = "color: black">4. Al terminar tu encuesta, pulsa el botón "Salir" cuando se te pregunte si realmente quieres abandonar el sitio web.</p>
        <p style = "color: black">5. Sigue las intrucciones de la ventana final.</p>

        <H3 style = "color: #FFCF40">Gracias por tu cooperación.</H3>
        <p>--</p>
        <H2 style = "text-align: center; color: #212C4F">GoGamblerGo</H2>
        <H2 style = "text-align: center; color: #212C4F">Laboratorio de Adquisición de Señales y Análisis Inteligente de Datos (http://alanturing.cucei.udg.mx/lasaid/)</H2>
        <H2 style = "text-align: center; color: black">Centro Universitario de Ciencias Exactas e Ingenierías</H2>
        <H2 style = "text-align: center; color: black">Universidad de Guadalajara</H2>
    </body>
    </html>
    """
    html_message = MIMEText(body, 'html')
    html_message['Subject'] = subject
    html_message['From'] = sender_email
    html_message['To'] = recipient_email
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, recipient_email, html_message.as_string())
    server.quit()

def descargarHorariosExcel():
    host = '148.202.152.14'
    port = 22
    username = 'igtuser'
    password= 'igtuserAdmin'
    try:
        conn = pysftp.Connection(host=host,port=port,username=username, password=password)
        print("connection established successfully")
    except:
        print('failed to establish connection to targeted server')

    current_dir = conn.pwd
    print('our current working directory is: ',current_dir)
    conn.get('/www-html/horarios.xlsx', '/Users/margo/Downloads/horarios.xlsx')

def funcionPDF(json, nombre):
    pdf = PDF(orientation='P', unit='mm', format='A4')
    pdf.add_page()
    pdf.lines()
    pdf.titles()
    pdf.subtitles()
    lunes = json["Lunes"]
    martes = json["Martes"]
    miercoles = json["Miercoles"]
    jueves = json["Jueves"]
    viernes = json["Viernes"]
    stringlunes = ""
    stringmartes = ""
    stringmiercoles = ""
    stringjueves = ""
    stringviernes = ""
    def imprimirCita(dia, var):
        if len(dia) == 0:
            var = "Ningún horario seleccionado"
        else:
            for hora in dia:
                hora = int(hora)
                print("Hora: ", hora)
                print("Tipo de hora: ", type(hora))
                if (hora >= 1 and hora<=6 or hora == 12):
                    print("Mayor a mediodia")
                    hora = str(hora) + " p.m. / "
                elif (hora >= 9 and hora <=11): 
                    print("Menor a mediodia")
                    hora = str(hora) + " a.m. / "
                var += hora
        return var
    listafinalL = imprimirCita(lunes, stringlunes)
    listafinalM = imprimirCita(martes, stringmartes)
    listafinalI = imprimirCita(miercoles, stringmiercoles)
    listafinalJ = imprimirCita(jueves, stringjueves)
    listafinalV = imprimirCita(viernes, stringviernes)
    print("Lunes: ", listafinalL)
    print("Martes: ", listafinalM)
    print("Miercoles: ", listafinalI)
    print("Jueves: ", listafinalJ)
    print("Viernes: ", listafinalV)
    print(type(listafinalI))
    escribir = "Hola, " + nombre + ", hemos recibido tus respuestas a la encuesta. Muchas gracias por participar. Los horarios que has seleccionado como disponibles son los siguientes: "
    lunesPDF = "Lunes: " + listafinalL
    martesPDF = "Martes: " + listafinalM
    miercolesPDF = "Miercoles: " + listafinalI
    juevesPDF = "Jueves: " + listafinalJ
    viernesPDF = "Viernes: " + listafinalV
    pdf.text(escribir)
    pdf.listL(lunesPDF)
    pdf.listM(martesPDF)
    pdf.listI(miercolesPDF)
    pdf.listJ(juevesPDF)
    pdf.listV(viernesPDF)
    footer = "Si deseas consultar tus resultados, comunícate con el alumno a cargo de la investigación Manuel Chávez S. (manuel.chavez2913@alumnos.udg.mx)."
    pdf.footerPDF(footer)
    footer = "¡Muchas gracias!"
    pdf.footerFin(footer)
    pdf.output('horarios.pdf','F')

def enviarCorreoHorarios(destinatario):
    sender_email = "gogamblergo@gmail.com"
    sender_password = "erzoxzrlhiaquqxj"
    recipient_email = destinatario
    subject = "Encuesta respondida satisfactoriamente"
    body = """
    <html>
    <body>
        <H1 style = "color: black; text-align: center;">¡Gracias por responder la encuesta!</H1>
        <H2 style = "color: black; text-align: center;">Tu participación es muy importante para nosotros.</H2>
        <p style = "color: black">Se adjunta un archivo confirmando los horarios que has seleccionado posteriormente a la encuesta.</p>
        <H3 style = "color: #FFCF40">Gracias por tu cooperación.</H3>
        <p>--</p>
        <H2 style = "text-align: center; color: #212C4F">GoGamblerGo</H2>
        <H2 style = "text-align: center; color: black">Centro Universitario de Ciencias Exactas e Ingenierías</H2>
        <H2 style = "text-align: center; color: black">Laboratorio de Adquisición de Señales y Análisis Inteligente de Datos (http://alanturing.cucei.udg.mx/lasaid/)</H2>
        <H2 style = "text-align: center; color: black">Universidad de Guadalajara</H2>
    </body>
    </html>
    """
    pdfname = 'horarios.pdf'
    binary_pdf = open(pdfname, 'rb')
    payload = MIMEBase('application', 'octate-stream', Name=pdfname)
    payload.set_payload((binary_pdf).read())
    encoders.encode_base64(payload)
    payload.add_header('Content-Decomposition', 'attachment', filename=pdfname)
    message = MIMEMultipart()
    message['Subject'] = subject
    message['From'] = sender_email
    message['To'] = recipient_email
    html_part = MIMEText(body, 'html')
    message.attach(html_part)
    message.attach(payload)
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, recipient_email, message.as_string())
    server.quit()

def usuariosExcel():
    if database: 
        cursor = database.cursor()
        cursor.execute("SELECT id_participante, id_exp from gsr")
        data = cursor.fetchall()
        col1 = "Tiempo"
        col2 = "Tipo"
        col3 = "GSR"
        col4 = "Tiempo clic"
        col5 = "Tiempo retroalimentación"
        col6 = "Intervalo"
        col7 = "Selección"
        col8 = "Ganancia"
        col9 = "Pérdida"
        col10 = "Balance"
        for i in data:
            print("DATOS: ", i)
            cursor.execute("SELECT json_array_elements(datos #> '{resultado}') -> 'tipo' AS Tipo FROM gsr WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            tipo = cursor.fetchall()

            cursor.execute("SELECT json_array_elements(datos #> '{resultado}') -> 'tiempo' AS Tipo FROM gsr WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            tiempo = cursor.fetchall()

            cursor.execute("SELECT json_array_elements(datos #> '{resultado}') -> 'gsr' AS Tipo FROM gsr WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            gsr = cursor.fetchall()

            cursor.execute("SELECT tclic FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            tclic = cursor.fetchall()

            cursor.execute("SELECT tretroalimentacion FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            tretro = cursor.fetchall()

            cursor.execute("SELECT tintervalo FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            tinter = cursor.fetchall()

            cursor.execute("SELECT seleccion FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            sel = cursor.fetchall()

            cursor.execute("SELECT ganancia FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            ganancia = cursor.fetchall()

            cursor.execute("SELECT perdida FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            perdida = cursor.fetchall()

            cursor.execute("SELECT total FROM resultado WHERE id_participante = %s AND id_exp = %s;", (i[0], i[1]))
            balance = cursor.fetchall()

            exportar = pd.DataFrame({col1:tiempo, col2:tipo, col3:gsr})
            exportar2 = pd.DataFrame({col4:tclic, col5:tretro, col6:tinter, col7:sel, col8:ganancia, col9:perdida, col10:balance})
            with pd.ExcelWriter("experimentos\Exp_"+str(i[1])+".xlsx") as writer: 
                                #Nombre del archivo = id de experimento    
                exportar.to_excel(writer, sheet_name="GSR", index=False)
                exportar2.to_excel(writer, sheet_name="IGT", index=False)             

def usuariosInfoExcel():
    estres = 0
    estresL = list()
    depresion = 0
    depresionL = list()
    ansiedad = 0
    ansiedadL = list()

    id = list()
    fecha = list()
    escolaridad = list()
    carrera = list()
    genero = list()
    correo = list()
    telefono = list()
    seed = list()

    if database:
        cursor = database.cursor()

        cursor.execute("SELECT * FROM participante WHERE expterminado = true")
        n = cursor.fetchall()
        cursor.execute("SELECT participante.id_participante, fechanac, escolaridad, carrera, case when sexo = false then 'Mujer' when sexo = true then 'Hombre' end as sexo, correo, telefono, nombreconf, value FROM encuesta, json_each(encuesta.respuesta), participante, experimento WHERE encuesta.id_participante = participante.id_participante AND encuesta.id_participante = experimento.id_participante")
        data = cursor.fetchall()
        print(len(data))
        print(len(data)/len(n))
        num = len(data)/len(n)
        c = 0

        for i in data:
            c +=1
            if(c==num):
                c=0
                estresL.append(estres)
                depresionL.append(depresion)
                ansiedadL.append(ansiedad)
                estres = 0
                depresion = 0
                ansiedad = 0
                id.append(i[0])
                fecha.append(i[1])
                escolaridad.append(i[2])
                carrera.append(i[3])
                genero.append(i[4])
                correo.append(i[5])
                telefono.append(i[6])
                seed.append(i[7])
            cursor.execute("SELECT respuesta#>'{Enunciado %s}' FROM encuesta WHERE id_participante = %s ", (int(i[8][0]), i[0] ))
            print(i)
            if (int(i[8][0])< 22):
                if (i[8][3]) == 'Estres':
                    # print(i)
                    # print(estres)
                    estres += i[8][2]
                elif (i[8][3]) == 'Depresion':
                    depresion += i[8][2]
                elif (i[8][3]) == 'Ansiedad':
                    ansiedad += i[8][2]
            tipo = cursor.fetchall()

            exportar = pd.DataFrame({"ID":id, "Fecha":fecha, "Escolaridad":escolaridad, "Carrera": carrera, "Genero": genero, "Correo": correo, "Telefono": telefono, "DASS21 Depression": depresionL, "DASS21 Anxiety": ansiedadL, "DASS21 Stress": estresL, "Seed": seed})
            exportar.to_excel("experimentos\sujetos.xlsx", sheet_name="sujetos", index=False)

def horariosExcel():
    horas = ["9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
    dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    citaLunes = []
    citaMartes = []
    citaMiercoles = []
    citaJueves = []
    citaViernes = []
    if database:
        for dia in dias:
            for hora in horas:
                cursor = database.cursor()
                cursor.execute("select encuesta.id_participante from participante join encuesta on participante.id_participante=encuesta.id_participante where (cita->%s)::jsonb ? %s and participante.expterminado = false", (dia, hora))
                data = cursor.fetchall()
                if len(data) == 0:
                    data.append("Sin participantes")
                if dia == "Lunes":
                    citaLunes.append(data)
                elif dia == "Martes":
                    citaMartes.append(data)
                elif dia == "Miercoles":
                    citaMiercoles.append(data)
                elif dia == "Jueves":
                    citaJueves.append(data)
                elif dia == "Viernes":
                    citaViernes.append(data)
                    print("Data: ", data)
    print("Tipo de data: ", type(data))
    print("Lunes: ", citaLunes)
    print("Martes: ", citaMartes)
    print("Miercoles: ", citaMiercoles)
    print("Jueves: ", citaJueves)
    print("Viernes: ", citaViernes)
    col1 = "Horas"
    col2 = dias[0]
    col3 = dias[1]
    col4 = dias[2]
    col5 = dias[3]
    col6 = dias[4]
    exportar = pd.DataFrame({col1:horas,col2:citaLunes,col3:citaMartes,col4:citaMiercoles,col5:citaJueves,col6:citaViernes})
    if database:
        cursor = database.cursor()
        cursor.execute("select id_participante, nombre, apellidos, correo, telefono from participante")
        data = cursor.fetchall()
    id = []
    nombres = []
    apellidos = []
    correo = []
    telefono = []
    for datos in data:
        j = 0
        for i in datos:
            if j == 0:
                id.append(i)
            elif j == 1:
                nombres.append(i)
            elif j == 2:
                apellidos.append(i)
            elif j == 3:
                correo.append(i)
            elif j == 4:
                telefono.append(i)
            j+=1
    col1 = "ID"
    col2 = "Nombre"
    col3 = "Apellidos"
    col4 = "Correo"
    col5 = "Teléfono"
    exportar2 = pd.DataFrame({col1:id,col2:nombres,col3:apellidos,col4:correo,col5:telefono})
    with pd.ExcelWriter('/horarios/horarios.xlsx') as writer:
        exportar.to_excel(writer, sheet_name='Horarios', index=False)
        exportar2.to_excel(writer, sheet_name='Participantes', index=False)

@app.route('/')
def index():
    session['my_var'] = ''
    session['my_var2'] = ''
    session['my_var4'] = 0
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['correo']
        password = request.form['password']
        print("Usuariologin: ", user)
        print("Contraseñalogin: ", password)
    
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña = crypt(%s, contraseña);", (user, password))
            data = cursor.fetchone()
            cursor.execute("SELECT * FROM aplicador WHERE correo=%s AND contraseña = %s;", (user, password))
            data2 = cursor.fetchone()
            print("Data: ", data)
            print("Data2: ", data2)
            band = True
            if data == None and data2 == None:
                band = False
            if band == True:    
                session['my_var'] = user
                session['my_var2'] = password
                if data2 == None:
                    session['my_var3'] = data[1]
                    session['my_var4'] = 0
                else:
                    session['my_var4'] = 1
                    session['my_var3'] = data2[1]
                return redirect(url_for('opciones'))
            elif band == False:
                flash('Usuario o contraseña incorrectos', 'error')
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
            band = 1
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña = crypt(%s, contraseña);", (user, password))
            data = cursor.fetchone()
            if data == None:
                cursor.execute("SELECT id_aplicador FROM aplicador WHERE correo=%s AND contraseña = %s;", (user, password))
                data_3 = cursor.fetchone()
                if data_3 != None:
                    band = 2
            else:
                cursor = database.cursor()
                cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
                data_2 = cursor.fetchone()
                if data_2 == None:
                    band = 0   
        return render_template('opciones.html', name=my_var3, bandera = band)

@app.route('/exportarExcel', defaults={'req_path': ''})  
@app.route('/exportarExcel/<path:req_path>')
def exportarExcel(req_path):
    if session['my_var4'] != 1:
        return redirect(url_for('opciones'))
    else:
        usuariosExcel()
        usuariosInfoExcel()
        BASE_DIR = '../www-html/experimentos/'
        # Joining the base and the requested path
        abs_path = os.path.join(BASE_DIR, req_path)

        # Return 404 if path doesn't exist
        if not os.path.exists(abs_path):
            return abort(404)
        
        # Check if path is a file and serve
        if os.path.isfile('../www-html/experimentos/' + req_path):
            return send_file('../www-html/experimentos/' + req_path)

        # Show directory contents
        files = os.listdir(BASE_DIR)
        return render_template('descarga.html', files=files)

'''
@app.route('/descargarHorarios')
def descargarHorarios():
    if session['my_var4'] != 1:
        return redirect(url_for('opciones'))
    else:
        descargarHorariosExcel()
        flash('Archivo guardado correctamente', 'success')
        return redirect(url_for('opciones'))
'''

@app.route('/descargarArchivos', defaults={'req_path': ''})  
@app.route('/descargarArchivos<path:req_path>')
def descargarArchivos(req_path):
    if session['my_var4'] != 1:
        return redirect(url_for('opciones'))
    else:
        abs_path = '../www-html/horarios/horarios.xlsx'
        return send_file(abs_path)
        '''
        BASE_DIR = '../www-html/horarios/'

        abs_path = os.path.join(BASE_DIR, req_path)

        if not os.path.exists(abs_path):
            return redirect(url_for('opciones'))

        if os.path.isfile('../www-html/horarios/horarios.xlsx'):
            abs_path = '../www-html/horarios/horarios.xlsx'
            return send_file(abs_path)
        
        files = os.listdir(abs_path)
        return render_template('descarga.html', files=files)'''

@app.route('/perfil', methods=['GET', 'POST'])
def perfil():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    elif session['my_var4'] == 1:
        return redirect(url_for('opciones'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
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
    elif session['my_var4'] == 1:
        return redirect(url_for('opciones'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
            data = cursor.fetchone()
            cursor = database.cursor()
            cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
            data_2 = cursor.fetchone()
            band = True
            if data_2 == None:
                band = False
            if band == True:
                flash('Sus respuestas se registraron correctamente', 'success')
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
        if carrera == "OTRO":
            carrera = request.form["otracarrera"].upper()
        telefono = request.form["telefono"]
        correoE = request.form["correo"]
        contraseña = request.form["password"]
        sexo = request.form["sexo"]
        if escolaridad == "PRIMARIA" or escolaridad == "SECUNDARIA":
            carrera = "NO APLICABLE"
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
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (correoE, contraseña))
            data = cursor.fetchone()
            if data == None:
                cursor.execute("INSERT INTO participante (nombre, apellidos, fechanac, telefono, escolaridad, carrera, correo, contraseña, sexo)VALUES(%s, %s, %s, %s, %s, %s, %s, crypt(%s, gen_salt('bf')), %s)", (nombre, apellidos, fechaN, telefono, escolaridad, carrera, correoE, contraseña, sexo))
                database.commit()
                flash('Se ha registrado correctamente', 'success')
                enviarCorreoRegistro(correoE)
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
    elif session['my_var4'] == 1:
        return redirect(url_for('opciones'))
    if database:
        cursor = database.cursor()
        cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
        data = cursor.fetchone()
        if data[10] == True:
            sex = 1
        else:
            sex = 0
        print("Carrera: ", data[6])
        print(type(data[6]))
        if data[6] == "INCO":
            carrera = 1
        elif data[6] == "INNI":
            carrera = 2
        elif data[6] == "INBI":
            carrera = 3
        elif data[6] == "INFO":
            carrera = 4
        elif data[6] == "INTO":
            carrera = 5
        elif data[6] == "LIFI":
            carrera = 6
        else:
            carrera = 7
        if request.method == "POST":
            print("Sí entra al POST------------------------------------------------------------------------")
            nombre = request.form["nombre"].upper()
            apellidos = request.form["apellidos"].upper()
            fechaN = request.form["fechaN"]
            escolaridad = request.form["escolaridad"].upper()
            carrera = request.form["carrera"].upper()
            if carrera == "OTRO":
                carrera = request.form["otracarrera"].upper()
            telefono = request.form["telefono"]
            contraseña = request.form["password"]
            sexo = request.form["sexo"]
            if escolaridad == "PRIMARIA" or escolaridad == "SECUNDARIA":
                carrera = "NO APLICABLE"
            print("Nombre: ", nombre)
            print("Apellidos: ", apellidos)
            print("Fecha de nacimiento: ", fechaN)
            print("Escolaridad: ", escolaridad)
            print("Carrera ACT: ", carrera)
            print("Telefono: ", telefono)
            print("Contraseña: ", contraseña)
            print("Sexo: ", sexo)
            cursor.execute("UPDATE participante SET nombre=%s, apellidos=%s, fechanac=%s, telefono=%s, escolaridad=%s, carrera=%s, contraseña=crypt(%s, gen_salt('bf')), sexo=%s WHERE correo=%s", (nombre, apellidos, fechaN, telefono, escolaridad, carrera, contraseña, sexo, user))
            database.commit()
            session['my_var3'] = nombre
            session['my_var2'] = request.form['password']
            flash('Cambios guardados', 'success')
            return redirect(url_for('opciones'))
        if data[5] == "PRIMARIA":
            escolaridad = 1
        elif data[5] == "SECUNDARIA":
            escolaridad = 2
        elif data[5] == "PREPARATORIA":
            escolaridad = 3
        elif data[5] == "TÉCNICO":
            escolaridad = 4
        elif data[5] == "LICENCIATURA":
            escolaridad = 5
        elif data[5] == "MAESTRÍA":
            escolaridad = 6
        else:
            escolaridad = 7
    return render_template('editarDatos.html', data = data, sexos = sex, contra = password, carr = carrera, esc = escolaridad)

@app.route('/resultados/<string:puntos>/<string:total_puntos>', methods=['GET', 'POST'])
def resultadoss(puntos, total_puntos):
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    elif session['my_var4'] == 1:
        return redirect(url_for('opciones'))
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
            if (i == 1 or i == 6 or i == 8 or i == 11 or i == 12 or i == 14 or i == 18):
                tipo = "Estres"
            elif (i == 3 or i == 5 or i == 10 or i == 13 or i == 16 or i == 17 or i == 21):
                tipo = "Depresion"
            elif (i == 2 or i == 4 or i == 7 or i == 9 or i == 15 or i == 19 or i == 20):
                tipo = "Ansiedad"
            if i <= 21:
                if(valores[i-1] == 0):
                    dicc2[clave] = [num, "Nunca", valores[i-1], tipo]
                elif(valores[i-1] == 1):
                    dicc2[clave] = [num, "Rara vez", valores[i-1], tipo]
                elif(valores[i-1] == 2):
                    dicc2[clave] = [num, "Algunas veces", valores[i-1], tipo]
                elif(valores[i-1] == 3):
                    dicc2[clave] = [num, "Con frecuencia", valores[i-1], tipo]
            else: 
                if(valores[i-1] == 0):
                    dicc2[clave] = [num, "Cierto"]
                elif(valores[i-1] == 1):
                    dicc2[clave] = [num, "Falso"]
            i+=1
        
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
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
            data = cursor.fetchone()
            cursor.execute("INSERT INTO encuesta (id_participante, pregunta, respuesta) VALUES (%s, %s, %s)", (data, preguntasJson, respuestasJson))
            cursor.execute("UPDATE participante set aptitud = %s where id_participante = %s;", (aptitud, data))
            database.commit()
 
        return render_template('resultados.html')

@app.route('/resultados', methods=['GET', 'POST'])
def resultados():
    user = session.get('my_var', None)
    password = session.get('my_var2', None)
    nombreUsuario = session.get('my_var3', None)
    if user == '' and password == "":
        return redirect(url_for('login'))
    elif session['my_var4'] == 1:
        return redirect(url_for('opciones'))
    else:
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
            data = cursor.fetchone()
            cursor = database.cursor()
            cursor.execute("SELECT * FROM encuesta WHERE id_participante=%s;", (data))
            data_2 = cursor.fetchone()
            band = True
            if data_2 != None:
                band = False
                if data_2[3] != None:
                    band = True
            if band == True:
                return redirect(url_for('opciones'))
        print("Entra al else")
        if request.method == "POST":
            print("Sí entra al POST")
            dicc = request.form["diccInvisible"]
            print("Dias: ", dicc)
            dicc += ","
            print("Tipo de dicc: ", type(dicc))
            aux = ""
            lista = []
            dicc3 = dict()
            horasLunes = []
            horasMartes = []
            horasMiercoles = []
            horasJueves = []
            horasViernes = []
            for i in dicc:
                if i != ",":
                    aux += i
                else:
                    lista.append(aux)
                    aux = ""
            for obj in lista:
                dia = obj[0]
                print("Objeto: ", obj)
                if dia == "L":
                    horas = obj[1:]
                    horasLunes.append(horas)
                    dicc3["Lunes"] = horasLunes
                elif dia == "M":
                    horas = obj[1:]
                    horasMartes.append(horas)
                    dicc3["Martes"] = horasMartes
                elif dia == "I":
                    horas = obj[1:]
                    horasMiercoles.append(horas)
                    dicc3["Miercoles"] = horasMiercoles
                elif dia == "J":
                    horas = obj[1:]
                    horasJueves.append(horas)
                    dicc3["Jueves"] = horasJueves
                elif dia == "V":
                    horas = obj[1:]
                    horasViernes.append(horas)
                    dicc3["Viernes"] = horasViernes
            if len(horasLunes) == 0:
                dicc3["Lunes"] = []
            if len(horasMartes) == 0:
                dicc3["Martes"] = []
            if len(horasMiercoles) == 0:
                dicc3["Miercoles"] = []
            if len(horasJueves) == 0:
                dicc3["Jueves"] = []
            if len(horasViernes) == 0:
                dicc3["Viernes"] = []
            
            diasJson = json.dumps(dicc3)
            print("Dias Json: ", diasJson)
            print("Dicc3: ", dicc3)
            funcionPDF(dicc3, nombreUsuario)
            enviarCorreoHorarios(user)
            if database:            
                cursor = database.cursor()
                cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND contraseña=crypt(%s, contraseña);", (user, password))
                data = cursor.fetchone()
                cursor.execute("UPDATE encuesta set cita = %s where id_participante=%s", (diasJson, data))
                database.commit()
                horariosExcel()
                flash('Sus respuestas se han registrado correctamente', 'success')
            return redirect(url_for('opciones'))
        return render_template('resultados.html')
    
@app.route('/recuperacion', methods=['GET', 'POST'])
def recuperacion():
    if request.method == 'POST':
        user = request.form['correo']
        password = request.form['password']
        telefono = request.form['telefono']
        print("Correo: ", user)
        print("Contraseña: ", password)
        print("Telefono: ", telefono)
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT id_participante FROM participante WHERE correo=%s AND telefono = %s", (user, telefono))
            data = cursor.fetchone()
            print("Data: ", data)
            band = True
            if data == None:
                band = False
            if band == True and password != "":
                cursor.execute("UPDATE participante set contraseña=crypt(%s, contraseña) where id_participante = %s", (password, data))
                flash('Contraseña cambiada con éxito', 'success')
                return redirect(url_for('login'))
            if band == True and password == "":
                flash('Ingresa una contraseña', 'error')
                return redirect(url_for('recuperacion'))
            elif band == False:
                flash('Los datos ingresados son incorrectos', 'error')
                return redirect(url_for('recuperacion'))
                


    return render_template('recuperacion.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
    # Ruta para el navegador: localhost:5000
    # Si es necesario se puede cambiar el puerto si está en uso
