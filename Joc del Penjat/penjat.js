//Variables
let victorias=0;
let derrotas=0;
let partidesJugades=0;

//Funcio que comprova si l'usuari escriu una lletra
function charCheck(lletra){
    if(lletra.length==1&&lletra.match(/[a-zA-Z]/)){
        return true;
    }
    return false;
}

//Part 1
function iniciarJoc(){

    let opcioUsuari = prompt("Tria una opció --> 1.Iniciar un joc  2.Estadistiques 3.Sortir ");
    
    if (opcioUsuari == 1) {
      // Demanem a l'usuari la paraula
      let paraulaUsuari = prompt("El joc ha començat!! Introdueix una paraula:").toLowerCase();
    
      // Amb la funcio repeat() repetim el caracter _ les vegades=longitud de la paraula Usuari
      let paraulaJoc = "_".repeat(paraulaUsuari.length);
    
      // Torn de l'usuari

      //Variables usuaris
      let errors = 0;
      let win = 0;
      let lose = 0;
      let partides = 0;
      let paraulesFalledes=" ";
    
      //Mentres no tinguem 6 erros executarem el programa
      while (errors < 6) {
        let lletraUsuari = prompt("Introdueix una lletra").toLowerCase();
    
        if (!charCheck(lletraUsuari)) {
          console.log("Introdueix una lletra");
          continue;
        }
    
        let lletraInParaula = false;
        let nuevaParaulaJoc = "";
    
        //Fem un bucle per crear el nou string que es modificara segons s'accertin les lletres
        for (let x = 0; x < paraulaUsuari.length; x++) {
          if (paraulaUsuari[x] === lletraUsuari) {
            nuevaParaulaJoc += lletraUsuari;
            lletraInParaula = true;
          } else {
            nuevaParaulaJoc += paraulaJoc[x];
          }
        }
    
        paraulaJoc = nuevaParaulaJoc;
        
        //Si la paraula no inclou "_" fara:
        if (!paraulaJoc.includes("_")) {
          win++;
          partides++;
          console.log("YOU WIN!!La paraula era: "+ paraulaUsuari);
          break;
        } else if (!lletraInParaula) {
          errors++;
          paraulesFalledes+=lletraUsuari;
          console.log(paraulaJoc);
          console.log("Lletres fallades: " + errors + "/6:  Lletres : "+paraulesFalledes);
          if (errors === 6) {
            lose++;
            partides++;
            console.log("GAME OVER!! La paraula era: "+ paraulaUsuari);
            break;
          }
        } else {
          console.log(paraulaJoc);
          console.log("Lletres fallades: " + errors + "/6 ");
        }
      }
    
    } else if (opcioUsuari == 2) {
      console.log("Estadísticas");
      console.log("Partides: "+partides)
      console.log("Partides guanyades("+(wins/partides)*100 +"):"+wins);
      console.log("Partides guanyades("+(lose/partides)*100 +"):"+lose);

    } else if (opcioUsuari == 3) {
      console.log("Has sortit del joc");
    }
}


//Part 2
function novaPartida(){
  document.getElementById('lletresUtilitzades').innerHTML="";
  document.getElementById('abecedari').innerHTML="";
  document.getElementById('jocPenjat').innerHTML="";
  document.getElementById('imatgePenjat').innerHTML="";


  let errors=0;
  partidesJugades++;
  //Paraula a esbrinar
  let paraulaUsuari = prompt("El joc ha començat!! Introdueix una paraula:").toUpperCase();

  //Creació _ de la paraula en HTML
  let paraulaJoc = "_ ".repeat(paraulaUsuari.length);
  let lletresFallades=" ";
  let lletresFalladesDOM=document.createElement("h3");
    lletresFalladesDOM.textContent=lletresFallades;
    document.getElementById('lletresUtilitzades').appendChild(lletresFalladesDOM);
  
  let guions=document.createElement("h1");
    guions.textContent=paraulaJoc;
    document.getElementById('jocPenjat').appendChild(guions);

  
  let abecedari=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //Amb el createElement creem un boto per les lletres
  
  //Creació abecedari
  for (let i = 0; i < abecedari.length; i++) {
    let lletra=abecedari[i];
    let botoLletra=document.createElement('button');
    botoLletra.textContent=abecedari[i];
    document.getElementById('abecedari').appendChild(botoLletra);

    botoLletra.addEventListener('click',function(){
      //Si la lletra esta a la paraula executem la condició
      if (paraulaUsuari.includes(lletra)) {
        for (let j = 0; j < paraulaUsuari.length; j++) {
          if (paraulaUsuari[j] === lletra) {
            //Canviem el _ per la lletra esbrinada
            paraulaJoc = paraulaJoc.substring(0, j * 2) + lletra + paraulaJoc.substring(j * 2 + 1);
          }
        }

        //Actualitzem el contingut de guions per si hem esbrinat una lletra
        guions.textContent = paraulaJoc;

        //Verifiquem si hem guanyat utilitzan els guions com ha referencia, si no hi han es que hem esbrinat la lletra
        if (!paraulaJoc.includes("_")) {
          alert("YOU WIN!!");
          victorias++;
        }
      } else {
        // La lletra no hi es a la paraula
        lletresFallades+=lletra;
        lletresFalladesDOM.textContent = lletresFallades;
        errors++;
        document.getElementById("imatgePenjat").src="penjat_"+errors+".png";
        
        //Si tenim les vides arriben a 0 hem perdut
        if (errors === 6) {
          alert("GAME OVER!! La paraula era: " + paraulaUsuari);
          derrotas++;
          
          
          
        }
      }

      //Amb el disable desactivem l'opcio de fer click a la lletra
      botoLletra.disabled = true;
    })
  }
} 

function estadistiques(){
  //Creem la variable finesta que serà on s'obrira la nova finestra
    let finestra= window.open();
    //Escribim el contingut que volem a la nova finestra
    finestra.document.write("Partides jugades "+partidesJugades+"<br>");
    finestra.document.write("Partides guanyades("+(victorias/partidesJugades)*100 +"):"+victorias+"<br>");
    finestra.document.write("Partides guanyades("+(derrotas/partidesJugades)*100 +"):"+derrotas+"<br>");

}
function inici(){
  victorias=0;
  derrotas=0;
  partidesJugades=0;
}
