import { Proizvod, PrehrambeniProizvod, BelaTehnika } from "./proizvodi.js"


export class Korisnik {
    static registrovaniKorisnik = []

    username
    password
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    addKorisnikToDOM() {

    }
}


export class Kupac extends Korisnik {
    #korpa //[{{naziv:,cena:,stanje:5}, kolicina:2}]
    constructor(username, password) {
        super(username, password)
        this.#korpa = []
    }

    get korpa() {
        return this.#korpa
    }

    dodajUKorpu(proizvod, kolicina) {
        this.#korpa.push({ proizvod: proizvod, kupljenaKolicina: kolicina })

    }

    obrisiIzKorpe(item) {
        this.#korpa.splice(this.#korpa.indexOf(item), 1)
    }

    addKorisnikToDOM() {

        const divOmotac = document.querySelector('#korisnik')
        divOmotac.innerHTML = ``

        const divKorisnik = document.createElement('div')
        const naslov = document.createElement('h3')
        naslov.textContent = this.username

        const divKorpa = document.createElement('div')
        this.#korpa.forEach(item => {
            const divItem = document.createElement('div')
            const opis = document.createElement('p')
            opis.innerHTML = `${item.proizvod.naziv} <br> ${item.proizvod.cena} <br> ${item.kupljenaKolicina}`

            const btnDeleteItem = document.createElement('button')
            btnDeleteItem.textContent = `obrisi iz korpe`

            btnDeleteItem.addEventListener('click', () => {
                this.obrisiIzKorpe(item)
                divOmotac.append(this.addKorisnikToDOM())

                //vracamo stanje
                item.proizvod.stanje += Number(item.kupljenaKolicina)
                const divProizvodi = document.querySelector('.proizvodi')

                divProizvodi.append(Proizvod.addProizvodeToDom(this))
            })

            divItem.append(opis, btnDeleteItem)
            divKorpa.append(divItem)
        })

        divKorisnik.append(naslov, divKorpa)

        return divKorisnik
    }
}

export class Admin extends Korisnik {
    constructor(username, password) {
        super(username, password)
    }

    addKorisnikToDOM(){
        const divOmotac = document.querySelector('#korisnik')
        divOmotac.innerHTML = ``

        const divAdmin = document.createElement('div')
        const naslov = document.createElement('h3')
        naslov.textContent = this.username

        const formaProizvoda = document.createElement('form')
        formaProizvoda.innerHTML = `
        <span>Naziv Proizvoda:</span><input id="naziv" type="text"> <br>
        <span>Cena:</span><input id="cena" type="text"> <br>
        <span>Stanje:</span><input id="stanje" type="text"> <br>
        <select name="" id="tipProizvoda">
            <option value="0" selected disabled>Izaberi tip proizvoda</option>
            <option value="1">Prehrambeni proizvod</option>
            <option value="2">Bela tehnika</option>
        </select>
        <span>Rok/Garancija:</span><input id"rok" type="text"> <br>
        <input type="submit" value="Dodaj proizvod">
        `
        formaProizvoda.addEventListener('submit', event=> {
            event.preventDefault()
            const select = document.querySelector('#tipProizvoda')
            const inputNaziv = document.querySelector('#naziv')
            const inputCena = document.querySelector('#cena')
            const inputStanje = document.querySelector('#stanje')
            const inputRok = document.querySelector('#rok')


            if(select.value == '1') {
                Proizvod.proizvodi.push(new PrehrambeniProizvod(inputNaziv.value, Number(inputCena.value), Number(inputStanje.value), inputRok.value, 44444))
            }
            if(select.value == '2') {
                Proizvod.proizvodi.push(new BelaTehnika(inputNaziv.value, Number(inputCena.value), Number(inputStanje.value), inputRok.value, 44444))
            }
            console.log(Proizvod.proizvodi);

        })

        divAdmin.append(naslov, formaProizvoda)
        divOmotac.append(divAdmin)
    }
   
}