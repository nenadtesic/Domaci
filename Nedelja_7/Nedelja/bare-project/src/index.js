import Countries from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import { mainPrikaz } from "./constants.js"

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



const imgFlag = document.createElement('img')
imgFlag.src = country.flag

imgFlag.addEventListener('click', ()=> {
    mainPrikaz.innerHTML = ''

})
