# Proyecto_nodeJS
proyecto primer parcial

HOLA AMIGOS PROGRAMADORES :)

AQUI LES DEJO LA INFORMACION NECESARIA PARA QUE
PUEDAN EJECUTAR EL PROGRAMA

SALUDOS Y HASTA UNA PROXIMA OCASION!!!!


------------------------------------------------------------------------------------------------

Modulos necesarios para correr el programa 

Tener una version adecuada del Node Js (12.13.1)


Comandos 

- npm i yargs  (ejm de uso: const argv = require('yargs').argv)
 
- npm install colors (ejm de uso: var colors = require('colors');)
 
- npm install -g nodemon // Como dependencia -> npm install --save-dev nodemon

- npm install express (ejm de uso: const express = require('express')) 

- npm install npm 

------------------------------------------------------------------------------------------------------

COMO EJECUTAR EL PROGRAMA ?? 

Comando publicar 

node app.js publicar --file=path_del_csv --country=ABG --year=2018

			o

node app.js publicar --f=path_del_csv --c=ABG --y=2018



Comando guardar 

node app.js guardar --file=path_del_csv --country=ECU --year=2018 --nombre="Nombre_del_archivo" 

				o

node app.js guardar --f=path_del_csv --c=ECU --y=2018 --o="Nombre_del_archivo" 


Alias 
file -> f
countre -> c
year -> y
nombre -> o

------------------------------------------------------------------------------------------------------
El comando publicar, publicará en una pagina web toda la información necesaria y además se evidenciará la info en consola. 
El comando guardar, guardará un archivo .txt para poder visualizar la información obtenida. 

-----------------------------------------------------------------------------------------------------
