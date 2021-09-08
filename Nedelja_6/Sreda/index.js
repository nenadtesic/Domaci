// ## Prodavnica


// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

// DODATNO , NE MORA:
// 4. Ako je korisnik admin moze da doda nov proizvod

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


