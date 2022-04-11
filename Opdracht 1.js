/* Opdracht 1A
1.Array methode die alleen de type tv naam weergeeft.
 2. Array gebruiken.
    variable declraren voor de nieuwe lijst.
    .filter gerbuiken met een callback dat het types zijn
    Conditie benoemen: return alleen keyword weergeven type
    console.log nieuwe lijst (variabele benoemen)
 */

const tvType = inventory.map((tv) => {
        console.log(tv.type);
    }
);

/* opdracht 1B

1. nieuwe variabele maken voor uitkomst uitverkochte tv
2. een filter opmaken voor de conditie uitverkocht.
3. de console.log toepassen op de variabele.
 */

const tvSoldOut = inventory.filter((tv) =>{
    return tv.originalStock === tv.sold;
});

console.log(tvSoldOut);

/* Opdracht 1c:
Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
 1. variabele maken voor ambilight wel of niet
 2. filter method om tv's met ambilight te weergeven
 3. conditie benoemen
 4. consolelog de variabele
 */

const tvWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight  === true;
});
console.log(tvWithAmbilight);

/*Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
Log de uitkomst in de console.
1. variabele maken voor nieuwe lijst.
2. defienieren wat gesorteerd moet worden.
3. definieren op welke volgorde
 */



const tvOrderLH = function(tvs){
    const tvLowHigh =  inventory.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        };
    });

    console.log(tvLowHigh);
};

tvOrderLH();


