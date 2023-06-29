function useGender() {
  // Get city from localStorage or default
  const getGender = (): ('male' | 'female') | null => {
    const genderFromStorage: string | undefined = localStorage.getItem(
      'app_user-chosen-gender'
    )

    if (genderFromStorage) {
      return genderFromStorage as 'male' | 'female'
    }
    return null
  }

  const setGender = (gender: ('male' | 'female') | null) => {
    localStorage.setItem('app_user-chosen-gender', gender)
  }

  return { getGender, setGender }
}

export default useGender
