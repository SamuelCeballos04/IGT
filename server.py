from flask import Flask, render_template, request, redirect, url_for, make_response,flash

app = Flask("__name__")

app.secret_key='secreta'

@app.route('/')
def index():
    return render_template('template.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')
    # Ruta para el navegador: localhost:5000
    # Si es necesario se puede cambiar el puerto si está en uso 