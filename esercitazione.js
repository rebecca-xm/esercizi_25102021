/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: 
/* Il risultato di entrambi i console.log sarà 3.14, poiché la variabile - in questo caso const -
dichiarata al di fuori dell'istruzione condizionale diventa globale.*/

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA:
/* Il primo console.log stampa come risultato "violet" perché sia esso che la sua variabile di riferimento sono entrambi 
collocati all'interno dell'istruzione condizionale (scope locale). 
Tuttavia, credo che stamperebbe "violet" anche se la variabile non fosse stata dichiarata al suo interno,
poiché var rappresenta uno scope globale.
Quanto al secondo console.log, esso stampa "12", poiché sia esso che la sua variabile sono collocati in uno scope globale.
*/

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA:
/*Il primo console.log mi restituirà "Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana."
perché la prima variabile, let the second, è dichiarata anch'essa all'interno dello scope locale, mentre 
il parametro moreIngredients è il risultato della veridicità della seconda condizione. 
Invece, il secondo console.log stamperà undefined perché il parametro della variabile "let theSecond" è dichiarato
all'interno di uno scope locale diverso da quello in cui invece esso 
[=console.log("Il secondo ingrediente necessario: ", theSecond);] è contenuto. 
*/

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo,";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}