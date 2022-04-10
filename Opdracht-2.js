/*
Opdracht 2 - Elementen in de DOM plaatsen
Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
1. Maak een nieuwe variabele om berekende uitverkochte tv's te weergeven
2. Een functie declareren:
    a. Maak nieuwe functie
    b Haal gegevens uit array methode opdracht 1
    c. omschrijf een conditie die checkt telkens hoe veel er waar is.
    d. Omschrijf wat er moet gebeuren als die conditie wordt geraakt = ++
    e. pas een for loop toe om de hele lijst te checken.
3. consolelog de uitkomst
 */
const howManyTvSoldout = function(){

let tvSold = 0;

for(i=0; i<tvSoldOut.length; i++){
     tvSold++;
};
console.log(`Er zijn ${tvSold} tv's verkocht`);

};

howManyTvSoldout();

/*
Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
1. nieuwe const aanmaken die een element kan aanmaken
2. element benoemen
3. attribuut toevoegen aan element
4. groene tekst definieren
*/

// let tvSoldText = document.createElement('H3');
// tvSoldText.textContent = "er zijn tvs verkocht"
// tvSoldText.setAttribute('class', 'green-text');
//
//
// const para = document.createElement("h3");
// const node = document.createTextNode("Er zijn tv's verkocht");
// para.appendChild(node);
//
// const element = document.getElementById("div1");
// const child = document.getElementById("p1");
// element.insertBefore(para, child);



/*
Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
1. array mappen die het aantal  ingekochte een nieuwe array van maakt.
2. een for loop creeearen die de waardes bij elkaar optelt.
3. console.log die waardes
*/

const listInkoop = inventory.map((tv) =>{
    return(tv.originalStock);
});

console.log(listInkoop);

let listInkoopSum = 0;

for(i=0; i<listInkoop.length; i++){
    listInkoopSum += listInkoop[i];
};
console.log(listInkoopSum);



/*
Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
1.
2.
3.
4.
5.

Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
1. variabele maken met nieuwe uitkomst
2. list optellen met aantal verkochte tv's
3. variabele krijgt waarde ingekochte tv's - verkochte tv's = tv's die nog verkocht moeten worden/
 */




const listVerkoop = inventory.map((tv) =>{
    return(tv.sold);
});
console.log(listVerkoop);

let listVerkoopSum = 0;

for(i=0; i<listVerkoop.length; i++){
    listVerkoopSum += listVerkoop[i];
};
console.log(listVerkoopSum);