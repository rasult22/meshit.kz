import type { Mosque } from '$lib/api/mosques';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	console.log('+page.ts(mosques/[id])');
	const mosque = await fetchMosqueById(fetch, params.id);

	return {
		mosque
	};
};

async function fetchMosqueById(fetch: any, id: string) {
	const response = await fetch(`https://zhamagat.kz/api/mosques/${id}/`);
	const mosque: Mosque = await response.json();
	return mosque;
}
