//Demanar a l'usuari un text i un caràcter --> dir si el caràcter esta contingut en el text de 2 a 4 vegades.

function caracterAlText(){
    let textUsuari = prompt("Introdueix un text");
    let caracterUsuari = prompt("Introdueix un caracter:");

    let contadorCaracter=0;
    for (let i = 0; i < textUsuari.length; i++) {
            if(textUsuari[i]==caracterUsuari){
                contadorCaracter++;
            }
    }

    if(contadorCaracter>=2 && contadorCaracter<=4){
        console.log("El caracter "+caracterUsuari+" apareix "+contadorCaracter+" vegades");
    } else {
        console.log("El caracter "+caracterUsuari+" no apareix de 2 a 4 vegades");
    }
    
}


//Demanar un text/paraula i numero a l'usuari i eliminar el caracter de la paraula corresponent a la posicio del numero demanat 


function treureCaracter(){
    let textUsuari = prompt("Introdueix un text");
    let numero = prompt("Introdueix un caracter:");

    let nouText1=textUsuari.substring(0,numero)+""+textUsuari.substring(numero,textUsuari.length-1);
  
    console.log(nouText1);
    
}


/* Demanar un text a l'usuari i mostra el text en 
MAJUSCULES 
LONGITUD TOTAL 
NOMBRE DE PARAULES 
VOCALS QUE CONTE 
NUMERO DE VOCALS
LA FRASE EN NUMERO DE LINIES ON CADA LINIA LI FALTA UNA LLETRA DE DAVANT
*/

function analisiText(){
    let textUsuari = prompt("Introdueix un text");

    //MAJUSCULES
    document.write("Majuscules: "+textUsuari.toUpperCase()+"<br>");

    //MINUSCULES
    document.write("Majuscules: "+textUsuari.toLowerCase()+"<br>");

    //LONGITUD TOTAL
    document.write("Longitud total: "+textUsuari.length+"<br>");

    //NOMBRE DE PARAULES
    document.write("Nombre de paraules: "+textUsuari.split(" ").length+"<br>")

    //VOCALS QUE CONTE I NUMERO DE VOCALS
    let contadorVocals=0;
    let vocalsAlText=" ";
    let expr= /[aeiouàèìòùáéíóúäëïöü]/gi;
    for (let i = 0; i < textUsuari.length; i++) {
        if(textUsuari[i].match(expr)){
            contadorVocals++;
            vocalsAlText+=textUsuari[i];
        }

    }
    document.write("Vocals que conte: "+vocalsAlText+"<br>")
    document.write("Numero de vocals: "+contadorVocals+"<br>")

    //LA FRASE EN NUMERO DE LINIES ON CADA LINIA LI FALTA UNA LLETRA DE DAVANT
    for (let i = 0; i < textUsuari.length; i++) {
        document.write(textUsuari.substring(i)+"<br/>");
    }
}

/*
El dia de nit bona Pepe vol saber quan falta per mitjanit. Demana una hora en format hh:mm fica el numero de minuts
que faltan fins mitjanit. Si l'hora 00:00 digues "Bon Any"
 */

function mitjaNit(){
    let hora=prompt("Introdueix la hora i minuts en format hh:mm");

    let horaMinuts=parseInt(hora.substring(0,2))*60;
    let minuts = parseInt(hora.substring(3));

    let laNostraHora = horaMinuts+minuts;

    let minutsPerMitjaNit=1440-laNostraHora;

    if(minutsPerMitjaNit==1440){
        document.write("Bon any nou");
    } else {
        document.write("Faltan "+ minutsPerMitjaNit+" minuts per mitjanit");
    }
   

}