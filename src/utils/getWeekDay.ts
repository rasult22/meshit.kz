export default (string: string) => {
  const daysOfWeek = {
    MN: 'Дүйсенбі',
    TU: 'Сейсенбі',
    WD: 'Сәрсенбі',
    TH: 'Бейсенбі',
    FR: 'Жұма',
    ST: 'Сенбі',
    SN: 'Жексенбі'
  }
  return daysOfWeek[string]
}
