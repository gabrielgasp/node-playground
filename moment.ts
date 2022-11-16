import moment from 'moment'

// const getStartAndEndOfMonth = (month: string) => {
//   const date = moment(month, 'YYYY-MM')
//   const startOfMonth = date.startOf('month').format('YYYY-MM-DD')
//   const endOfMonth = date.endOf('month').format('YYYY-MM-DD')
//   return { startOfMonth, endOfMonth }
// }

// const { startOfMonth, endOfMonth } = getStartAndEndOfMonth('2021-02')

// console.log(startOfMonth, endOfMonth)

// async function getDates(startDate: string, endDate: string) {
//   const start = new Date(`${startDate}T00:00:00.000Z`);
//   const end = new Date(`${endDate}T23:59:59.999Z`);

//   if (start > end) {
//     console.log("Invalid date range. Please try again.");
//     process.exit(0);
//   }

//   const isDateRangeOneMonthMax = moment(end).diff(moment(start), "days") <= 31;

//   if (!isDateRangeOneMonthMax) {
//     console.log("Date range must be one month max. Please try again.");
//     process.exit(0);
//   }

//   console.log("start", start);
//   console.log("end", end);
// }

// getDates("2021-07-15", "2021-08-16");

console.log(moment("2021-0715"));