# How It Worked:
AIS data was read from nmea-sample.txt using decode.py which is also connected to my PostGRES table in pgAdmin. Data is then synced to the geoserver hosted by tomcat.

The index.html file was placed inside a tomcat server that hosted my geoserver. For more information on how to configure geoserver with tomcat please watch the first 10 minutes of this video: [1]. 

Video: https://www.youtube.com/watch?v=zWWM_TQI41I


# Motivation:

My interdisciplinary project required me to research a topic that combined both aspects of Geography and Computer Science to …
My goal was to find a way to solve a problem using geospatial data by meeting a client’s requirements similar to a real life business example. I ended up taking the approach of creating a web based application to meet these needs, specifically trying to find out how to use AIS data to show real time information, Originally the web based application had a undefined topic so for the first few months I focused on the backend of understanding how a WebGIS application works and what it needs. Once a topic was defined, it became easier to define a specific scope for my project and the limitations I would encounter on the way.

# Methodology:

The first step I had to think about was what approach I wanted to take as there are different ways to configure a backend dataset for a website.  I chose to use the combination of GeoServer, OpenLayers, Postgres, and Python to configure a full stack website. Luckily there are an abundant amount of tutorials on youtube that help you get started on a simple website using any dataset on GeoServer. The specific one I used and highly recommend for anyone else looking to configure a WebGIS application from the ground up is: [1]. This helped me understand the fundamentals of the steps I should take but I first had to figure out how to convert AIS data.

Finding a way to decode the AIS data was harder than I actually thought because there is an extensive amount of documentation on what the data means but not on how to convert it to a readable format. I finally found pyAIS which is a python module that contains functions to decode and parse Automatic Identification System (AIS) serial messages. After I could run some tests with sample NMEA data, my next goal was to find a way to connect to a PostgreSQL database from python which introduced me to REST API’s. The pscyopg2 module in python does just that by acting as a PostgreSQL database adapter for the Python programming language. 

After this I was able to run a python script to update a website in real time by allowing it to update and delete a table according to each vessel’s MMSI number. Each line would be added to a table with a geometry attribute in EPSG 4326. This table with all of the read data takes the most recently updated MMSI number to display on the website as well as being able to display boats that have a speed over 14 knots. 

# Future Work:
* Display MMSI data from OverSpeed table
* Figure a way to find out all illegally anchored ships
* Improve CSS and HTML for scalability



# References:
[1] https://www.youtube.com/watch?v=eAQcBGMPQTk

[2] https://pypi.org/project/pyais/

[3] https://pypi.org/project/psycopg2/
