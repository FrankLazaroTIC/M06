//Escriu una funcio JS que donat un numero et torni el numero invertit

function invertirNumero(){
    let num = parseInt(prompt("Introdueix un numero"));
    let numInvertit= num.toString().split("").reverse().join("");
    
    console.log("Número invertit: "+ numInvertit);

}


//Escriu una funcio JS que digui si un string és polindrom o no (No espais)
// madam --> true
//pepe --> false
//nurses run --> true   

function polindrom(){
    let paraula = prompt("Introdueix una paraula:");

    let paraulaInvertida = paraula.split("").reverse().join("");

    if(paraula === paraulaInvertida){
        console.log("ES POLINDROM!!");
    } else{
        console.log("NO ES POLINDROM!! :( ")
    }
}
