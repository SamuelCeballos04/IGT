import psycopg2
from psycopg2 import DatabaseError

def conexion():
    try:
        return psycopg2.connect(
            host='localhost',
            user='postgres',
            password='admin',
            database='IGT',
            port = '5432'
        )
    except DatabaseError as ex:
        raise ex