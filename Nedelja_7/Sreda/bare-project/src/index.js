import Countries from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import { divSelect, inputFilter, mainPrikaz } from "./constants.js"

const Select = (options) =>{ 
   
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

let countries = res.data
getAllCountries().then(res=>{
    // console.log(countries[199].region)
    mainPrikaz.append(...Countries(countries))
    divSelect.append(Select(new Set(countries.map(country => country.region))))
})

inputFilter.addEventListener('input',()=>{
    mainPrikaz.innerHTML = ''
    let filter = countries.filter(country => country.name.toLowerCase().includes(inputFilter.value.toLowerCase()))
    mainPrikaz.append(...Launches(filter))
})