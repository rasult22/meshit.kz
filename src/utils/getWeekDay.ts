export default (string: string) => {
  const daysOfWeek = {
    Понедельник: 'Дүйсенбі',
    Вторник: 'Сейсенбі',
    Среда: 'Сәрсенбі',
    Четверг: 'Бейсенбі',
    Пятница: 'Жұма',
    Суббота: 'Сенбі',
    Воскресенье: 'Жексенбі'
  }
  return daysOfWeek[string]
}
