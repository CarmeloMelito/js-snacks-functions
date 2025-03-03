/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameA(array, letter) {
    return array.filter(nome => nome.startsWith(letter));
}

const result = nameA(names, "A");
// Invoca la funzione qui e stampa il risultato in console

console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]