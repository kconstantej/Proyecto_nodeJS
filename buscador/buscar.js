const fs = require('fs');
const colors = require('colors');
var datos_archivo
var anio
//se crea una promesa
let crearArchivo = (archivo,pais,anio,opcion)=>{
    return new Promise((resolve,reject)=>{
        
    if (!fs.existsSync(archivo)){
        reject('error el archivo no existe');
    }else{    
        fs.readFile(archivo, 'utf8', function (err, data) {
            var dataArray = data.split(/\r?\n/);
            var a =dataArray[4].split(',');
            var an;
            var archivo_general="";
            
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

            for (let i=5;i<dataArray.length-1;i++){
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
                    //console.log('---------------------------------------------',acum)
                    //resolve(datos_archivo);
                            
                }
            }

            res=parseFloat(acum)/x;
            //console.log('-------------'+acum);   
            
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
                    archivo_general="\n\n"+archivo_general+" Consulta\n"+datos_archivo+"\n"
                            
                }
            }
            //console.log(x1)            
            res1=parseFloat(acum1)/(x1);
            res2=parseFloat(acum_pais)/(x2);
            
            archivo_general=archivo_general+"\nMEDIA DE SUSCRIPCIONES AÑO "+anio+" es: "+res+"\n\n\n\n"
            

            if(res1>res2){
                archivo_general=archivo_general+"La media mundial: "+res1+" es mayor a la media "+res2+" del pais: "+pais+"\n\n";
            }else{
                archivo_general=archivo_general+"La media mundial: "+res1+" es menor a la media "+res2+" del pais: "+pais+"\n\n";
            }
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
            //console.log(val_con_int+" int")
            //console.log(anio)
            var cont_max = 0;
            var cont_min = 0;
            var arch1 = "";
            var arch2 = "";
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
                        arch1=arch1+`Datos: ${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}\n\n`;
                        cont_max=cont_max+1                                     
                    }
                    


                               }
                               
                    if(cont_min<5){ 
                       if(parseFloat(cadena)<val_con_int){
                        arch2=arch2+  `Datos: ${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}\n\n`;
                        cont_min=cont_min+1                                     
                            }           

                }
            }
            }

            //console.log(posicion_pais+" pos")
            
            



           archivo_general = archivo_general+" 5 encima\n"+arch1+"\n"
           archivo_general = archivo_general+" 5 debajo\n"+arch2+"\n"
            
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
            //console.log("SIUUUUUUUUUUU\n");
            //console.log(vec.length)
            archivo_general=archivo_general+"TOP 5 PAISES\n\n"
            for(let i=0;i<5;i++){
                archivo_general=archivo_general+vec[i][0]+"\n"    
            }
            if(opcion!=null){
                fs.writeFile(`resultados/${opcion}.txt`, archivo_general, (err) => {
                    if (err){
                        console.log(err);
                    }else{
                        console.log(`resultados/${opcion}.txt`.magenta);
                    } 
                    
                  });
            }
            //console.log(archivo_general)
            resolve(archivo_general);
            //console.log(vec[1][an]);
            

        });
        
    }        
 } );
 }

var nom="";



//si el nombre de la propiedad es igual al valor crearArchivo : crearArchivo solo se puede poner el nommbre, se crea un objeto
module.exports = {
    crearArchivo,
};