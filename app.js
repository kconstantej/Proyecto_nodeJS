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


switch(comando){
    case 'publicar':
        var salida="";
        var opcion=null;
        crearArchivo(argv.archivo,argv.pais,argv.anio,opcion)
        .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("\n"+archivo.green))
        .catch(e=>console.log(e.red));
        break;
    case 'guardar':
            var salida="";
            var opcion=true;
            crearArchivo(argv.archivo,argv.pais,argv.anio,argv.nombre)
            .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("Archivo creado: \n".blue+archivo.yellow))
            .catch(e=>console.log(e.red));
            break;
        break;
    default:
        console.log("comando no valido!".red);
}

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end("Archivo creado:\n".blue+salida,"utf8");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});