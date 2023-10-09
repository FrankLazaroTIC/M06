//Demanar 2 numeros (Preu producte/Diners lliurats) 
//tomar la combinacio dek minim canvi en bitllets i monedas 
//d'euro centims


//Fixar 2 decimals amb n.toFixed
function canviDiners(){
    //500
    let preuProducte =prompt("Introdueix el preu del producte");
    //699
    let dinersLliurats =prompt("Diners lliurats:");

    let diferenciaCanvi=parseFloat(dinersLliurats-preuProducte).toFixed(2);
    let canvi=diferenciaCanvi;

    //Creem un arrey que recorrera tots els diners de major a menor
    let diners=[500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01,0];
    
        for (let i = 0; i < diners.length; i++) {
            if(parseInt(diferenciaCanvi/diners[i])>0){
                console.log(parseInt(diferenciaCanvi/diners[i])+" de " + diners[i]);
                canvi= diferenciaCanvi%diners[i];
            }
        }

    console.log("Canvi total= " +canvi);
}


//Demanar a  l'usuari num de files i num de columnes crear a la pagina html una taula dinamica que mostri els numeros fila/col 
//document.createElement("tr")
//tr.appendChild(td)
//document.body.appendChild(table)

function crearTaula(){
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
                (i+1)+"."+(x+1),
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