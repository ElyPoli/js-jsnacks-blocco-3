/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// Dichiaro variabili e creo lista
const list = [];
const sum = 50;
const jsBoxCreate = document.querySelector(".js-box-create");
let sumList = 0;
let i = 0;

// Creo il campo di imput
jsBoxCreate.innerHTML =
    `
    <div class="mb-3 d-flex align-items-center justify-content-center pt-2 box-list-number">
        <label for="start1" class="form-label fs-4 pe-3">Inserisci un nuovo numero:</label>
        <input type="text" class="form-control w-25 list-number${i}" id="start1">
    </div>
    `;

const btnStartInput = document.getElementById("start-input");
const boxListNumber = document.querySelector(".box-list-number");
const numberListElement = document.querySelector(".list-number" + i);

// Creo un event listener al click del pulsante
btnStartInput.addEventListener("click", function () {

    const listNumberCreate = document.getElementById("list-number-create");
    const inputNumbers = document.querySelector(".input-numbers");

    while (sumList < sum) {
        // Aggiorno il campo di input
        const numberListElement = document.querySelector(".list-number" + i);
        boxListNumber.innerHTML =
            `
                <label for="start1" class="form-label fs-4 pe-3">Inserisci un nuovo numero:</label>
                <input type="text" class="form-control w-25 list-number${i}" id="start1">
            `;

        let numberList = parseInt(numberListElement.value);

        // Controllo input utente
        if (numberList <= 0 || isNaN(numberList) || numberList > sum) {
            alert("Inserisci un numero corretto");
        } else {
            sumList += numberList;

            // Controllo valore di sumList prima di aggiungere il nuovo valore alla lista
            if (sumList < sum) {
                list.push(numberList);
                inputNumbers.innerHTML = numberList;
            } else if (sumList === sum) {
                list.push(numberList);
                console.log("La somma dei valori che hai inserito da " + sumList);
                listNumberCreate.innerHTML = `La lista dei numeri inseriti è: ${list} e la loro somma è di ${sumList}`;
            } else {
                listNumberCreate.innerHTML = `La lista dei numeri inseriti è: ${list}. L'ultimo numero digitato (${numberList}) non è stato inserito in quanto la somma totale sarebbe di ${sumList} e supererebbe quindi ${sum}`;
            }
        }
        i++;
    }
})