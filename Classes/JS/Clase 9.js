/*
Ampliar la taula anterior per que pinti un romb
Es demana el numero de caselles vermelles de la linea central de un :
    ⬜⬜⬛⬜⬜
    ⬜⬛⬛⬛⬜
    ⬛⬛⬛⬛⬛
    ⬜⬛⬛⬛⬜
    ⬜⬜⬛⬜⬜
*/

function crearRomb(){

    let casellesLineaCentral =prompt("Numero de caselles vermelles de la linea central: ");

    let files =casellesLineaCentral;
    
    let mig = Math.ceil(files/2);

    let table=document.createElement("table");
    let tblBody =document.createElement("tBody");
    table.border=1;

    function pintar(filesTaula, color){
        let columna = document.createElement("td");
            columna.style.backgroundColor=color;
            columna.style.width="20px"
            columna.style.height="20px"
            filesTaula.appendChild(columna);
    }

    let red=1;
    let blanc=1;

    let blancMig=1;
    let redMig=mig;
    

    for (let i = 0; i < files; i++) {

        let filesTaula = document.createElement("tr");

                            //Primera iteracio (5-1)/2=2 
                            //Segona iteracio (5-3)/2=1 
                            //Tercera iteracio (5-5)/2=0
        let pintarBlanc = (casellesLineaCentral - blanc)/2; //2

        if(i>=mig){

            let pintarBlancInferior ;
            
            for (let i = 0; i <blancMig; i++) {
                pintar(filesTaula,"white");  
            }

    

            for(let i = 0; i < redMig; i++){   //Primera iteracio red= 1
                pintar(filesTaula,"red");   //Segona iteracio red= 3
                                            //Tercera iteracio red= 5  
            }
            
            redMig-=2;

            

            for (let i = 0; i <blancMig; i++) {
                pintar(filesTaula,"white");  
            }
            blancMig++;

            
        } else {
        
      
        blanc+=2; 
                      
                    
        for(let i = 0; i < pintarBlanc; i++){   
            pintar(filesTaula,"white");        
        }
        

        for(let i = 0; i < red; i++){  
            pintar(filesTaula,"red");   
                                        
        }

        red+=2; 

        for(let i = 0; i < pintarBlanc; i++){   
            pintar(filesTaula,"white");         
        }          
    }                               
        

         tblBody.appendChild(filesTaula);
         table.appendChild(tblBody);
         document.body.appendChild(table);

    }

}