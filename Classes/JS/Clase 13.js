/*
Demanar a l'usuari a dir el primer any entre 
|any1 (2000-2050) i any2(2000-2050)|
les dues que comença en dimecres
*/

function primerDimecres(){
    let any1 = parseInt(prompt("Introdueix el primer any (Entre 2000-2050)"));
    let any2 = parseInt(prompt("Introdueix el primer any (Entre 2000-2050)"));

    for(let any=any1;any<=any2;any++){
        let data = new Date(any,0,1);
        if(data.getDay()==3){
            console.log("El primer dimecres de l'any es al "+any);
            break;
        }
        if(any==any2){
            console.log("No hi ha ningun any que comenci amb dimecres");
        }
    }
}

/*
Dir si una paraula introduida es pentavolica (conte 5 vocals)
*/

function pentavocalica(){
    let paraula = prompt("Introdueix una paraula");
    /*
    let exprA= /[aàáä]/gi;
    let exprE = /[eèéë]/gi;
    let exprI = /[iìíï]/gi;
    let exprU =/[uùü]/gi;
    let exprO =/[oòóö]/gi;
    */

    let arrayVocals = [/[aàáä]/gi,/[eèéë]/gi,/[iìíï]/gi,/[uùü]/gi,/[oòóö]/gi] ;
    let pentavocalica=false;
    for (let index = 0; index < paraula.length; index++) {
        if(paraula.match(arrayVocals[index])){
            pentavocalica =true;
        }else{
            pentavocalica=false;
            break;
        }
    }
    if(pentavocalica){
        console.log("Es pentavocalica");
    } else{
        console.log("No es pentavocalica")
    }
    /*
    if(paraula.match(exprA)&&paraula.match(exprE)&&paraula.match(exprI)&&paraula.match(exprU)&&paraula.match(exprO)){
        console.log("Es pentavocalica");
    }else{
        console.log("No es pentavocalica")
    }
    */
}
