export default (date: string | Date) => {
  const daysOfWeek = [
    'Жексенбі',
    'Дүйсенбі',
    'Сейсенбі',
    'Сәрсенбі',
    'Бейсенбі',
    'Жұма',
    'Сенбі'
  ]
  const dayIndex = new Date(date).getDay()
  return daysOfWeek[dayIndex]
}
