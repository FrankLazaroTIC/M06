
function taulaMultiplicar(){
let num = prompt("Introdueix un número");

    console.log(`Taula de multiplicar del número ${num}`);
    for(let i=0; i<10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

function fibonacci(){
let numFib=parseInt(prompt("Introdueix un número"));

    let n1=0;
    let n2=1;
    let resultat="";

    for(let x=2;x<=numFib;x++){
        resultat+=n1+"";
        let aux= n1+n2;
        n1=n2;
        n2=aux;
    
    }
    console.log(resultat);
}