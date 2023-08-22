import type { City } from '$lib/api/cities';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url, route, params }) => {
	console.log('app layout load runs');
	const cities = await fetchCities(fetch);
	return {
		cities
	};
};

async function fetchCities(fetch: any) {
	const response = await fetch('https://zhamagat.kz/api/cities/');

	const cities: City[] = await response.json();

	return cities;
}
