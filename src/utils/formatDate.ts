import moment from 'moment'

export const formatDate = (date: string) => {
  const _date = new Date(date)
  return `${moment(_date).format('L')} - ${moment(_date).format('LT')} `
}
