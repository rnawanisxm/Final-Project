from pyais import FileReaderStream
from pyais import NMEAMessage, decode_msg
from datetime import datetime

import json
import psycopg2
import random

count = 0

#This script assumes that tables stream, vessels, and over exist.

def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)

def create_entry(msg, decoded):
    result = (msg, decoded["mmsi"],decoded["lon"],decoded["lat"],decoded["speed"],decoded["lon"],decoded["lat"], msg)
    create_script = ''' CREATE TABLE IF NOT EXISTS stream(
                        K       int PRIMARY KEY,
                        id      int,
                        lon     REAL,
                        lat     REAL,
                        speed   REAL,
                        geom    geometry,
                        count2 int       


                    ) '''
    curr.execute(create_script)
    insert_script = 'INSERT INTO stream (K, id, lon, lat, speed, geom, count2) VALUES (%s,%s,%s,%s,%s, ST_SetSRID(ST_MakePoint(%s,%s),4326), %s)'
    insert_script2 = 'INSERT INTO vessels (K, id, lon, lat, speed, geom, count2) VALUES (%s,%s,%s,%s,%s, ST_SetSRID(ST_MakePoint(%s,%s),4326), %s)'
    curr.execute(insert_script, result)
    curr.execute(insert_script2, result)
    
    


def update():
    update_script = '''DELETE FROM vessels 
                            WHERE count2 NOT IN
                            ( SELECT MAX(count2) as RowId
                            FROM stream 
                            GROUP by id) '''

    curr.execute(update_script)
    conn.commit()

def overspeed():
    update_script = '''SELECT * INTO over
                        FROM vessels 
                        WHERE speed > 13'''
    curr.execute(update_script)
    conn.commit()


hostname = 'localhost'
database = 'ais'
username = 'postgres'
pwd = 'admin'
port_id = 5432

conn = psycopg2.connect(
        host = hostname,
        dbname = database,
        user = username,
        password = pwd,
        port = port_id
        )

curr = conn.cursor()

filename = "nmea-sample.txt"

#Used for clearing table and testing.
curr.execute("Delete from stream")
curr.execute("Delete from vessels")
curr.execute("DROP TABLE over")

count_script= 'SELECT count(*) from stream;'
data=[]

curr.execute(count_script,data)
results = curr.fetchone()
count = results[0]

for msg in FileReaderStream(filename):
    decoded = msg.decode()
    if 'speed' in decoded.content:
        coords = (decoded["lon"], decoded["lat"])
        if -126.16 < coords[0] < -122.22 and 48.123 < coords[1] < 49.899:
            create_entry(count, decoded)
            count+=1


update()
overspeed()

conn.commit()
curr.close()
conn.close()
