//Fer una taula de multiplicar on demanes a l'usuari les files o columnes

function crearTaulaMult(){
    let columnes =prompt("Columnes ");
    let files =prompt("Files");
    
    //Creem l'element TABLE
    let table=document.createElement("table");
    //Creem el cos de la taula
    let tblBody =document.createElement("tBody");
    //Amb el .border especifico el tamany de la linea que separa les files i columnes
    table.border=1;

    //Fem dos iteracions
    for (let i = 0; i < files; i++) {
        //La primera iteracció crea l'element fila i vegades
        let filesTaula = document.createElement("tr");
        for(let x = 0; x < columnes; x++){
            //La segona crea l'element columna x vegades
            let columna = document.createElement("td");
            //I emmagatzema el valors "cordenades que seran "i" i "x" " 
            let cordenades = document.createTextNode(
                ((i+1)*(x+1)),
            )
            //Despres afegim a a la columna el valor de cordenades    
            columna.appendChild(cordenades);
            //I afegim la columna a la taula
            filesTaula.appendChild(columna);

        }
        //Per finalitzar afegim les files al cos de la taula
         tblBody.appendChild(filesTaula);
         //I afegim el cos al element taula
         table.appendChild(tblBody);
         //Mostrem la taula al html
         document.body.appendChild(table);


    }
}


//Fer una taula dinamica on es demana numero de columnes (en color) 
//de la darrera fila i pinteu un en una piramide
function crearPiramide(){

    let columnes =prompt("Columnes ");
    let files =Math.ceil(columnes/2);
    

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

    for (let i = 0; i < files; i++) {

        let filesTaula = document.createElement("tr");

        let pintarBlanc = (columnes - blanc)/2;
        blanc+=2;

        for(let i = 0; i < pintarBlanc; i++){
            pintar(filesTaula,"white");
        }
        for(let x = 0; x < red; x++){
            pintar(filesTaula,"red");
        }
        red+=2;

        for(let i = 0; i < pintarBlanc; i++){
            pintar(filesTaula,"white");
        }
         tblBody.appendChild(filesTaula);
         table.appendChild(tblBody);
         document.body.appendChild(table);
    }
}


