/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  console.log(l1 * l2);
};

area(25, 10);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (Number.isInteger(n1) && Number.isInteger(n2)) {
    if (n1 !== n2) {
      let sum = n1 + n2;
      return sum;
    } else {
      let sum = (n1 + n2) * 3;
      return sum;
    }
  } else {
    console.log("Uno o entrambi i numeri che hai inserito come parametri non sono interi");
  }
};

console.log(crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num) {
  if (num > 19) {
    const diffAbs = Math.abs(num - 19) * 3;
    return diffAbs;
  } else {
    const diffAbs = Math.abs(num - 19);
    return diffAbs;
  }
};

console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (Number.isInteger(n)) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Il numero che hai inserito come parametro non è intero");
  }
};

console.log(boundary(88));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  if (typeof str === "string") {
    if (str.startsWith("EPICODE")) {
      return str;
    } else {
      let testo = "EPICODE" + str;
      return testo;
    }
  } else {
    console.log("Il parametro che hai inserito non è una stringa");
  }
};

console.log(epify("ciao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if (typeof num === "number") {
    if (num > 0) {
      if (num % 3 === 0 && num % 7 === 0) {
        console.log("Il numero inserito come parametro è un multiplo sia di 3 che di 7");
      } else if (num % 3 === 0) {
        console.log("Il numero inserito come parametro è un multiplo di 3");
      } else if (num % 7 === 0) {
        console.log("Il numero inserito come parametro è un multiplo di 7");
      } else {
        console.log("Il numero inserito come parametro non è un multiplo di 3 o 7");
      }
    } else {
      console.log(
        "Il numero che hai inserito come parametro è negativo oppure zero, puoi inserire solo numeri positivi"
      );
    }
  } else {
    console.log("Il parametro che hai inserito non è un numero");
  }
};

check3and7(21);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  if (typeof str === "string") {
    const arrSplit = str.split("");
    const arrReverse = arrSplit.reverse();
    const strJoin = arrReverse.join("");
    console.log(strJoin);
  } else {
    console.log("Il parametro fornito non è una stringa");
  }
};

reverseString("Domenico");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  if (typeof str === "string") {
    const arrSplit = str.split(" ");
    const newArr = [];
    for (let i = 0; i < arrSplit.length; i++) {
      let word = arrSplit[i];
      let wordUpper = word.charAt(0).toUpperCase() + word.slice(1); //scrivendo solo 1 sto prendendo la parte di stringa a partire dalla seconda lettera che verrà concatenata con la lettere maiuscola trovata
      newArr.push(wordUpper);
    }
    let strJoin = newArr.join(" ");
    console.log(strJoin);
  } else {
    console.log("Il parametro fornito non è una stringa");
  }
};

upperFirst("ciao mi chiamo domenico");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  if (typeof str === "string") {
    const arrSplit = str.split("");
    arrSplit.pop();
    arrSplit.shift();
    const strJoin = arrSplit.join("");
    console.log(strJoin);
  } else {
    console.log("Il parametro fornito non è una stringa");
  }
};

cutString("epicode");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  if (typeof n === "number") {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      let random = Math.floor(Math.random() * 11);
      newArr.push(random);
    }
    return newArr;
  } else {
    console.log("Il parametro che hai inserito non è un numero");
  }
};

console.log(giveMeRandom(8));
