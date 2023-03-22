import psycopg2
from psycopg2 import DatabaseError

def conexion():
    try:
        return psycopg2.connect(
            host='localhost',
            user='igtuser',
            password='igtAdmin',
            database='igt_db',
            port = '5433'
        )
    except DatabaseError as ex:
        raise ex