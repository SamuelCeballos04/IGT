import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

def enviarCorreoRegistro(destinatario):
    sender_email = "b10.rsrch@gmail.com"
    sender_password = "vakuyrvbyjqvwwon"
    recipient_email = destinatario
    subject = "Registro exitoso"
    body = """
    <html>
    <body>
        <H1 style = "color: black; text-align: center;">¡Gracias por registrarte!</H1>
        <H2 style = "color: black; text-align: center;">Tu perfil fue creado correctamente en la página web</H2>
        <p style = "color: black">A continuación, deberás seguir estos pasos para realizar tu encuesta: </p>
        <p style = "color: black">1. Inicia sesión con tu correo y contraseña previamente registrados </p>
        <p style = "color: black">2. En la ventana principal, pulsa el botón de <b>comenzar encuesta</b></p>
        <p style = "color: black">3. Lee las preguntas con atención y responde de acuerdo a lo que se solicite</p>
        <p style = "color: black">4. Al terminar tu encuesta, pulsa el botón "Salir" cuando se te pregunte si realmente quieres abandonar el sitio web</p>
        <p style = "color: black">5. Sigue las intrucciones de la ventana final</p>

        <H3 style = "color: #FFCF40">Gracias por tu cooperación</H3>
        <p>--</p>
        <H2 style = "text-align: center; color: #212C4F">Bio Researchers</H2>
        <H2 style = "text-align: center; color: black">Centro Universitario de Ciencias Exactas e Ingenierías</H2>
        <H2 style = "text-align: center; color: black">Universidad de Gadalajara</H2>
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

enviarCorreoRegistro("samuel.ceballos4453@alumnos.udg.mx")
