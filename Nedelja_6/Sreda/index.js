import { Korisnik, Kupac, Admin } from "./korisnici.js";
import { Proizvod, PrehrambeniProizvod, BelaTehnika } from "./proizvodi.js";


Korisnik.registrovaniKorisnik.push(new Kupac('ana', '123'), new Admin('admin', '1'))
console.log(Korisnik.registrovaniKorisnik);
Proizvod.proizvodi.push(new PrehrambeniProizvod('mleko', 200, 3, '1.3.2021'), new BelaTehnika('sporet', '1999.99', 4, 5))
Proizvod.proizvodi.forEach(proizvod => console.log(proizvod.toString()))


const divKorisnik = document.querySelector('#korisnik')
const divProizvodi = document.querySelector('.proizvodi')
const formaLogin = document.querySelector('#forma')
const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')


divProizvodi.append(Proizvod.addProizvodeToDom())

formaLogin.addEventListener('submit', event => {
    event.preventDefault()

    let ulovoganiKorisnik = Korisnik.registrovaniKorisnik.find(korisnik => korisnik.username == inputUsername.value && korisnik.password == inputPassword.value)

    if (ulovoganiKorisnik) {
        divKorisnik.append(ulovoganiKorisnik.addKorisnikToDOM())
        // console.log(ulovoganiKorisnik);
        divProizvodi.append(Proizvod.addProizvodeToDom(ulovoganiKorisnik))
    } else {
        console.log(`Ne postoji korisnik sa takvim podacima`);
    }

})


























// let registrovaniKupac = [new Kupac('Pera', '123'), new Kupac('Mika', 'abc')]

// // let k = new Kupac(inputUsername.value, inputPassword.value)

// const inputUsername = document.querySelector('#username')
// const inputPassword = document.querySelector('#password')
// const forma = document.querySelector('#forma')

// const inputKolicina = document.querySelector('#kolicina')

// const korpa = document.querySelector('.korpa')

// forma.addEventListener('submit', e=>{
//     e.preventDefault()
//     registrovaniKupac.forEach(kupac => {
//         if(inputUsername.value == kupac.ime  && inputPassword.value == kupac.sifra) {
//             korpa.remove()
//         }
//     })
// })






