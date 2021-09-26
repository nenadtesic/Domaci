import Countries from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import { mainPrikaz } from "./constants.js"
import axios from "axios";

const Select = (options) =>{ 

    options = new Set(options)
   
    const select = document.createElement('select')

    const defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled =  true
    defOpt.hidden = true
    defOpt.textContent = 'Select a Region'

    select.append(defOpt)

    options.forEach(option => {
        const opt = document.createElement('option')
        opt.value = option
        opt.textContent = option
        select.append(opt)
    })

    return select
}

let countries = []
getAllCountries().then(res=>{
    console.log(res.data);
    countries = res.data
    mainPrikaz.append(...Countries(countries))
})



axios.get('https://restcountries.eu/rest/v2/all').then(res => {

    console.log(res.data[0].flag);
})


const Flag = country => {
    let divF = document.createElement('div')

    divF.innerHTML = `
        <p>${country.flag}</p>
        <p>${country.name}</p>
        <p>${country.capital}</p>
        <p>${country.languages.stringify()}</p>
        <p>${country.timezones}</p>
        <p>${country.population}</p>
    `
    return divF
}


// const imgFlag = document.createElement('img')
// imgFlag.src = country.flag

// imgFlag.addEventListener('click', ()=> {
//     console.log('klik');
    // mainPrikaz.innerHTML = ''
    
    // let prikazJedne = document.createElement('div')

    // prikazJedne.innerHTML = `
    //     <p>${country.flag}</p>
    //     <p>${country.name}</p>
    //     <p>${country.capital}</p>
    //     <p>${country.languages.stringify()}</p>
    //     <p>${country.timezones}</p>
    //     <p>${country.population}</p>
    // `
    // mainPrikaz.append(prikazJedne)
// })
