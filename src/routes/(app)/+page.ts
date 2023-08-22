import type { Banner } from '$lib/api/banners';
import type { City } from '$lib/api/cities';
import type { Lesson, LessonsApiCallQuery } from '$lib/api/lessons';
import type { Mosque } from '$lib/api/mosques';
import type { PageLoad } from './$types';

type FetchFunction = (
	input: URL | RequestInfo,
	init?: RequestInit | undefined
) => Promise<Response>;

export const load: PageLoad = async ({ fetch, url }) => {
	console.log('app page load function runs');
	const banners = await fetchBanners(fetch);
	const mosques = await fetchMosques(fetch, {
		city: url.searchParams.get('city'),
		gender: url.searchParams.get('gender')?.toLocaleUpperCase?.() || null
	});
	return {
		banners,
		mosques
	};
};

async function fetchBanners(fetch: FetchFunction) {
	const response = await fetch('https://zhamagat.kz/api/banners/');
	const banners = await response.json();

	return banners as Banner[];
}

async function fetchMosques(
	fetch: FetchFunction,
	params: {
		city: string | null;
		gender: string | null;
	}
) {
	console.log('mosques has fetched');
	const response = await fetch(`https://zhamagat.kz/api/mosques/${getSearchParamAsString(params)}`);
	const mosques: Mosque[] = await response.json();
	return mosques;
}

// Function take params object and return string
const getSearchParamAsString = (params: object) => {
	const obj = {};

	Object.keys(params).forEach((key) => {
		if (params[key]) {
			obj[key] = params[key];
		}
	});
	console.log(obj);

	if (Object.keys(obj).length) {
		return '?' + new URLSearchParams(obj).toString();
	}
	return '';
};
