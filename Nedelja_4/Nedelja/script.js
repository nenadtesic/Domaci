// 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.



// 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
let kalkulator = document.querySelector('#kalkulator')
let prviBroj = document.querySelector('#broj1')
let drugiBroj = document.querySelector('#broj2')
let btnSabiranje = document.querySelector('#sabiranje')
let ispisSabiranja = document.querySelector('#ispisSum')


function sabiranje(prviBroj, drugiBroj) {
    btnSabiranje.addEventListener('click', (e)=>{
        e.preventDefault()
        ispisSabiranja.innerHTML = Number(prviBroj.value) + Number(drugiBroj.value)
        // prviBroj.value = ''
        // drugiBroj.value = ''
    }) 
}
sabiranje(prviBroj, drugiBroj)



// 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
let checkBoks = document.querySelector('#klikcheck')
checkBoks.checked = true;

checkBoks.addEventListener('change', ()=> {
    if (checkBoks.ckecked) {
        ispisSabiranja.innerHTML = Number(prviBroj.value) + Number(drugiBroj.value)
    } else {
        ispisSabiranja.remove()
    }
})



