// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




// crea variabile A dove salvare numero 1-6 random per computer
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log('Il numero da battere: ' + pcNumber);

// interazione utente lancio dado
alert('Premi OK per lanciare il tuo dado');


// crea variabile B dove salvare numero 1-6 random per utente
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Il tuo numero: ' + userNumber);

// confrontare A e B
// se A>B vince utente
if(userNumber > pcNumber){
    alert('Hai Vinto!');
}
// se A<B utente perde
else if( userNumber < pcNumber){
    alert('Hai perso!');
}
// se A=B non vince nessuno, riproporre lancio
else{
    alert('Parità, aggiorna la pagina per tentare ancora!');
}



