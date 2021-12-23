/* eslint-disable no-param-reassign */

export default function dateDiffInDays(dateOne, dateTwo = new Date()) {
  dateOne = new Date(dateOne)

  dateOne = Date.UTC(
    dateOne.getFullYear(),
    dateOne.getMonth(),
    dateOne.getDate()
  )

  dateTwo = Date.UTC(
    dateTwo.getFullYear(),
    dateTwo.getMonth(),
    dateTwo.getDate()
  )

  return Math.floor((dateOne - dateTwo) / 86400000) + 1
}
