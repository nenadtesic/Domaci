// Data su 4 stringa. 
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";

let string1Duzina = string1.length;
let string2Duzina = string2.length;
let string3Duzina = string3.length;
let string4Duzina = string4.length;

let najduzi, najkraciSadrziString, sastavljeniStringovi;

//1. Proveriti koji je string najduzi i ispisati samo njega

if (
    string1Duzina > string2Duzina &&
    string1Duzina > string3Duzina &&
    string1Duzina > string4Duzina
  ) {
    najduzi = string1;
  }
  
  if (
    string2Duzina > string1Duzina &&
    string2Duzina > string3Duzina &&
    string2Duzina > string4Duzina
  ) {
    najduzi = string2;
  }
  
  if (
    string3Duzina > string1Duzina &&
    string3Duzina > string2Duzina &&
    string3Duzina > string4Duzina
  ) {
    najduzi = string3;
  }
  
  if (
    string4Duzina > string1Duzina &&
    string4Duzina > string2Duzina &&
    string4Duzina > string4Duzina
  ) {
    najduzi = string2;
  }
  




//2. Ispisati najkraci string koji sadrzi rec "string"
let s1String = string1.includes("string");
let s2String = string2.includes("string");
let s3String = string3.includes("string");
let s4String = string4.includes("string");

if (s1String && s2String && s3String && s4String) {
  if (string1Duzina < string2Duzina < string3Duzina < string4Duzina) {
    najkraciSadrziString = string1;
  } else if (string2Duzina < string1Duzina < string3Duzina < string4Duzina) {
    najkraciSadrziString = string2;
  } else if (string3Duzina < string2Duzina < string1Duzina < string4Duzina) {
    najkraciSadrziString = string3;
  } else {
    najkraciSadrziString = string4;
  }
} else if (s1String && s2String && s3String) {
  if (string1Duzina < string2Duzina < string3Duzina) {
    najkraciSadrziString = string1;
  } else if (string2Duzina < string1Duzina < string3Duzina) {
    najkraciSadrziString = string2;
  } else {
    najkraciSadrziString = string3;
  }
} else if (s1String && s2String && s4String) {
  if (string1Duzina < string2Duzina < string4Duzina) {
    najkraciSadrziString = string1;
  } else if (string2Duzina < string1Duzina < string4Duzina) {
    najkraciSadrziString = string2;
  } else {
    najkraciSadrziString = string4;
  }
} else if (s1String && s2String) {
  if (string1Duzina < string2Duzina) {
    najkraciSadrziString = string1;
  } else {
    najkraciSadrziString = string2;
  }
} else if (s1String && s3String) {
  if (string1Duzina < string3Duzina) {
    najkraciSadrziString = string1;
  } else {
    najkraciSadrziString = string3;
  }
} else if (s1String && s4String) {
  if (string1Duzina < string4Duzina) {
    najkraciSadrziString = string1;
  } else {
    najkraciSadrziString = string4;
  }
} else if (s1String) {
  najkraciSadrziString = string1;
} else if (s2String) {
  najkraciSadrziString = string2;
} else if (s3String) {
  najkraciSadrziString = string3;
} else if (s4String) {
  najkraciSadrziString = string4;
} else {
  najkraciSadrziString = "trazeni string ne postoji";
}


//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti
let noviString1 = string1.substring(5);
let noviString2 = string2.substring(5);
let noviString3 = string3.substring(5);
let noviString4 = string4.substring(5);
const stringKojiJe = "string koji je";

if (
  !noviString1.includes(stringKojiJe) &&
  !noviString2.includes(stringKojiJe) &&
  !noviString3.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString2 + noviString3 + noviString4;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString2.includes(stringKojiJe) &&
  !noviString3.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString2 + noviString3;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString3.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString3 + noviString4;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString2.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString2 + noviString4;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString2.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString2;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString3.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString3;
} else if (
  !noviString1.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString1 + noviString4;
} else if (
  !noviString2.includes(stringKojiJe) &&
  !noviString3.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString2 + noviString3;
} else if (
  !noviString2.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString2 + noviString4;
} else if (
  !noviString3.includes(stringKojiJe) &&
  !noviString4.includes(stringKojiJe)
) {
  sastavljeniStringovi = noviString3 + noviString4;
} else if (!noviString1.includes(stringKojiJe)) {
  sastavljeniStringovi = noviString1;
} else if (!noviString2.includes(stringKojiJe)) {
  sastavljeniStringovi = noviString2;
} else if (!noviString3.includes(stringKojiJe)) {
  sastavljeniStringovi = noviString3;
} else if (!noviString4.includes(stringKojiJe)) {
  sastavljeniStringovi = noviString4;
} else {
  sastavljeniStringovi = "trazeni string ne postoji";
}

console.log("najduzi: ", najduzi);
console.log("najkraciSadrziString: ", najkraciSadrziString);
console.log("sastavljeniStringovi: ", sastavljeniStringovi);



//SA CASA ZADACI

//1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu
let kolicina = 1000;
let cenaArtikla = 500;
let ukupnaCena = (kolicina / 1000) * cenaArtikla;
console.log(ukupnaCena);


//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)
let kolicinaNovca = 200;
if (kolicinaNovca > ukupnaCena) {
    console.log(`kusur je ${kolicinaNovca - ukupnaCena}`);
} else {
    console.log(`Nemate dovoljno novca`);
}