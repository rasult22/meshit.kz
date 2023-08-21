function useGender() {
	// Get city from localStorage or default
	const getGender = (): ('male' | 'female') | null => {
		const genderFromStorage: string | null = localStorage.getItem('app_user-chosen-gender');

		if (genderFromStorage) {
			return genderFromStorage as 'male' | 'female';
		}
		return null;
	};

	const setGender = (gender: ('male' | 'female') | null) => {
		if (gender) localStorage.setItem('app_user-chosen-gender', gender);
		else localStorage.removeItem('app_user-chosen-gender');
	};

	return { getGender, setGender };
}

export default useGender;
