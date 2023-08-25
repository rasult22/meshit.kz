import axios from 'axios'
export async function fetchLessons(params: LessonsApiCallQuery = {}) {
  return await axios.get<Lesson[]>('https://zhamagat.kz/api/lessons/', {
    params: {
      ...params
    }
  })
}

export async function fetchLessonById(id: number) {
  return await axios.get<Lesson>(`'https://zhamagat.kz/api/lessons/${id}/'`)
}

export interface LessonsApiCallQuery {
  city?: string
  mosque?: string
  type?: string
  periodicity?: string
  teacher?: number
  gender?: string
  start_time?: string
  end_time?: string
  date?: string
}

export interface Lesson {
  type: LessonTypeDetail
  teacher: LessonTeacherDetail
  start_time: string
  end_time: string
  date: string
  week_day: string
  degree_type: null
}

export interface LessonTeacherDetail {
  id: number
  name: string
}

export interface LessonTypeDetail {
  id: number
  name: string
}
