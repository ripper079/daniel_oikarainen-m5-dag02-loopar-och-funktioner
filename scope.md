# Scope: gissa först, kör sedan

Kopiera koden nedan till en ny fil, `src/scope.ts`, och lägg raden `import "./scope";` överst i `src/loopar.ts`. Då körs den när sidan laddas.

Obs: i TypeScript syns några av felen redan som röda understrykningar. Det är en del av poängen.

**Gissa vad varje `console.log` skriver ut INNAN du kör.** Skriv din gissning som kommentar bredvid.

```ts
const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning:  "Kardemumma" (75% säker)
  console.log(recept); // gissning: "hemligt" (100% säker)
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: Samma logik som ovanstående, 2 (75% säker)

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: Retuner the lokala värder 101 (85% säker)
console.log(räknare); // gissning: Bibehåller vördet from rad 25, dvs 2 (95% säker)

// Ta bort kommentaren på nästa rad och läs felet:
//console.log(recept);    // gissning: LOL - tog bort den här och inte i scope.ts först
// Varibel finns inte i scope/räckvidden så skulle gissa på ReferenceError eller liknande

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}
// Ta bort kommentaren på nästa rad och läs felet:
// console.log(i);         // gissning: Samma sak här, varibel i finns inte i scope/räckvidden så skulle gissa på ReferenceError eller liknande
```

## Skriv din regel

Fyll i med egna ord:

- En variabel som skapas inuti en funktion kan INTE ses utanför funktionen.
- En funktion kan se variabler som ligger inuti den OCH dom globala.
- `let i` i en for-loop lever enbart i for loopen dvs mellan {}, aka måsvingarna
