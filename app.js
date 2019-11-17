var fs = require('fs');
var dir = './resultados';
const {crearArchivo}=require('./buscador/buscar');
var salida="";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let {argv}=require('./config/yargs')
let comando = argv._[0]


switch(comando){
    case 'mostrar':
        var salida="";
        var opcion=null;
        console.log("crear...");
        crearArchivo(argv.archivo,argv.pais,argv.anio,opcion)
        .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("\n"+archivo))
        .catch(e=>console.log(e.red));
        console.log(salida);
        break;
    case 'guardar':
            var salida="";
            var opcion=true;
            console.log("crear...");
            crearArchivo(argv.archivo,argv.pais,argv.anio,argv.nombre)
            .then(archivo=>salida=salida+"\n"+archivo).then(archivo=>console.log("Archivo creado: \n"+archivo))
            .catch(e=>console.log(e.red));
            console.log(salida);

            break;
        break;
    default:
        console.log("comando no valido!");
}

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end("Archivo creado:\n"+salida,"utf8");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});