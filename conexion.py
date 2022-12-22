import psycopg2
from psycopg2 import DatabaseError

def conexion():
    try:
        return psycopg2.connect(
            host='localhost',
            user='postgres',
            password='admin',
            database='IGT'
        )
    except DatabaseError as ex:
        raise ex