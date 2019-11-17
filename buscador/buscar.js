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
            var vec=[];

            for (let i=5;i<dataArray.length;i++){
                n= dataArray[i].split(',');
                
                if((n[an])!='"0"' && (n[an]!='""') ){
                    //var datos_archivo=`Datos:	${newArray[2]}\nPaís:	${newArray[0]}\nAño:	${anio}\nValor:	${newArray[an]}`;
                    vec.push(n)
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
            var valor_consulta=0;      

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
                   valor_consulta=newArray[an];
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
            
            var miCadenac = ""+valor_consulta
            var cadenac=""
     
            if(miCadenac=='""'){

                val_con_int=0;    
            }else{ 

            for (let j=0;j<miCadenac.length;j++){
                //console.log(miCadena[j]);
                if(miCadenac[j]!='"'){
                    cadenac=cadenac+miCadenac[j];
                    //console.log(cadena2);
                }
            
            }
            val_con_int = parseFloat(cadenac);
        }
           

            //console.log(val_con_int+" int")
            console.log(val_con_int+" int")
            console.log(anio)
            var cont_max = 0;
            var cont_min = 0;
            for (let i=5;i<dataArray.length;i++){
                tercer = dataArray[i].split(',');
                //console.log(tercer)
                if((tercer[an])!='"0"' && (tercer[an]!='""') ){
                    

                    var miCadenat = ""+tercer[an];
                    //console.log(miCadenat+" cadenat")
                    var cadena=""
                    for (let j=0;j<miCadenat.length;j++){
                        //console.log(miCadena[j]);
                        if(miCadenat[j]!='"'){
                            cadena=cadena+miCadenat[j];
                            //console.log(cadena2);
                        }
                    }
                    //console.log(cadena+" 111")

                    

                    if(cont_max<5){ 
                        if(parseFloat(cadena)>val_con_int){
                        console.log(`-------------Datos:	${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}`);
                        cont_max=cont_max+1                                     
                    }
                    


                               }
                               
                    if(cont_min<5){ 
                       if(parseFloat(cadena)<val_con_int){
                        //console.log(`-------------Datos:	${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}`);
                        cont_min=cont_min+1                                     
                            }           

                }
            }
            }

            //console.log(posicion_pais+" pos")
            
            


                console.log("\n\n\n")
        
            //console.log(vec[0])
           var miCadena4="";
           var miCadena5="";
           
            for (let i = 1; i < vec.length; i++) {
                for (let j = 0; j < vec.length - 1; j++) {
                        var cadena4="";
                        var cadena5="";
                    
                        miCadena4 =""+vec[j][an];
                    
                        for (let j=0;j<miCadena4.length;j++){
                            //console.log(miCadena[j]);
                            if(miCadena4[j]!='"'){
                                cadena4=cadena4+miCadena4[j];
                                //console.log(cadena2);
                            }
                        }


                        miCadena5 =""+vec[j+1][an]; 

                        for (let j=0;j<miCadena5.length;j++){
                            //console.log(miCadena[j]);
                            if(miCadena5[j]!='"'){
                                cadena5=cadena5+miCadena5[j];
                                //console.log(cadena2);
                            }
                        }
                        

                    
                        if (parseFloat(cadena4) < parseFloat(cadena5)) {
                            tem = vec[j];
                            vec[j] = vec[j + 1];
                            vec[j + 1] = tem;
                        }
                    
                }
            }
            console.log("SIUUUUUUUUUUU\n");
            //console.log(vec.length)
            console.log(vec[0][an]);
            console.log()
            
            //console.log(vec[1][an]);
            

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