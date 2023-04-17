/* DADI */
// 1. Generare un numero da 1 a 6 per utente e pc {math.random}
// 2. vince chi fa il punteggio più alto (o pareggio)
    /*  SE punteggio.user > pc VINCE user
        Altrimenti vince Pc */
// 3. COMUNICARE IL RISULTATO




// 1. GENERARE I NUMERI (& VARIABILI)
const user = Math.floor(Math.random() * 6) + 1;
const cpu = Math.floor(Math.random() * 6) + 1;

console.log(`User:`+ ` ` + user);
console.log(`CPU:`+ ` ` + cpu);


// 2. CONTROLLO VINCITORE
if (user > cpu) {
    document.getElementById(`result`).innerHTML = `Ha vinto l'Utente!`;
} else {
    document.getElementById(`result`).innerHTML = `Ha vinto la CPU!`;
}


// 3. COMUNICAZIONE RISULTATO
document.getElementById(`user_score`).innerHTML = `Utente:` + ` ` + user;
document.getElementById(`cpu_score`).innerHTML = `CPU:` + ` ` + cpu;


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 