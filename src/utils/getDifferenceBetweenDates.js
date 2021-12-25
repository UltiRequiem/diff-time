export default function dateDiffInDays(dateOne, dateTwo = new Date()) {
  return Math.floor((new Date(dateOne) - dateTwo) / 86400000) + 1
}
