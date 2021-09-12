import { Korisnik } from "./korisnici.js"

export class Proizvod {
    static proizvodi = []
    naziv
    cena
    stanje
    constructor(naziv, cena, stanje) {
        this.naziv = naziv
        this.cena = cena
        this.stanje = stanje
    }

    toString() {
        return `${this.naziv}  <br>  ${this.cena} <br> Stanje: ${this.stanje}`
    }

    static addProizvodeToDom(user) {
        const divProizvodi = document.querySelector('.proizvodi')
        divProizvodi.innerHTML = ``

        const divLista = document.createElement('div')

        Proizvod.proizvodi.forEach(proizvod => {

            const divProizvod = document.createElement('div')

            const pOpis = document.createElement('p')
            pOpis.innerHTML = proizvod.toString()
            divProizvod.append(pOpis)


            if (user instanceof Korisnik) {
                const inputKol = document.createElement('input')
                inputKol.type = 'number'

                const btnDodajUKorpu = document.createElement('button')
                btnDodajUKorpu.textContent = `Dodaj u korpu`

                btnDodajUKorpu.addEventListener('click', () => {

                    if (proizvod.stanje >= Number(inputKol.value)) {
                        //dodavanje item-a u korpu
                        user.dodajUKorpu(proizvod, inputKol.value)
                        const divKorisnik = document.querySelector('#korisnik')
                        divKorisnik.append(user.addKorisnikToDOM())

                        //update stanje
                        proizvod.stanje -= Number(inputKol.value)
                        divProizvodi.append(Proizvod.addProizvodeToDom(user))
                    } else {
                        console.log(`nema dovoljno na stanju`);
                    }

                })

                divProizvod.append(inputKol, btnDodajUKorpu)
            }

            divLista.append(divProizvod)

        })

        return divLista
    }

}

export class PrehrambeniProizvod extends Proizvod {
    rokTrajanja
    constructor(naziv, cena, stanje, rokTrajanja) {
        super(naziv, cena, stanje)
        this.rokTrajanja = rokTrajanja
    }

    toString() {
        return super.toString() + `<br> ${this.rokTrajanja}`
    }
}

export class BelaTehnika extends Proizvod {
    garancija
    constructor(naziv, cena, stanje, garancija) {
        super(naziv, cena, stanje)
        this.garancija = garancija
    }

    toString() {
        return super.toString() + `<br> ${this.garancija}`
    }
}