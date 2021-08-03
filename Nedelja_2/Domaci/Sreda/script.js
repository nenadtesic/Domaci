/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima), izracunati koliko je dana potrebno puzu da se popne na drvo pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm. */
let puz = 0;
let drvo = 11;
let dana = 0;

while (puz < drvo) {
    if (puz < drvo) {
        puz += 3;
        drvo++
        dana++
        if (puz > drvo) {
            puz = drvo;
            console.log(`Dan ${dana}: Puz je presao ${puz}cm, visina drveta je ${drvo}cm`);
        } else {
            console.log(`Dan ${dana}: Puz je presao ${puz}cm, visina drveta je ${drvo}cm`);
        }
    }
}
console.log(`Puz se popeo na drvo za ${dana} dana`);


/* 2. Treba izracunati popust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/
let iznos = 2200;
let kupac = 'penzioner';
let vikend 
switch (kupac) {
    case 'zaposlen':
        if (iznos > 5000) {
            popust = iznos - (iznos * 0.05);
        } else {
            popust = iznos;
        }
        console.log(popust);
        break;

    case 'student':
        if (iznos > 3000) {
            popust = iznos - (iznos * 0.2);
        } else {
            popust = iznos;
        }
        console.log(popust);
        break;

    case 'penzioner':
        if (iznos > 2000) {
            popust = iznos - (iznos * 0.3);
        } else {
            popust = iznos;
        }
        console.log(popust);
        break;

    case 'firma':
        if (iznos > 10000) {
            popust = iznos - (iznos * 0.1);
        } else {
            popust = iznos;
        }
        console.log(popust);
        break;

    case 'vikend':
        popust = popust - (popust * 0.05);
        console.log(popust);

    default:
        iznos = iznos;
        console.log(popust);
        break;
}
