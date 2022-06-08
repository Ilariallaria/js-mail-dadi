// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creare lista mail per confronto
const listaMail = ['mariorosso@gmail.com', 'pinoarancione@gmail.com','ginogiallo@gmail.com','linaverde@gmail.com','tinablu@gmail.com','piaindaco@gmail.com','leovioletto@gmail.com'];

// domanda utente tramite prompt
const userMail = prompt('Inserisci la mail con cui hai effettuato la registrazione');

// variabile settata false in cui salvo se la mail è in lista o no
let mailFound = false;

// scorro lista mail per cercare mail utente
for (let i = 0; i<listaMail.length; i++){
    const thisMail = listaMail[i];

    // se l'elemento che sto controllando è uguale alla mail inserita dall'utente
    // mailFound diventa true
    if(thisMail === userMail){
        mailFound = true;
    }
}

// se mailFound diventa true, stampa conferna
if (mailFound === true){
    alert ('Conferma mail avvenuta con successo');
}

// altrimenti segnala all'utente che la mail non esiste
else{
    alert('Mail non trovata');
}