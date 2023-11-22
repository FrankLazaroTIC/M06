//Creem las variables globals per poder utilitzar-les a totes les funcions
let files, columnes;

//Variable que utilitzarem per quan acabem el joc
let gameOver = false; 

//Creem la funcio esMina amb els parametres x,y per saber si hi ha una mina
function esMina(x, y) {
  //Busquem l'element amb querySelector amb els atributs de data-x i data-y per saber la posicio
  let casella = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
   //Obtenim el valor de l'atribut "data-mina" de casella i el comparem amb "true" per saber si
  return casella.getAttribute("data-mina") === "true";
}

//Creem una funcio que estableix a la casella de posició x,y l’atribut del número de mines a nMinesAdjacents
function setMinesAdjacents(x, y, nMinesAdjacents) {
  //Busquem l'element amb querySelector amb els atributs de data-x i data-y per saber la posicio
  let casella = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
  //Li asignem l'atribut data-mines-adjacents amb el valor de nMinesAdjacents
  casella.setAttribute("data-mines-adjacents", nMinesAdjacents);
}

//Creem una funcio que recorrerà el taulell i ens retornara el numero de mines adjacents
function calculaAdjacents(x, y) {
  //Creem la variable 
  let numMinesAdjacents = 0;

  //Començem a recorrer la taula. Utilizem el -1 per explorar totes les casellas adjacents a l'actual
  for (let fila = -1; fila <= 1; fila++) {
    for (let columna = -1; columna <= 1; columna++) {
      //Assignem els valors a les variables, li assignem la posicio y i el valor de fila
      let filaAdjacent = y + fila;
      //Assignem els valors a les variables, li assignem la posicio x i el valor de columna
      let celdaAdjacent = x + columna;

      //Fem una condició que verifica si la casella adjacent esta dintre dels limits del taula 
      if ( filaAdjacent >= 0 && filaAdjacent < files && celdaAdjacent >= 0 && celdaAdjacent < columnes) {
        //Amb la funcio esMina i la posicios assignades a les variables verifiquem si hi ha una mina
        if (esMina(celdaAdjacent, filaAdjacent)) {
          //Si hi han augmentem la variable numMinesAdjacents
          numMinesAdjacents++;
        }
      }
    }
  }
  //Amb la funcio seguent assignem la quantitat de mines que hi ha adjacents a la casella actual
  setMinesAdjacents(x, y, numMinesAdjacents);
  //Retornem el numero de mines adjacents
  return numMinesAdjacents;
}

function obreCasella(casella) {
  //Utilitzem la variable global gameOver per bloquejar el taulell al acabar el joc
  if (gameOver) {
    return;
  }

  //Verifiquem si la casella ha sigut oberta gracies a la class asignada
  if (casella.classList.contains("abierta")) {
    return;
  }


  //Afegim una class a la casella per saber si s'ha obert
  casella.classList.add("abierta");

  //Guardem a la variable el valor del atribut data-mina
  let esMina = casella.getAttribute("data-mina") === "true";

  //Guardem l'imatge de la casella a la variable
  let img = casella.querySelector("img");

  //Guardem les cordenades a les variables x i y
  let x = parseInt(casella.getAttribute("data-x"));
  let y = parseInt(casella.getAttribute("data-y"));

  //Si la variable esMina es true
  if (esMina) {
    //Canviem la imatge de fons per la de mina
    img.src = 'mina20px.jpg';
    //Cridem la funcio mostrarMinas() per mostrar totes les mines de la taula
    mostrarMinas();
    //Mostrem que hem perdut el joc
    alert("GameOver");
    //Canviem el valor de gameOver perque sigui true i la proxima vegada estigui bloquejat amb el if i el return
    gameOver = true;
  } else {
    //Guardem a aquesta variable les mines adjacents
    let numMinesAdjacents = calculaAdjacents(x, y);

    //Si no hi han mines adjacents 
    if (numMinesAdjacents === 0) {
       //Començem a recorrer la taula. Utilizem el -1 per explorar totes les casellas adjacents a l'actual
      for (let fila = -1; fila <= 1; fila++) {
        for (let desplColumna = -1; desplColumna <= 1; desplColumna++) {
          //Assignem els valors a les variables, li assignem la posicio y i el valor de fila
          let filaAdjacent = y + fila;
          //Assignem els valors a les variables, li assignem la posicio x i el valor de columna
          let celdaAdjacent = x + desplColumna;

          //Fem una condició que verifica si la casella adjacent esta dintre dels limits del taula 
          if (filaAdjacent >= 0 && filaAdjacent < files && celdaAdjacent >= 0 && celdaAdjacent < columnes) {
            //Assignem les cordenades a la variable casella
            let casella = document.querySelector(`[data-x='${celdaAdjacent}'][data-y='${filaAdjacent}']`);
            //Utilitzem la funcio obreCasella per fer la recursivitat per obrir les caselles adjacents que no tinguin mina
            obreCasella(casella);
          }
        }
      }

      //Si no hi han mines adjacents li asignem a la casella el text 0
      casella.textContent = "0";
    } else {
      //Eliminiem la imatge amb la funcio remove();
      img.remove();
      //I li assignem el valor de mines adjacents
      casella.textContent = numMinesAdjacents;
    }
  }

  //Desactivem el click una vegada obert
  casella.onclick = null;
}

//Creem la funció per mostrar totes les mines del joc
function mostrarMinas() {
  //Guardem a la variable caselles l'element <td>
  let caselles = document.getElementsByClassName("casella");
  //Amb el for (let of) Recorrem la variable caselles amb el nou variable casella
  for (let casella of caselles) {
    //Guardem a la variable img la imatge que te la casella
    let img = casella.querySelector("img");
    //Guardem a la variable el valor del atribut data-mina
    let mina = casella.getAttribute("data-mina") === "true";
    
    //Si mina es true canviem la imatge i li assignem la imatge de mina
    if (mina) {
      img.src = 'mina20px.jpg';
    }
  }
}

function iniciarPartida() {
  //Utilitzo la variable gameOver per resetejar el bloqueig de la taula al acabar el joc
  gameOver=false;
  //Demanem las columnes i files per crear el taulell
  files = parseInt(prompt("Número de files"));
  columnes = parseInt(prompt("Numero de columnes"));

  //Verifiquem si les files i columnes entren en les condicions per fer la taual
  if (files < 10) {
    files = 10;
  } else if (files > 30) {
    files = 30;
  }

  if (columnes < 10) {
    columnes = 10;
  } else if (columnes > 30) {
    columnes = 30;
  }

  //Creem la funcio crearTaulell per crear la taula
  function crearTaulaPescamines(){
  //Crear el text html i assignar-lo amb innerhtml
  let taulaHTML = "<table>";
    for (let x = 0; x < files; x++) {
      taulaHTML += "<tr>";
    for (let y = 0; y < columnes; y++) {
        //Cream l'etiqueta <td> amb els atributs corresponents                    
        taulaHTML +=`<td data-mina='false' data-x=`+x+` data-y=`+y+` class="casella" onclick="obreCasella(this)" oncontextmenu="return false">
        <img id="imatge" src='fons20px.jpg' /></td>`;//També creem un img que li assignem el fons i la funcio obreCasella
      }
      taulaHTML += "</tr>";
    }
    //Tanquem l'etiqueta de la taula y l'afegim al <div> amb id="taulell")
    taulaHTML += "</table>";
    document.getElementById("taulell").innerHTML = taulaHTML;
  }
  
  //Creem la funció setMines per assignar les mines al taullel
  function setMines() {
    //Calculem el 17% de les caselles totals
    let mines = Math.ceil((columnes * files) * 0.17);
    //Agafem el <td> amb els atributs i l'assignem a la variable casella
    let caselles = document.getElementsByClassName("casella");
    //Fem un bucle que fara iteracions iguals al valor de mines
    for (let i = 0; i < mines; i++) {
      //Creem una funcio on obtenim un índex aleatori dins la longitud de caselles
      let casellaRandom = Math.floor(Math.random() * caselles.length);
      //Assignem l'atribut "data-mina" a "true" a la casella seleccionada 
      //aleatòriament per saber que hi ha una mina
      caselles[casellaRandom].setAttribute("data-mina", "true");
    }
  }


  //Creem la taula amb les mines
  crearTaulaPescamines();
  //Assigno les mines
  setMines();

}