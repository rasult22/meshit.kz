import axios from 'axios';
import type { Lesson } from './lessons';

export async function fetchMosques(city?: number, gender: 'male' | 'female' = 'male') {
	return await axios.get<Mosque[]>('https://zhamagat.kz/api/mosques/', {
		params: {
			city,
			gender: gender.toUpperCase()
		}
	});
}

export async function fetchMosqueById(id: number) {
	return await axios.get<Mosque>(`https://zhamagat.kz/api/mosques/${id}/`);
}

export interface Mosque {
	id: number;
	name: string;
	image: string;
	lessons: Lesson[];
}
