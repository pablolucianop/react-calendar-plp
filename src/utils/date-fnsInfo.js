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
const getMonthNumber = (date = now) => formatFn(date, 'm')

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

export { getDays, getDayNumber, getWeekDays, getWeeks }
