/*
Snack2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

// Dichiaro variabili
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const list = [];
const totalList = document.querySelector(".total-list");
const btnCreate = document.querySelector(".btn-create");
const btnReset = document.querySelector(".btn-reset");

// Creo una lista con numeri randomici da 1 a 100
for (let i = 0; i < 25; i++) {
    list.push(Math.floor(Math.random() * (99 - 1 + 1)) + 1);

    // Mostro all'utente la lista creata
    totalList.innerHTML += `<span>${list[i]} </span>`;
}

// Al click del pulsante la lista viene divisa in due
btnCreate.addEventListener("click", function () {

    // Scorro sulla lista per trovare i numeri dispari
    for (let i = 0; i < list.length; i++) {

        if (list[i] % 2 === 0) {
            // Il numero è pari
            secondBox.classList.add("text-success");
            secondBox.innerHTML += `<li class="list-group-item">${list[i]}</li>`;
        } else {
            // Il numero è dispari
            firstBox.classList.add("text-danger");
            firstBox.innerHTML += `<li class="list-group-item">${list[i]}</li>`;
        }
    }
})

// Al click del pulsante la lista viene resettata
btnReset.addEventListener("click", function () {
    location.reload();
})

