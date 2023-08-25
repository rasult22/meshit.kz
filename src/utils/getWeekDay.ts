export default (number: number) => {
  if (isNaN(number)) return ''

  const daysOfWeek = [
    'Дүйсенбі',
    'Сейсенбі',
    'Сәрсенбі',
    'Бейсенбі',
    'Жұма',
    'Сенбі',
    'Жексенбі'
  ]
  return daysOfWeek[number - 1]
}
