from fpdf import FPDF
import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

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

json = {"Lunes": ["11", "12", "1", "2"], "Martes": [], "Miercoles": [], "Jueves": [], "Viernes": []}

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
nombre = "Samuel"
funcionPDF(json, nombre)

def enviarCorreoHorarios(destinatario):
    sender_email = "b10.rsrch@gmail.com"
    sender_password = "vakuyrvbyjqvwwon"
    recipient_email = destinatario
    subject = "Encuesta respondida satisfactoriamente"
    body = """
    <html>
    <body>
        <H1 style = "color: black; text-align: center;">¡Gracias por responder la encuesta!</H1>
        <H2 style = "color: black; text-align: center;">Tu participación es muy importante para nosotros</H2>
        <p style = "color: black">Se adjunta un archivo confirmando los horarios que has seleccionado posteriormente a la encuesta</p>
        <H3 style = "color: #FFCF40">Gracias por tu cooperación</H3>
        <p>--</p>
        <H2 style = "text-align: center; color: #212C4F">Bio Researchers</H2>
        <H2 style = "text-align: center; color: black">Centro Universitario de Ciencias Exactas e Ingenierías</H2>
        <H2 style = "text-align: center; color: black">Universidad de Gadalajara</H2>
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

enviarCorreoHorarios("franco.silva4477@alumnos.udg.mx")