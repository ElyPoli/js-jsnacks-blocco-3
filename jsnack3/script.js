/*
Snack3 (Bonus)
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/

// Dichiaro variabili
let random;
const numberAdd = 10;
let z = 0;
const btnCreate = document.querySelector(".btn-create");
const btnReset = document.querySelector(".btn-reset");
const numberUserElement = document.querySelector(".number-of-list");
const listCreate = document.querySelector(".list-create");

btnCreate.addEventListener("click", function () {
    numberUser = parseInt(numberUserElement.value);

    // Controllo valore inserito dall'utente
    if (numberUser <= 0 || isNaN(numberUser)) {
        alert("Si è verificato un errore");
        location.reload();
    }

    // Genero il numero di liste chieste dall'utente
    for (let i = 1; i <= numberUser; i++) {
        z = 0;
        const listUser = [];

        // Aggiungo ad ogni lista 10 numeri casuali
        while (z < numberAdd) {
            // Genero numeri casuali da 1 a 100
            random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

            // Aggiungo ogni numero generato alla lista
            listUser.push(random);

            // Aumento z
            z++;
        }

        // Stampo la lista generata
        listCreate.innerHTML += `<p class="text-secondary fs-5 fw-bold">Ecco la ${i} lista generata ${listUser}</p>`;
    }
})

// Pulsante reset
btnReset.addEventListener("click", function () {
    location.reload();
})