/*
Obtenir un numero a l'atzar entre 1-100. Es tracta de que l'ususari endevini.
Si l'acerta se li mostrara en pantalla "Obtingut en x intents". Si introdueix un zero es pintara "Game Over"
i es sortira
Si falla se li dira "menor" o "major". Si introdueix algun valor invalid no passa res (es segueix)
pero es compta com in intent mes
*/

function jocAtzar100(){
    //Generem el numero aleatori del joc
    let numWinner = Math.round(Math.random()*(100-1)+1);

    let numUser = parseInt(prompt("Introdueix el numero que creus que es el valid"));

    let cont=1;

    console.log(numWinner);

    while (numUser !== numWinner) {
        if (numUser === 0) {
            console.log("GAME OVER");
            return;
        } else if (numUser < numWinner) {
            console.log("El número es mes gran.");
        } else if (numUser > numWinner) {
            console.log("El número es menor.");
        }

        cont++;
        numUser = parseInt(prompt("Introdueix un altre número"));
    }

    console.log("YOU WIN Obtingut en "+cont+" intents");
}