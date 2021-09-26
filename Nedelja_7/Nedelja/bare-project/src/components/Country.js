const Country = (country, single)=>{
    const divCountry = document.createElement('div')

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    const pName = document.createElement('p')
    pName.textContent = country.name

    const pCapital = document.createElement('p') 
    pCapital.textContent = country.capital

    divCountry.append(img, pName, pCapital, document.createElement('hr'))

    // if(single) {
    //     divCountry.innerHTML += `
    //     <p>${country.flag}</p>
    //     <p>${country.name}</p>
    //     <p>${country.capital}</p>
    //     <p>${country.languages.join(', ')}</p>
    //     <p>${country.timezones.join(', ')}</p>
    //     <p>${country.population}</p>`
    // }

    return divCountry
}

export default Country