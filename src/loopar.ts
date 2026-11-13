import "./scope";
// Dag 2, del 1: Loopar. Resultatet syns i Console (F12).

// UPPGIFT 1: skriv ut talen 1 till 10, ett per rad, med en for-loop.
for (let i = 1; i <= 10; i++){
    console.log(`Numero: ${i}`);
}

// UPPGIFT 2: skriv ut talen 10 till 1 (nedräkning) med en while-loop.
//            Skriv "Kaffe!" efter 1.
let counter = 10;
while (counter > 0)
{
    console.log(`Final countdown: ${ counter} `);
    counter--;
}

// UPPGIFT 3: gör samma sak som uppgift 1, men skriv bara ut jämna tal.
//            Tips: n % 2 === 0
for (let i = 1; i <= 10; i++){
    if ((i % 2) == 0){
        console.log(`Numeri pari: ${i}`);
    }
}

// UPPGIFT 4: här är kaféets prislista. Skriv ut ett kvitto med en for...of-loop:
//            "Kardemummabulle: 35 kr" osv, och sist "Summa: ... kr".
const prislista: number[] = [35, 32, 59, 45];
const namnlista: string[] = ["Kardemummabulle", "Bryggkaffe", "Ostmacka", "Latte"];
let totalPris: number = 0;
// TODO
console.log("----- KVITTO -----");
for (let i = 0; i < prislista.length; i++){
    console.log(`${namnlista[i]}: ${prislista[i]} kr`);
    totalPris += prislista[i];
}
console.log("------------------");
console.log(`Totalt: ${totalPris}`);

// UPPGIFT 5 (utmaning): skriv ut en multiplikationstabell för 3:ans tabell,
//            "3 x 1 = 3" till "3 x 10 = 30".
//När jag gick i skolan var multiplikationstabell upp till 12 och jag respekterar min lärare :D
console.log("3:ans multiplikationstabell upp till 12");
for (let i = 1; i <=12; i++){
    console.log(`3 * ${i} = ${ i * 3}`);
}