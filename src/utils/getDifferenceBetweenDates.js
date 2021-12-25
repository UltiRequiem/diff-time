/* eslint-disable no-param-reassign */

export default function dateDiffInDays(dateOne, dateTwo = new Date()) {
  dateOne = new Date(dateOne)

  dateOne = Date.UTC(
    dateOne.getUTCFullYear(),
    dateOne.getUTCMonth(),
    dateOne.getUTCDate()
  )

  dateTwo = Date.UTC(
    dateTwo.getUTCFullYear(),
    dateTwo.getUTCMonth(),
    dateTwo.getUTCDate()
  )

  return Math.floor((dateOne - dateTwo) / 86400000) + 1
}
