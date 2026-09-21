function calculateDaysBetweenDates(date1, date2) {
    const first_date = new Date(date1);
    const second_date = new Date(date2);

    const difference = second_date - first_date;
    let miliseconds_In_A_Day = 1000*60*60*24;
    return difference / miliseconds_In_A_Day;
}

const date1 = "2026-08-21";
const date2 = "2026-09-21";

const daysBetween = calculateDaysBetweenDates(date1, date2);

console.log(daysBetween);