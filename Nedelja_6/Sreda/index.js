let registrovaniKupac = [new Kupac('Pera', '123'), new Kupac('Mika', 'abc')]

let k = new Kupac(inputUsername.value, inputPassword.value)

class Kupac {
    korpa = []

    ime
    sifra
    korpa
    constructor(ime, sifra) {
        this.ime = ime
        this.sifra = sifra
        this.korpa = korpa
    }
}

class Proizvod {
    static nizProizvoda = []

    naziv
    cena
    dostupnaKolicina 
    constructor(naziv,cena,dostupnaKolicina) {
        this.naziv = naziv
        this.cena = cena
        this.dostupnaKolicina = dostupnaKolicina
    }
}

class Prehrambeni extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina) {
        super(naziv, cena, rokTrajanja, dostupnaKolicina)
        this.rokTrajanja = this.rokTrajanja
    }
}

class BelaTehnika extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina) {
        super(naziv, cena, garancija, dostupnaKolicina)
        this.garancija = this.garancija
    }
}

const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const forma = document.querySelector('#forma')

forma.addEventListener('submit', e=>{
    e.preventDefault()
    registrovaniKupac.forEach(kupac => {
        if(inputUsername.value == kupac.ime  && inputPassword.value == kupac.sifra) {
            
        }
    })
})


