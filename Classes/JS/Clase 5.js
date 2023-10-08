//Demanar a l'usuari un numero. Passar-lo a binari, octal i hexadecimal.(Utilizan bucles, condicionals, i operacions matematiques)
function convertirBinari(){
    let num=prompt("Introdueix un número : ");

    /*
    Creamos una varible que es el resultado del residuo del numero introducido 
    por el usuario entre 2 y al final no convertimos en String
    */
    let binary = (num % 2).toString();

    /*
    Creamos un bucle que si el numero introducido por el usuario es mayor que 1 
    */
    for (;num>1;) {
        //Dividimos el mismo entre 2 y lo convertimos en entero, es decir que el valor inicial de num ahora ha cambiado sera la mitad
        num = parseInt(num / 2);
        //La variable binary ahora se le sumara el resultado del residuo de la division de num entre 2. Y lo concatenamos sumandole entre parentesis el (Binary) 
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}


function convertirOctal(){
    let num=prompt("Introdueix un número per convertir en octal: ");

    let octal = (num % 8).toString();
    for (;num>7;) {
        num = parseInt(num / 8);
        octal =  (num % 8) + (octal);
    }
    console.log(octal.toString(8));

}

function convertirHex(){
    let num=prompt("Introdueix un número per convertir en octal: ");

    let hexadecimal = (num % 16).toString();

    for (;num>15;) {
        num = parseInt(num / 16);
        hexadecimal =  (num % 16) + (hexadecimal);
    }
    console.log(hexadecimal.toString(16));

}