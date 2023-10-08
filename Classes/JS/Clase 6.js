/*
Una companyia de telefonica cobra 10c per l'establiment de trucada i 5c/minut (tarificat en segons) 
del temps introdueix (hh:mm:ss) i digues el cost de la trucada en format x€ i yc
*/

function costTrucada(){
    let hores=parseInt(prompt("Hora: "));
    let minuts=parseInt(prompt("Minut: "));
    let segons=parseInt(prompt("Segons:"));

    tempsTrucada = new Date();

    tempsTrucada.setHours(hores);
    tempsTrucada.setMinutes(minuts);
    tempsTrucada.setSeconds(segons)

    let totalSegons= (hores*3600)+(minuts*60)+segons;
    console.log("Total en segons: "+ totalSegons);
    
    let preuFinal=0.10+(totalSegons/60)*0.05;


    console.log("La trucada ha tingut una duració de "+tempsTrucada.getHours()+":"+tempsTrucada.getMinutes()+":"+tempsTrucada.getSeconds()
    +" i el seu cost ha sigut de "+preuFinal.toFixed(2)+"€" );
}

//Demanar a l'usuari un color en format (r,g,b) 3 numero (prompt) i convertirlo a Hexadecimal

function convertColorToHex(){
    let red = prompt("Introdueix un numero");
    let green = prompt("Introdueix un numero");
    let blue = prompt("Introdueix un numero");
    
    let redHex=red.toString(16);
    let greenHex=green.toString(16);
    let blueHex=blue.toString(16);

    if(redHex.length==1){
        redHex="0"+redHex;
    }
    if(greenHex.length==1){
        greenHex="0"+greenHex;
    } 
    if(blueHex.length==1){
        blueHex="0"+blueHex;
    }
    
    let rgb= redHex+greenHex+blueHex;
    console.log("#"+rgb.toString(16))
}

