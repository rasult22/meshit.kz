import type { City } from '$lib/api/cities';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	console.log('+layout.ts(app)');
	const cities = await fetchCities(fetch);
	return {
		pathname: url.pathname,
		cities
	};
};

async function fetchCities(fetchFn: any) {
	const response = await fetchFn('https://zhamagat.kz/api/cities/');

	const cities: City[] = await response.json();

	return cities;
}
