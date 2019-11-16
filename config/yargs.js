let opciones={
    archivo:{
        demand: true,
        alias: 'f',
        description: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },pais:{
        alias: 'c',
        default: 'ECU',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    },anio:{
        alias: 'y',
        default: '2018',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    }
}

let opciones2={
    archivo:{
        demand: true,
        alias: 'f',
        description: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },pais:{
        alias: 'c',
        default: 'ECU',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    },anio:{
        alias: 'y',
        default: '2004',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    },
    salida:{
        demand:true,
        alias:'o'
    }
}



const argv = require('yargs').command('mostrar','Crea un archivo con la tabla de multiplicar',opciones)
.command('guardar','listar la tabla de multiplicar',opciones2)
.help()
.argv;


module.exports={
    argv
};