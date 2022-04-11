/*
Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam]
zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
1. een variabele die de zin opslaat.
2. In de waarde van de variabelen staan nieuwe variabelen die de gegevens van een object invullen.
3. in de functie is een nieuwe functie nodig om andere waardes op te halen.
4.
 */

//Functie declareren
let GetListBrandNameType = function (index)
{

    const listBrandNameType = inventory.map((tv) => {
        return tv.brand + " - " + tv.name + " - " + tv.type;

    });
    console.log(listBrandNameType);
};


//Functie aanroepen
GetListBrandNameType();

//OPdracht 4b

//Functie declareren
let getPriceTV = function (index) {
    const priceTv = inventory.map((tv) => {
        return `$ ${tv.price},-`
    });
    console.log(priceTv);
};

//Functie aanroepen
getPriceTV();

/*Opdracht 4c
1. Geef een variabele die de inch schermen opslaat
2. Geef een variabele die inch omrekent naar cm.
3. Met de inventory.map maak je een nieuwe lijst met alleen inches en sla je op in de variabelen
4. met de inventory.map maak je een nieuwe lijst, maar bereken je meteen en sla je op onde de andere variabelen.
5. je logt beide uitkomsten door de variabelen in een zin te noemne.

 */






        const getArrInch = function () {

            arrInches = inventory[indexCijfer].availableSizes

            return arrInches;
        };


let indexCijfer = -1;
for (i = 0; i < inventory.length; i++) {
    indexCijfer ++
getArrInch();
    console.log(getArrInch());


};


