/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// Dichiaro variabili e creo lista
const list = [];
const sum = 50;
let sumList = 0;
let i = 1;
let numberList;

while (sumList < sum) {
    numberList = parseInt(prompt("Inserisci il " + i + " numero tra 0 e 50:"));

    // Controllo input utente
    if (numberList <= 0 || isNaN(numberList) || numberList > sum) {
        alert("Inserisci un numero corretto");
        i--;
    } else {
        sumList += numberList;

        // Controllo valore di sumList prima di aggiungere il nuovo valore alla lista
        if (sumList < sum) {
            list.push(numberList);
            console.log(numberList);
        } else if (sumList = sum) {
            list.push(numberList);
            console.log(numberList);
            console.log("La somma dei valori che hai inserito da " + sumList);
        } else {
            console.log("Con l'aggiunta del " + i + " valore, la somma sarebbe di " + sumList + " supererebbe quindi 50");
        }
    }

    i++;

}

console.log(list);