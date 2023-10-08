function mesPropDe100(){
    let num1=prompt("Introdueix el primer numero : ");
    let num2=prompt("Introdueix el segon numero : ");

    let checkNum1=Math.abs(num1-100);;
    let checkNum2=Math.abs(num2-100);

    if(checkNum1<checkNum2){
        console.log(num1);
    }else if(checkNum1>checkNum2){
        console.log(num2);
    }else{
        console.log("Els dos numeros estan a la mateixa distancia")
    }
}

function demanarHora(){
    let hora=parseInt(prompt("Hora:"));
    let minut=parseInt(prompt("Minut: "));
    let segons=parseInt(prompt("Segons:"));

    horaAvui = new Date();
    horaAvui.setHours(hora);
    horaAvui.setMinutes(minut);
    horaAvui.setSeconds(segons+1);
    console.log(horaAvui.getHours()+":"+horaAvui.getMinutes()+":"+horaAvui.getSeconds());

}

//Demanar 3 numeros (any/mes/dia) i comprovar que es tracta de una data valida
function validarData(){
    let any=parseInt(prompt("Any:"));
    let mes=parseInt(prompt("Mes: "));
    let dia=parseInt(prompt("Dia:"));

    //Data vàlida més antiga 1/1/1970
    //Any mentres sigui positiu: ok
    dataAvui = new Date();

    dataAvui.setFullYear(any);
    dataAvui.setMonth(mes);
    dataAvui.setDate(dia);

    if(dataAvui.getFullYear()!=any && dataAvui.getMonth()!=mes && dataAvui.getDate()!=dia){
        console.log("Introdueix una data vàlida");
    } else{
        console.log("La data es valida: "+dataAvui.getFullYear()+"/"+dataAvui.getMonth()+"/"+dataAvui.getDate())
    }
        
      

    
}


