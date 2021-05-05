// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// controlla se il numero è nell'array
function controlloNumeroInArray (elemento,array){
    for(var i=0; i < array.length; i++){
        if(elemento == array[i]){
            return true;
        }
        
    }
  
}

// numero random
function numeroRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var difficolta = parseInt(prompt("scegli una difficoltà tra queste opzioni \n 0 1 2"));
// variabile difficoltà
var x;
// switch difficoltà
switch (difficolta) {
    case 0:
        x = 100;
        break;
    case 1:
        x = 80;
        break;
    case 2:
        x = 50;
        break;
    default:
        alert("non è un opzione valida");
}

console.log("difficoltà",difficolta);

// variabili

var bombe = [];

var maxTentativi = 84;
maxTentativi = 5;

var tentativi = [];

var bombaSingola;

// Il computer deve generare 16 numeri casuali tra 1 e 100.

for(i=0; i < 16; i++){
    bombaSingola = numeroRandom(1,x);
    
    console.log("bomba generata: ",bombaSingola, bombe.length);
    if(!controlloNumeroInArray(bombaSingola,bombe)) {
        
        bombe.push(bombaSingola);
        
    }
   
}

console.log(bombe);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeroUtente;
var haiPerso = false;

for(i=0; i < maxTentativi && haiPerso == false; i++){

    do {

        numeroUtente = parseInt(prompt("inserisci un numero fra 1 e " +  x));

    }
    while(controlloNumeroInArray(numeroUtente, tentativi));

    if(controlloNumeroInArray(numeroUtente, bombe)){
         alert("hai perso");
         haiPerso = true;
    } else {
         tentativi.push(numeroUtente);
    }

}

console.log("tentaivi", tentativi);

console.log("COMPLIMENTI, punti",tentativi.length);