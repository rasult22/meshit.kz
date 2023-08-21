import type { City } from '$lib/api/cities';
function useCity() {
	// Get city from localStorage or default
	const getCity = (): City | null => {
		const cityFromStorage = localStorage.getItem('app_chosen-city');

		if (cityFromStorage) {
			return JSON.parse(cityFromStorage) as City;
		}
		return null;
	};

	return [getCity];
}

export default useCity;
