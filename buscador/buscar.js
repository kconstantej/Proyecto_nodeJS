const fs = require('fs');
var datos_archivo
var anio
//se crea una promesa
let crearArchivo = (archivo,pais,anio)=>{
    return new Promise((resolve,reject)=>{
    if (!fs.existsSync(archivo)){
        reject('error el archivo no existe');
    }else{    
        fs.readFile(archivo, 'utf8', function (err, data) {
            var dataArray = data.split(/\r?\n/);
            var a =dataArray[4].split(',');
            var an;
            
            for (let i=0;i<a.length;i++){
                if(a[i]=='"'+anio+'"'){
                    an=i;
                }
            } 

            
            var acum=0.0;
            var miCadena="";
            var x=0.0;
            acum = 0
            res= 0.0;
            var vector=[];

            for (let i=5;i<dataArray.length-1;i++){
                n= dataArray[i].split(',');
                vector.push(n)
                if((n[an])!='"0"' && (n[an]!='""') ){
                    //var datos_archivo=`Datos:	${newArray[2]}\nPaís:	${newArray[0]}\nAño:	${anio}\nValor:	${newArray[an]}`;
                    miCadena =""+ n[an];
                    x=x+1;
                    //console.log("------------------",acum)
                    var cadena2='';
                    for (let j=0;j<miCadena.length;j++){
                        //console.log(miCadena[j]);
                        if(miCadena[j]!='"'){
                            cadena2=cadena2+miCadena[j];
                            //console.log(cadena2);
                        }
                    }
                    //console.log(cadena2)
                    acum=acum+(parseFloat(cadena2));
                    //console.log(acum);
                    //console.log('---------------------------------------------',cadena2)
                    //resolve(datos_archivo);
                            
                }
            }

            res=parseFloat(acum)/x;
            //console.log('-------------'+res);   

            var acum2=0.0;
            var miCadena2="";
            var x1=0.0;
            var x2=0;
            acum1 = 0
            res1= 0.0;
            var acum_pais=0;
            var miCadena3="";            

            for (let i=5;i<dataArray.length-1;i++){
                newArray= dataArray[i].split(',');
                for(let j=5;j<newArray.length-1;j++){
                    //console.log(newArray[j]+" val")
                    if(newArray[1]=='"'+pais+'"'){
                    if((newArray[j])!='"0"' && (newArray[j]!='""') ){  
                        miCadena3 =""+ newArray[j];
                        //console.log(miCadena3+" a44")
                        x2=x2+1;

                        var cadena222='';
                    for (let k=0;k<miCadena3.length;k++){
                        //console.log(miCadena[j]);
                        if(miCadena3[k]!='"'){
                            cadena222=cadena222+miCadena3[k];
                            //console.log(cadena2);
                        }
                    }
                    acum_pais=acum_pais+(parseFloat(cadena222));
                    //console.log(acum_pais+" acum pa")
                    
                    
                    }}
                    
                    if((newArray[j])!='"0"' && (newArray[j]!='""') ){
                   
                        miCadena2 =""+ newArray[j];
                    //    console.log(miCadena2+" val")
                        x1=x1+1;
                    



                    var cadena22='';
                    for (let j=0;j<miCadena2.length;j++){
                        //console.log(miCadena[j]);
                        if(miCadena2[j]!='"'){
                            cadena22=cadena22+miCadena2[j];
                            //console.log(cadena2);
                        }
                    }
                    //console.log(cadena2)
                    acum1=acum1+(parseFloat(cadena22));
                    //console.log(acum1);
                    

                    }



                }
                if(newArray[1]=='"'+pais+'"'){
                   // console.log('entraaaa');
                    var datos_archivo=`Datos:	${newArray[2]}\nPaís:	${newArray[0]}\nAño:	${anio}\nValor:	${newArray[an]}`;
                    //console.log(an+" aannn")
                    //console.log(datos_archivo);
                    resolve(datos_archivo);
                            
                }
            }
            //console.log(x1)            
            res1=parseFloat(acum1)/(x1);
            res2=parseFloat(acum_pais)/(x2)
            //console.log('-------------'+res1);
            //console.log(acum_pais+" pais")
            //console.log(x2+" cont3")
            //console.log("----- r2 "+res2)

            var tercer;
            var posicion_pais=0;
            
            var cuarto;
            var quinto;

            for (let i=5;i<dataArray.length;i++){
                tercer = dataArray[i].split(',');
                //console.log(tercer[])
                if(tercer[1]=='"'+pais+'"'){
                    posicion_pais=i;
                }
            }

            //console.log(posicion_pais+" pos")
            
            val = posicion_pais-5;
            val2 = posicion_pais+5;
            
            for(let j=val;j<posicion_pais;j++){
                cuarto = dataArray[j].split(',');
                
                var datos5_archivo=`Datos:	${cuarto[2]}\nPaís:	${cuarto[0]}\nAño:	${anio}\nValor:	${cuarto[an]}`;
                
                console.log(datos5_archivo+" data")
                //console.log(datos5_archivo+" data")    
            }

                console.log("\n\n\n")
                var datos5_me_archivo;
                for(let j=posicion_pais+1;j<=val2;j++){
                quinto = dataArray[j].split(',');
                
                
                if(quinto[2]!='"Suscripciones a telefonía celular móvil"'){
                    valor=3;
                    datos5_me_archivo  =`Datos:	${quinto[valor]}\nPaís:	${quinto[0]}\nAño:	${anio}\nValor:	${quinto[an]}`;
                
                }else{
                    valor=2;
                    datos5_me_archivo  =`Datos:	${quinto[valor]}\nPaís:	${quinto[0]}\nAño:	${anio}\nValor:	${quinto[an]}`;
                
                }
                    console.log(datos5_me_archivo)
                    console.log()    
                
             
                    
                console.log("\n\n\n\n")    
                console.log(vector[0])
                


               // console.log(datos5_me_archivo+" data2")
                //console.log(datos5_archivo+" data")    
            }
        
        });
    }        
 } );
 }


var nom
let listar=(archivo,pais,anio,nombre)=>{
    
    nom = crearArchivo(archivo,pais,anio);
    console.log(nom+"----------------------")

    return new Promise((resolve,reject)=>{

        fs.writeFile(`resultados/${nombre}.txt`, nom, (err) => {
            if (err){
                 reject(err);
                                            }
                    else {
                     nom=`El archivo ${nombre}.txt fue creado con éxito en la carpeta: \nresultados`;
                    console.log(nom)
                    resolve(nom);
                }                 
                  });
                

    });
        
        

}



//si el nombre de la propiedad es igual al valor crearArchivo : crearArchivo solo se puede poner el nommbre, se crea un objeto
module.exports = {
    crearArchivo,
    listar
};