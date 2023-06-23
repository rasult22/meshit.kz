import axios from 'axios'
export async function fetchBanners(featured?: string) {
  return await axios.get<Banner[]>('https://zhamagat.kz/api/banners/', {
    params: {
      featured
    }
  })
}
export async function fetchBannerById(id: number) {
  return await axios.get<Banner>('https://zhamagat.kz/api/banners/', {
    params: {
      id
    }
  })
}

export interface Banner {
  id: number
  image: string
  lesson: number
  featured: boolean
  city_id: number
  mosque_id: number
}
