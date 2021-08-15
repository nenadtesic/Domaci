//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
let nekiNiz = [2,5,6,11,15,22,55]
function deljivSa5(niz) {
    let tmp = []
    for (let i = 0; i < niz.length; i++) {
        if(niz[i] % 5 == 0)
        tmp.push(niz[i])
    }
    console.log(tmp)
}
deljivSa5(nekiNiz)

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
    // * Ime 
    // * Vrsta 
    // * Sposobnosti (niz sposobnosti pokemona) 
    // * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

    //(Napraviti niz od ovih objekata)
let pokemon1 = {
    ime: 'Charizard',
    vrsta: 'Fire-Flying-Dragon',
    sposobnosti: ['Flamethrower','Solar Power','Flight'],
    karakteristike: {
        napad: 84,
        odbrana: 78,
        brzina: 100
    }
}
let pokemon2 = {
    ime: 'Pikachu',
    vrsta: 'Electric',
    sposobnosti: ['Thunder Shock','Electro Ball','Thunder Wave'],
    karakteristike: {
        napad: 80,
        odbrana: 50,
        brzina: 120 
    }
}
let pokemon3 = {
    ime: 'Sandslash',
    vrsta: 'ground-dwelling pholidote',
    sposobnosti: ['Sand Veil','Sand Rush','Earthquake'],
    karakteristike: {
        napad: 77,
        odbrana: 56,
        brzina: 60
    }
}
let pokemon4 = {
    ime: 'Kabutops',
    vrsta: 'Rock/Water Fossil',
    sposobnosti: ['Rock Throw','Smack Down','Skull Bash'],
    karakteristike: {
        napad: 115,
        odbrana: 105,
        brzina: 80
    }
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]


//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona
function jedanNizSposobnosti(niz) {
    let tmp = []
    niz.forEach(sposobnost => {
        sposobnost.sposobnosti.forEach(spo => {
            tmp.push(spo)
        })
    });
    return tmp
}
console.log(jedanNizSposobnosti(pokemoni));




