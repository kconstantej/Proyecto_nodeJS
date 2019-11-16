var fs = require('fs');
var dir = './resultados';
const {crearArchivo}=require('./buscador/buscar');
const {listar}=require('./buscador/buscar');


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let {argv}=require('./config/yargs')
let comando = argv._[0]


switch(comando){
    case 'mostrar':
        console.log("crear...");
        crearArchivo(argv.archivo,argv.pais,argv.anio)
        .then(archivo => console.log(`Archivo creado: \n${archivo}`))
        .catch(e=>console.log(e.red));
        break;
    case 'guardar':
        (listar(argv.archivo,argv.pais,argv.anio,argv.salida))
        break;
    default:
        console.log("comando no valido!")
}

