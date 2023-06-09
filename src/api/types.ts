import axios from 'axios'
import { LessonTypeDetail } from './lessons'
export async function fetchTypes() {
  return await axios.get<LessonTypeDetail[]>('https://zhamagat.kz/api/types/')
}

export async function fetchTypeById(id: number) {
  return await axios.get<LessonTypeDetail>('https://zhamagat.kz/api/types/', {
    params: {
      id
    }
  })
}
