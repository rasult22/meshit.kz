import axios from 'axios'
import { Lesson } from './lessons'

export async function fetchMosques() {
  return await axios.get<Mosque[]>('https://zhamagat.kz/api/mosques/')
}

export async function fetchMosqueById(id: number) {
  return await axios.get<Mosque>('https://zhamagat.kz/api/mosques/', {
    params: {
      id
    }
  })
}

export interface Mosque {
  id: number
  name: string
  image: string
  lessons: Lesson[]
}
