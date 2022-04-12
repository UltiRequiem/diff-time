export const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function dateDiffInDays(dateOne: Date, dateTwo = new Date()) {
  return Math.floor((dateOne.valueOf() - dateTwo.valueOf()) / 86400000) + 1;
}
