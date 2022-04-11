import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  eachWeekOfInterval,
  format as formatFn,
} from 'date-fns'

const now = new Date()
const getDayNumber = (date = now) => formatFn(date, 'd')

const getDays = (date = now) =>
  eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  })

const getWeeks = (date = now) =>
  eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })

const getWeekDays = (date = now, format = 'EEEE') => {
  const arr = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  })
  return arr.reduce((accum, day) => [...accum, formatFn(day, format)], [])
}

console.log('getDays', getDays())
console.log('getDayNumber', getDayNumber())
console.log('getWeekDays', getWeekDays())
console.log('getWeeks', getWeeks())

export { getDays, getDayNumber, getWeekDays, getWeeks }
