/* 
Demanar un nom d'arxiu a l'usuari i tornar per consola l'extensió del arxiu
*/

function extensioArxiu(){

    let nomArxiu =prompt("Introdueix el nom del arxiu ");

    let seperador="."
    let extensioArxiu = nomArxiu.split(seperador);

    console.log(extensioArxiu[extensioArxiu.length-1]);

}

/*
Demanar un text a l'usuari i dir si te el mateix numero de "a" que de "b"
*/

function comprovarAiB(){

    let text =prompt("Introdueix un text ");

    let a=0;
    let b=0;
    for (let i=0; i<text.length;i++){
        if(text[i]=="a"){
            a++;
        }
        if(text[i]=="b"){
            b++;
        }
    }

    if(a==b){
        console.log("Hi ha el mateix numero de a que de b")
        console.log("Hi han: "+a+" A i "+b+" B");
    } 
        console.log("No hi han el mateix numero de a que de b")
        console.log("Hi han: "+a+" A i "+b+" B");
}

/*
Demanar un text a l'usuari i dir si te el mateix numero de "a" que de "b"
*/

function longitudCadenas(){
    
    let cadena1 =prompt("Introdueix un text ");
    let cadena2 =prompt("Introdueix la segona cadena ");

    if(cadena1.length == cadena2.length){
        console.log("Les dues cadenas tenen la mateixa longitud");
    }
    console.log("Les dues cadenes no tenen la mateixa longitud");
}