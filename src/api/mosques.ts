import axios from 'axios'
import { Lesson } from './lessons'

export async function fetchMosques(city?: number) {
  return await axios.get<Mosque[]>('https://zhamagat.kz/api/mosques/', {
    params: {
      city
    }
  })
}

export async function fetchMosqueById(id: number) {
  return await axios.get<Mosque>(`https://zhamagat.kz/api/mosques/${id}/`)
}

export interface Mosque {
  id: number
  name: string
  image: string
  lessons: Lesson[]
}
