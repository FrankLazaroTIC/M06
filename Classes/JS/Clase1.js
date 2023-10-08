function onMouseAlert(){
    alert("Warning!");
}

function showAlert(){
    alert("Good Night");
}

function inputAlert(){
    Element = document.getElementById("inputId").value;
    alert("Warning!");
}

function multiplicableTable(){
    let num= document.getElementById("numId").value;
        if(num<=10&num>0){
            for(let m=0; m<10; m++){
                console.log(num+" x "+m+" = " + (num*m))
            }
        }
}