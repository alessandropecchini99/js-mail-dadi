/* MAIL */
// 1. Chiedere all'utente la sua mail {prompt}
// 2. Controllare nella lista chi può accedere {for}
    /*  RIPETI finchè è VERO i < lista mail 
            SE arrey[i] è presente, settare true
            ALTRIMENTI lasciare false
            poi mostrare il risultato
        FINE CICLO */
// 3. Alert del risultato {alert}



// 1. ARRAY - LISTA DELLE MAIL
let mail = [`alessandro@boolean.it`, `pecchini@boolean.it`, `henri@boolean.it`, `francesco@boolean.it`, `giuseppe@boolean.it`];
console.log(mail);

// DICHIARO LE VARIABILI
// mail inserita
const userMail = prompt('Inserisci la tua mail:   (mail valide in console)');
console.log(`Mail inserita:` + ` ` + userMail);
// variabile booleana di controllo
let ctrl = false;



// 2. CONTROLLO DELLA LISTA MAIL
for (i = 0; i < mail.length; i++) {

    if (mail[i] == userMail) {
        ctrl = true;
    }

}

console.log(ctrl);



// 3. ALERT DEL RISULTATO
if (ctrl == false) {
    alert(`Mail non riconosciuta`);
} else {
    alert(`Mail trovata!`);
}


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 