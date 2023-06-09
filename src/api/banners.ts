import axios from 'axios'
export async function fetchBanners(featured?: string) {
  return await axios.get<Banner[]>('https://zhamagat.kz/api/banners/', {
    params: {
      featured
    }
  })
}

interface Banner {
  id: number
  image: string
  lesson: number
}
