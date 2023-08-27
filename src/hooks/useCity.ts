import { City } from '@/api/cities'
function useCity() {
  // Get city from localStorage or default
  const setCity = (city: City) => {
    localStorage.setItem('app_chosen-city', JSON.stringify(city))
  }

  const getCity = (): City | null => {
    const cityFromStorage = localStorage.getItem('app_chosen-city')

    if (cityFromStorage) {
      return JSON.parse(cityFromStorage) as City
    } else {
      // !!only for Satpayev branch!!
      const satpayev = {
        id: 3,
        name: 'Сатпаев'
      }
      setCity(satpayev)
      return satpayev
    }
  }

  return { getCity, setCity }
}

export default useCity
