/*
Snack3 (Bonus)
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/

// Dichiaro variabili
const numberUser = parseInt(prompt("Inserisci il numero di liste che vuoi creare"));
let random;
const numberAdd = 10;
let z = 0;

// Controllo valore inserito dall'utente
if (numberUser <= 0 || isNaN(numberUser)) {
    alert("Si è verificato un errore");
    location.reload();
}

console.log("Devo creare " + numberUser + " liste");

// Genero il numero di liste chieste dall'utente
for (let i = 1; i <= numberUser; i++) {
    z = 0;
    const listUser = [];

    // Aggiungo ad ogni lista 10 numeri casuali
    while (z < numberAdd) {
        // Genero numeri casuali da 1 a 100
        random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        console.log(random);

        // Aggiungo ogni numero generato alla lista
        listUser.push(random);

        // Aumento z
        z++;
    }

    // Stampo la lista generata
    console.log("Ecco la " + i + " lista generata: " + listUser);
}