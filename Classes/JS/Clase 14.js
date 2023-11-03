/*
Obtenir la data actual i mostrar:
    -Avui és dd del mm del aaaa
    -Han passat n setmanes del any
    -El % de dies transcorreguts és nn,nn%
    -Queden un nn,nn% de dies a l'any
    -Ara són les hh:mm:ss
    -El % del dia que ha passat és nn,nn%
    -Quedan un % de nn % del dia
*/
function ultimateDate(){
    let iniciAny = new Date("01/01/2023");
    let avui = new Date();
    //Avui és dd del mm del aaaa
    console.log("Avui és "+ avui.getDate()+" del "+avui.getMonth()+" del "+avui.getYear()+"<br>");

    //Han passat n setmanes del any
    let setmanes = Math.floor(iniciAny.getTime() - avui.getTime());
    let setmanesPasades = Math.abs(Math.ceil(setmanes/(1000*7*24*60*60)-1));
    console.log("Han passat "+setmanesPasades+" setmanes del any <br>");

    //El % de dies transcorreguts és nn,nn%
    let dies= iniciAny-avui;
    let diesActuals = Math.abs(dies/(1000*60*60*24)); 
    let diesx100=diesActuals/360*100;
    console.log("El % de dies transcorregut és "+ diesx100.toFixed(2)+"%<br>");

    //Queden un nn,nn% de dies a l'any
    let diesRestants=Math.abs(diesx100-100);
    console.log("Queden un "+ diesRestants.toFixed(2)+"% de dies a l'any<br>");

    //Ara són les hh:mm:ss
    let horaActual = avui.getHours()+":"+avui.getMinutes()+":"+avui.getSeconds();
    console.log("Ara son les "+horaActual+"<br>");

    //El % del dia que ha passat és nn,nn%
    let horaEnMinuts = (avui.getHours()*60) + avui.getMinutes()+(avui.getSeconds()/60);
    let horaPorcentaje=horaEnMinuts/1440*100; 
    console.log("El % del dia que ha passat és "+horaPorcentaje.toFixed()+"%<br>");

    //Queden un nn,nn% de dies a l'any
    let horesRestants=Math.abs(horaPorcentaje-100);
    console.log("Queden un "+ horesRestants.toFixed(2)+"% de dies a l'any<br>");
}

/*
Fer un programa JS que comprovi si un codi EAN8 o EAN13 es correcte, ha de cumplirse:

       65839522 --> ? 

EAN8 :|2593856|  |2| 
      |-------|      |-|--> Control
         ||
         ||
    2*3 + 5*1 + 9*3 + 3*1 + 8*3 + 5*1 + 6*3 = 88 (fins 90 = 2)    

El digit final es la diferencia entre el num calculat i el proper multiple de 10

65839522 -> Correcte
65839521 -> Incorrecte
5029365779425 -> Correcte
5129365779425 -> Incorrecte

*/

//Funcio afegir 0
function addLeftZero(codi,max) {
    let codiStr = codi.toString();
    // Si el te menys de max de longitud s'afegiran 0 desde l'esquerra
    while (codiStr.length < max) {
      codiStr += "0"+ codiStr.toString(1);
    }
    return codiStr;
  }


function checkDigitControl(){
    let codiBarres=prompt("Introdueix el codi de barres");


    if(codiBarres.length>13){
       codiBarres.slice(0, 13);
    } else if(codiBarres.length<8){
        addLeftZero(codiBarres,8);
    } else if(codiBarres.length>8){
        addLeftZero(codiBarres,13)
    }
    console.log(codiBarres);

    var resultat = 0;

    for (let i = 0; i < codiBarres.length - 1; i++) {
        if (i % 2 == 0) {
            resultat += codiBarres[i] * 3; 
            console.log(resultat);
        } else {
            resultat += codiBarres[i];
            console.log(resultat);
        }
    }

    let codiBarresCheck = (10 - (resultat % 10)) % 10;
    console.log(codiBarresCheck)

    if (codiBarresCheck == codiBarres[codiBarres.length - 1]) {
        console.log("Correcte");
    } else {
        console.log("Incorrecte");
    }
}

function checkCodiBinari(){
    if(codiBarres.length>13){
        codiBarres.slice(0, 13);
     } else if(codiBarres.length<8){
         addLeftZero(codiBarres,8);
     } else if(codiBarres.length>8){
         addLeftZero(codiBarres,13)
     }
 
}