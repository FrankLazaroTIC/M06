
function potencies(){
let n1 = prompt("Introdueix un numero (Calcúl amb MathPow): ");
let n2 = prompt("Introdueix un numero (Calcúl amb bucle): ");

let resultat=Math.pow(n1,n2);
    console.log(resultat)
}



function mitjana(){
    let num1=parseInt(prompt("Introdueix el primer numero : "));
    let num2=parseInt(prompt("Introdueix el segon numero : "));
    let num3=parseInt(prompt("Introdueix el tercer numero : "));


//Mitja
    let mitja = (num1+num2+num3)/2;
    console.log(mitja);


//Mitjana
    
    let nums = [num1,num2,num3].sort(function(a,b){
        return a-b;
    });
    

//Major
    let numMax = Math.max(num1,num2,num3);

//Menor
    let numMin= Math.min(num1,num2,num3);


    console.log("Mitja: "+mitja+" Mitjana: "+nums[1]+" Major: " + nums[2]+" Minim: "+nums[0]);
}


