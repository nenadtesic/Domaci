import axios from 'axios'

const BASE = 'https://restcountries.eu/rest/v2'
const ALL = '/all'
// const REGION = `/region`


export const getAllCountries = () => axios.get(`${BASE}${ALL}`)

// export const getAllRegions = () => axios.get(`${BASE}${ALL}${REGION}`)
// https://restcountries.eu/rest/v2/region/europe