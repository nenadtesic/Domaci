import Country from "./Country.js"

const Countries = (countries)=> countries.slice(countries, 15).map(country => Country(country) )

export default Countries


// .Math.ceil(Math.random() * 15)