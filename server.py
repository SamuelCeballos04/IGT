from flask import Flask, render_template, request, redirect, url_for, make_response,flash
from conexion import conexion

database = conexion()

app = Flask("__name__")

app.secret_key='secreta'

@app.route('/')
def index():
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
                    return redirect(url_for('opciones')) 
            elif band == False:
                return redirect(url_for('login'))


    return render_template('login.html')

@app.route('/opciones')
def opciones():
    
    
    
    return render_template('opciones.html')

@app.route('/perfil')
def perfil():
    
    return render_template('perfil.html')

@app.route('/pregunta')
def pregunta():
    
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
        print("Nombre: ", nombre)
        print("Apellidos: ", apellidos)
        print("Fecha de nacimiento: ", fechaN)
        print("Escolaridad: ", escolaridad)
        print("Carrera: ", carrera)
        print("Telefono: ", telefono)
        print("Correo: ", correoE)
        print("Contraseña: ", contraseña)
        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (correoE, contraseña))
            data = cursor.fetchone()
            if data == None:
                cursor.execute("INSERT INTO participante (nombre, apellidos, fechanac, telefono, escolaridad, carrera, correo, contraseña)VALUES(%s, %s, %s, %s, %s, %s, %s, %s)", (nombre, apellidos, fechaN, telefono, escolaridad, carrera, correoE, contraseña))
                database.commit()
                return redirect(url_for('login'))
            else:
                return redirect(url_for('registro'))
    return render_template('registro.html')



'''
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['user']
        password = request.form['pass']

        if database:
            cursor = database.cursor()
            cursor.execute("SELECT * FROM participante WHERE correo=%s AND contraseña=%s;", (user, password))
            data = cursor.fetchone()

            print("Datos: ", data)
    else:
        return render_template('login.html')

@app.route('/registro', methods=['GET', 'POST'])
def pagina_principal():
    if database:
        cursor = database.cursor()
        cursor.execute("SELECT * FROM resultado")
        data = cursor.fetchone()
        print("Datos: ", data)'''

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
    # Ruta para el navegador: localhost:5000
    # Si es necesario se puede cambiar el puerto si está en uso









