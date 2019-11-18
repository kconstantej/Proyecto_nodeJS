const fs = require('fs');
const colors = require('colors');
var datos_archivo
var anio
var vector_principal;
var valores_2;
var valores3;
var valores4;

let crearArchivo = (archivo,pais,anio,opcion)=>{
    return new Promise((resolve,reject)=>{
        
    if (!fs.existsSync(archivo)){
        reject('error el archivo no existe');
    }else{    
        fs.readFile(archivo, 'utf8', function (err, data) {
            var dataArray = data.split(/\r?\n/);
            vector_principal=media_del_año(dataArray,anio);
            var archivo_general="";
            var archivo_html="";
            var res1=0.0;
            var res2=0.0;
            var valor_consulta;
            res=vector_principal.res;
            vec=vector_principal.vec;
            an=vector_principal.an;
            var datos_archivo;
            var ex;
              
            
            valores_2=valores(dataArray,an,pais,anio,archivo_general);
            res1=valores_2.res1;
            res2=valores_2.res2;
            valor_consulta=valores_2.valor_consulta;
            datos_archivo=valores_2.datos_archivo;
            archivo_general=valores_2.archivo_general;
            archivo_html=valores_2.html;
            //console.log(archivo_html)
            archivo_general=archivo_general+"\nMEDIA DE SUSCRIPCIONES AÑO "+anio+" es: "+res+"\n\n\n\n"
            archivo_html=archivo_html+'<table class="table"><tr><th scope="col">MEDIA DE SUSCRIPCIONES AÑO '+anio+'</th>  </tr> <tbody>   <tr>  <td> '
            archivo_html=archivo_html+res+"</td>  </tr></tbody></table> "
            archivo_html=archivo_html+'<table class="table"> <tr>    <th scope="col">MEDIA MUNDIAL</th>     <th scope="col">ES</th> <th scope="col">MEDIA PAIS ('+pais+')</th>  </tr>  <tbody>    <tr>' 

            if(res1>res2){
                archivo_general=archivo_general+"La media mundial: "+res1+" es mayor a la media "+res2+" del pais: "+pais+"\n\n";
                archivo_html=archivo_html+'<td>'+res1+'</td> <td> mayor </td> <td> '+res2+"</td> " 
            }else{
                archivo_general=archivo_general+"La media mundial: "+res1+" es menor a la media "+res2+" del pais: "+pais+"\n\n";
                archivo_html=archivo_html+'<td>'+res1+'</td> <td> menor </td> <td> '+res2+"</td> "
            }

            valores3 = max_min(valor_consulta,dataArray,an,anio,archivo_general);
            archivo_general=valores3.archivo_general
            ex = archivo_html;
            archivo_html=archivo_html+'<table class="table"> <thead> <tr>   <th scope="col">N°</th>   <th scope="col">Datos</th>   <th scope="col">País</th>   <th scope="col">Año</th><th scope="col">Valor</th>  </tr> </thead>  <tbody> <tr>';
            archivo_html+=valores3.html;
            
            valores4 = top5(archivo_general,vec,an);
            archivo_general=valores4.archivo_general;
            archivo_html+=valores4.html;
            //console.log(archivo_html)
            

            console.log('-------------',opcion)
            if(opcion!=null){
                fs.writeFile(`resultados/${opcion}.txt`, archivo_general, (err) => {
                    if (err){
                        console.log(err);
                    }else{
                        console.log(`resultados/${opcion}.txt`.magenta);
                    } 
                    
                  });
            }
            fs.writeFile(`resultados/index.html`, archivo_html, (err) => {
                if (err){
                    console.log(err);
                }else{
                    console.log(`resultados/index.html`.magenta);
                } 
                
              });
            resolve(archivo_general);
            
            

        });
        
    }        
 } );
 }

var nom="";
function media_del_año(dataArray,anio){
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
          
            for (let i=5;i<dataArray.length-1;i++){
                n= dataArray[i].split(',');
                if((n[an])!='"0"' && (n[an]!='""') ){
                    
                    vec.push(n)
                    miCadena =""+ n[an];
                    x=x+1;
                   
                    var cadena2='';
                    for (let j=0;j<miCadena.length;j++){
                       
                        if(miCadena[j]!='"'){
                            cadena2=cadena2+miCadena[j];
                            
                        }
                    }
                   
                    acum=acum+(parseFloat(cadena2));
                   
                            
                }
            }

            res=parseFloat(acum)/x;
            
    return {res:res,vec:vec,an:an};
}
function valores(dataArray,an,pais,anio,archivo_general){
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
                   
                    if(newArray[1]=='"'+pais+'"'){
                    if((newArray[j])!='"0"' && (newArray[j]!='""') ){  
                        miCadena3 =""+ newArray[j];
                        
                        x2=x2+1;

                        var cadena222='';
                    for (let k=0;k<miCadena3.length;k++){
                      
                        if(miCadena3[k]!='"'){
                            cadena222=cadena222+miCadena3[k];
                          
                        }
                    }
                    acum_pais=acum_pais+(parseFloat(cadena222));
                   
                    
                    
                    }}
                    
                    if((newArray[j])!='"0"' && (newArray[j]!='""') ){
                   
                        miCadena2 =""+ newArray[j];
                   
                        x1=x1+1;
                    



                    var cadena22='';
                    for (let j=0;j<miCadena2.length;j++){
                        
                        if(miCadena2[j]!='"'){
                            cadena22=cadena22+miCadena2[j];
                            
                        }
                    }
                   
                    acum1=acum1+(parseFloat(cadena22));
                   
                    

                    }



                }
                if(newArray[1]=='"'+pais+'"'){
                  
                    valor_consulta=newArray[an];
                    var datos_archivo=`Datos:	${newArray[2]}\nPaís:	${newArray[0]}\nAño:	${anio}\nValor:	${newArray[an]}`;
                    var data = `<td>${newArray[2]}</td> <td>${newArray[0]}</td><td>${anio}</td> <td>${newArray[an]}</td>`;
                 
                    
                            
                }
            }
            archivo_html='<!DOCTYPE html><html>  <head>      <meta charset="utf-8">  <meta name="viewport" content="width=device-width"> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> </head> <body> <div class="card" style="width: 12rem;"> <div class="card-body">';
            archivo_html=archivo_html+'<h6> Consulta </h6>    </div> </div>  <table class="table">  <thead> <tr>   <th scope="col">N°</th>   <th scope="col">Datos</th>   <th scope="col">País</th>   <th scope="col">Año</th>   <th scope="col">Valor</th> </tr>   </thead> <tbody>  <tr> <th scope="row">1</th>'
            archivo_general=archivo_general+"Consulta\n"+datos_archivo+"\n"
            
            archivo_html=archivo_html+data+"</tr></tbody> </table> ";
            
            res1=parseFloat(acum1)/(x1);
            res2=parseFloat(acum_pais)/(x2);
    return {res1:res1,res2:res2,valor_consulta:valor_consulta,datos_archivo:datos_archivo,archivo_general,html:archivo_html}
}
function max_min(valor_consulta,dataArray,an,anio,archivo_general){
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
               
                if(miCadenac[j]!='"'){
                    cadenac=cadenac+miCadenac[j];
                   
                }
            
            }
            val_con_int = parseFloat(cadenac);
        }
           

      
            var cont_max = 0;
            var cont_min = 0;
            var arch1 = "";
            var arch2 = "";
            var archi1="";
            var archi2="";
           

            for (let i=5;i<dataArray.length;i++){
                tercer = dataArray[i].split(',');
            
                if((tercer[an])!='"0"' && (tercer[an]!='""') ){
                    

                    var miCadenat = ""+tercer[an];
                   
                    var cadena=""
                    for (let j=0;j<miCadenat.length;j++){
                        
                        if(miCadenat[j]!='"'){
                            cadena=cadena+miCadenat[j];
                            
                        }
                    }
                    

                    

                    if(cont_max<5){ 
                        if(parseFloat(cadena)>val_con_int){
                        arch1=arch1+`Datos: ${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}\n\n`;
                        cont_max=cont_max+1   
                         archi1 = archi1+`<td>`+cont_max+` </td>   <td> ${tercer[2]} </td> <td> '${tercer[0]}</td> <td>${anio}</td> <td>	${tercer[an]}</td> </tr>`;                                   
                    }
                    


                               }
                               
                    if(cont_min<5){ 
                       if(parseFloat(cadena)<val_con_int){
                        arch2=arch2+  `Datos: ${tercer[2]}\nPaís:	${tercer[0]}\nAño:	${anio}\nValor:	${tercer[an]}`;
                        cont_min=cont_min+1                                    
                         archi2 = archi2+`<td>`+cont_min+` </td>   <td> ${tercer[2]} </td> <td> '${tercer[0]}</td> <td>${anio}</td> <td>	${tercer[an]}</td> </tr>`;                                   
                        }           

                }
            }
            }
            
         
            
           

           
           archivo_general = archivo_general+" 5 encima\n"+arch1
           archivo_general = archivo_general+" 5 debajo\n"+arch2
           archivo_html='<div class="card" style="width: 12rem;"> <div class="card-body">'+"  <h6>5 Paises Superiores</h6>   </div> </div> "+archi1+"</tr></tbody> </table>"+'<table class="table">  <thead> <tr>   <th scope="col">N°</th>   <th scope="col">Datos</th>   <th scope="col">País</th>   <th scope="col">Año</th>   <th scope="col">Valor</th> </tr>   </thead> <tbody>  <tr> '+'<div class="card" style="width: 12rem;"> <div class="card-body"> <h6>5 Paises Inferiores</h6>'+archi2+" </div> </div>  </tr></tbody> </table>";
           

    return ({archivo_general:archivo_general,html:archivo_html})
}

function top5(archivo_general,vec,an){

    var miCadena4="";
    var miCadena5="";
    
     for (let i = 1; i < vec.length; i++) {
         for (let j = 0; j < vec.length - 1; j++) {
                 var cadena4="";
                 var cadena5="";
             
                 miCadena4 =""+vec[j][an];
             
                 for (let j=0;j<miCadena4.length;j++){
                     
                     if(miCadena4[j]!='"'){
                         cadena4=cadena4+miCadena4[j];
                        
                     }
                 }
                 miCadena5 =""+vec[j+1][an]; 

                 for (let j=0;j<miCadena5.length;j++){
                  
                     if(miCadena5[j]!='"'){
                         cadena5=cadena5+miCadena5[j];
                     
                     }
                 }
             
                 if (parseFloat(cadena4) < parseFloat(cadena5)) {
                     tem = vec[j];
                     vec[j] = vec[j + 1];
                     vec[j + 1] = tem;
                 }
             
         }
     }

    
    archivo_general=archivo_general+"TOP 5 PAISES\n\n"
    archivo_html='<h6>TOP 5 PAISES</h6>   <table class="table"> <thead> <tr>   <th scope="col">N°</th>   <th scope="col">Pais</th>    </tr>  </thead> <tbody> <tr>';
    var val_html="";
    for(let i=0;i<5;i++){
        archivo_general=archivo_general+vec[i][0]+"\n" 
        
        val_html= val_html+"<td> "+(i+1)+"</td> <td>"+vec[i][0]+"</td> </tr>"   
    }
    console.log(val_html)
    archivo_html=archivo_html+val_html+"</tr></tbody> </table>"
    return ({archivo_general:archivo_general,html:archivo_html});
}




module.exports = {
    crearArchivo,
   
};