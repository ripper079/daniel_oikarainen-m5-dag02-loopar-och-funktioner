// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  // TODO
  //Heltal - lägg enbart till en sträng
  if (Number.isInteger(pris))
    return pris + " kr";
  //Flyttal
  return pris.toFixed(2).replace(".", ",") + " kr";
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  const priceInOre = Math.round(pris * 100);    //Avrundar till heltal, denna klarar upp till 2 decimaler
  const momsInOre = Math.round(priceInOre * 12 / 112);
    return momsInOre / 100;
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  // TODO
  const amountProcent: number = pris * (procent / 100);
  console.log(amountProcent);

  return pris - amountProcent;
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  let isWeekend: boolean = false;

  if (veckodag === "lördag" || veckodag === "söndag")
    isWeekend = true;
  else
    isWeekend = false;

  console.log("veckodag is:", veckodag);
  console.log("isWeekend är", isWeekend);
  console.log("klockslag är", klockslag);
  
  //Helg
  if (isWeekend){
    if (klockslag >= 9 && klockslag < 16)
      return true;
  }
  //Vardag
  else{
    if (klockslag >= 7 && klockslag < 18)
      return true;
  }
  
  return false;
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  const numberElements: number = tal.length;

  if (numberElements === 0) return 0;

  let sum: number = 0;
  tal.forEach((singleNumber) => sum += singleNumber);

  return sum;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  if (tal.length === 0) return 0;

  let sum: number = 0;
  tal.forEach((singleNumber) => sum += singleNumber);
  const averageNumber: number = sum / tal.length;

  return averageNumber;
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  if (tal.length === 0) return undefined;

  //Vi sätter högsta talet på första elementet som referens
  let maxvalue: number = tal[0];
  for (let i = 1; i < tal.length; i++){
    //Detta betyder nytt max värde
    if (tal[i] > maxvalue) {
      maxvalue = tal[i];
    }      
  }

  return maxvalue;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  if (antal <= 0) return "";

  let textRepeat: string = "";
  for (let i = 0; i < antal; i++){
    textRepeat += text;
  }

  return textRepeat;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  //antal parameter blir automatisk till en sträng vid addition och ngn annan operand är sträng, t.ex name
  return antal + " x " + namn + ": " + formateraPris((pris*antal));
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
  return 2*n;
};
export const ärJämnt = (n: number): boolean => {
  //const isEven: boolean = n % 2 === 0 ? true : false;
  return  n % 2 === 0 ? true : false;
};
