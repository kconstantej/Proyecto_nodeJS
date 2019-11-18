var fs = require('fs');
var dir = './resultados';
const colors = require('colors')
const {crearArchivo}=require('./buscador/buscar');

var salida="";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let {argv}=require('./config/yargs')
let comando = argv._[0]
var salida="";

switch(comando){
    case 'publicar':
        salida="";
        var opcion="";
        crearArchivo(argv.archivo,argv.pais,argv.anio,opcion)
        .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("\n"+archivo.green))
        .catch(e=>console.log(e.red));
        break;
    case 'guardar':
             salida="";
            crearArchivo(argv.archivo,argv.pais,argv.anio,argv.nombre)
            .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("Archivo creado: \n".blue+archivo.yellow))
            .catch(e=>console.log(e.red));
            break;
        break;
    default:
        console.log("comando no valido!".red);
}


const express = require('express')
const app = express();


app.use(express.static('resultados'))

app.listen(3000,()=>{
  console.log("servidor iniciado");
})

