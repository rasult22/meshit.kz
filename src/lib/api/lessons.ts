import axios from 'axios';
export async function fetchLessons(params: LessonsApiCallQuery = {}) {
	return await axios.get<Lesson[]>('https://zhamagat.kz/api/lessons/', {
		params: {
			...params
		}
	});
}

export async function fetchLessonById(id: number) {
	return await axios.get<Lesson>(`'https://zhamagat.kz/api/lessons/${id}/'`);
}

export interface LessonsApiCallQuery {
	city: string | null;
	mosque: string | null;
	type: string | null;
	periodicity: string | null;
	teacher: string | null;
	gender: string | null;
	start_time: string | null;
	end_time: string | null;
	date: string | null;
}

export interface Lesson {
	type: LessonTypeDetail;
	teacher: LessonTeacherDetail;
	start_time: string;
	end_time: string;
	date: string;
}

export interface LessonTeacherDetail {
	id: number;
	name: string;
}

export interface LessonTypeDetail {
	id: number;
	name: string;
}
