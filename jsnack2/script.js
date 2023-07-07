/*
Snack2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

// Dichiaro variabili
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const list = [15, 89, 64, 56, 23, 1, 8, 45, 20, 12, 36, 32, 29];

// Scorro sulla lista per trovare i numeri dispari
for (let i = 0; i < list.length; i++) {

    if (list[i] %  2 === 0){
        // Il numero è pari
        secondBox.classList.add("text-success");
        secondBox.innerHTML += `<p>${list[i]}</p>`;

    } else {
        // Il numero è dispari
        firstBox.classList.add("text-danger");
        firstBox.innerHTML += `<p>${list[i]}</p>`;
    }
}