import axios from 'axios'
export async function fetchCities() {
  return await axios.get<City[]>('https://zhamagat.kz/api/cities/')
}

export async function fetchCityById(id: number) {
  return await axios.get<City>('https://zhamagat.kz/api/cities/', {
    params: {
      id
    }
  })
}

export interface City {
  id: number
  name: string
}
