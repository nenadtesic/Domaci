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

let btnIzaberiPokemona = document.querySelector('#izaberiPokemona')
let spisakPokemona = document.querySelector('#spisakPokemona')
let btnIzaberiProtivnika = document.querySelector('#izaberiProtivnika')
let spisakProtivnika = document.querySelector('#spisakProtivnika')
let pok1 = document.createElement('button')
let pok2 = document.createElement('button')
let pok3 = document.createElement('button')
let pok4 = document.createElement('button')
let prot1 = document.createElement('button')
let prot2 = document.createElement('button')
let prot3 = document.createElement('button')
let prot4 = document.createElement('button')

let pOsobinePokemona = document.querySelector('#karakteristike1')
let pOsobineProtivnika = document.querySelector('#karakteristike2')

let pPok1 = document.createElement('p')
let pPok2 = document.createElement('p')
let pPok3 = document.createElement('p')
let pPok4 = document.createElement('p')
let pProt1 = document.createElement('p')
let pProt2 = document.createElement('p')
let pProt3 = document.createElement('p')
let pProt4 = document.createElement('p')


btnIzaberiPokemona.addEventListener('click', event => {
    event.preventDefault()
    pok1.textContent = `${pokemon1.ime}`
    pok2.textContent = `${pokemon2.ime}`
    pok3.textContent = `${pokemon3.ime}`
    pok4.textContent = `${pokemon4.ime}`
    spisakPokemona.append(pok1,pok2,pok3,pok4)
    btnIzaberiPokemona.remove()
})
btnIzaberiProtivnika.addEventListener('click', event => {
    event.preventDefault()
    prot1.textContent = `${pokemon1.ime}`
    prot2.textContent = `${pokemon2.ime}`
    prot3.textContent = `${pokemon3.ime}`
    prot4.textContent = `${pokemon4.ime}`
    spisakProtivnika.append(prot1,prot2,prot3,prot4)
    btnIzaberiProtivnika.remove()
})

pok1.addEventListener('click', event=> {
    event.preventDefault();
    pPok1.innerHTML = 
    `ime: 'Charizard' <br>
    vrsta: 'Fire-Flying-Dragon' <br>
    sposobnosti: 'Flamethrower','Solar Power','Flight' <br>
    karakteristike: 
        napad: 84,
        odbrana: 78,
        brzina: 100`
    pOsobinePokemona.append(pPok1)
})

pok2.addEventListener('click', event=> {
    event.preventDefault();
    pPok2.innerHTML = 
    `ime: 'Pikachu' <br>
    vrsta: 'Electric' <br>
    sposobnosti: 'Thunder Shock','Electro Ball','Thunder Wave' <br>
    karakteristike: 
        napad: 80,
        odbrana: 50,
        brzina: 120`
    pOsobinePokemona.append(pPok2)
})

pok3.addEventListener('click', event=> {
    event.preventDefault();
    pPok3.innerHTML = 
    `ime: 'Sandslash' <br>
    vrsta: 'ground-dwelling pholidote' <br>
    sposobnosti: 'Sand Veil','Sand Rush','Earthquake' <br>
    karakteristike: {
        napad: 77,
        odbrana: 56,
        brzina: 60`
    pOsobinePokemona.append(pPok3)
})

pok4.addEventListener('click', event=> {
    event.preventDefault();
    pPok4.innerHTML = 
    `ime: 'Kabutops' <br>
    vrsta: 'Rock/Water Fossil' <br>
    sposobnosti: 'Rock Throw','Smack Down','Skull Bash' <br>
    karakteristike: {
        napad: 115,
        odbrana: 105,
        brzina: 80`
    pOsobinePokemona.append(pPok4)
})




prot1.addEventListener('click', event=> {
    event.preventDefault();
    pProt1.innerHTML = 
    `ime: 'Charizard' <br>
    vrsta: 'Fire-Flying-Dragon' <br>
    sposobnosti: 'Flamethrower','Solar Power','Flight' <br>
    karakteristike: 
        napad: 84,
        odbrana: 78,
        brzina: 100`
    pOsobineProtivnika.append(pProt1)
})

prot2.addEventListener('click', event=> {
    event.preventDefault();
    pProt2.innerHTML = 
    `ime: 'Pikachu' <br>
    vrsta: 'Electric' <br>
    sposobnosti: 'Thunder Shock','Electro Ball','Thunder Wave' <br>
    karakteristike: 
        napad: 80,
        odbrana: 50,
        brzina: 120`
    pOsobineProtivnika.append(pProt2)
})

prot3.addEventListener('click', event=> {
    event.preventDefault();
    pProt3.innerHTML = 
    `ime: 'Sandslash' <br>
    vrsta: 'ground-dwelling pholidote' <br>
    sposobnosti: 'Sand Veil','Sand Rush','Earthquake' <br>
    karakteristike: {
        napad: 77,
        odbrana: 56,
        brzina: 60`
    pOsobineProtivnika.append(pProt3)
})

prot4.addEventListener('click', event=> {
    event.preventDefault();
    pProt4.innerHTML = 
    `ime: 'Kabutops' <br>
    vrsta: 'Rock/Water Fossil' <br>
    sposobnosti: 'Rock Throw','Smack Down','Skull Bash' <br>
    karakteristike: {
        napad: 115,
        odbrana: 105,
        brzina: 80`
    pOsobineProtivnika.append(pProt4)
})