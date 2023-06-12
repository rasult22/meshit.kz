import { City } from '@/api/cities'
function useCity() {
  const defaultCity: City = {
    id: 1,
    name: 'Алматы'
  }

  // Get city from localStorage or default
  const getCity = () => {
    const cityFromStorage = localStorage.getItem('app_chosen-city')

    if (cityFromStorage) {
      return JSON.parse(cityFromStorage) as City
    }
    return defaultCity
  }

  return [getCity]
}

export default useCity
