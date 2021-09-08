// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - informaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi nacin naznaci da je item uradjen).

let count = 5

let data = [
    {
        id: 1,
        desc: aaa,
        done: true
    },
    {
        id: 2, 
        desc: bbb,
        done: false
    },
    {
        id: 3,
        desc: ccc,
        done: false
    },
    {
        id: 4,
        desc: ddd,
        done: true
    }
]

const add = item => {
    data.push({id: count++, ...item})
    return count - 1
}

const deleteById = id => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index, 1)
}

const changeById = (id, noviItem) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index, 1, noviItem)
}

// let inputText = document.querySelector('#input-desc')
let checkB = document.querySelector('#done')
let forma = document.querySelector('#forma')

let divPrikaz = document.querySelector('#prikazano')


forma.addEventListener('submit', ()=> {
    let inputText = document.querySelector('#input-desc')
    

    let item = {
        desc: inputText.value
    }
    data.push(item)

})







export {
    data,
    add,
    deleteById,
    changeById
}