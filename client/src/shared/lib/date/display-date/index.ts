export const displayDate = (date: string): string => {
  const _date = new Date(date)
  return `${_date.getDate().toString().padStart(2, '0')}.${(
    _date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${_date.getFullYear()}`
}
