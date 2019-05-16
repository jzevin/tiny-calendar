"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_1 = require("./Calendar");
const CalendarEnums_1 = require("./CalendarEnums");
class CalendarDay {
    constructor(dow, num, monthOfTheYear, year) {
        if (dow === undefined || num === undefined) {
            throw new Error('Must provide a valid day of the week and number.');
        }
        if (!Calendar_1.Calendar.isBetween(num, 1, 31) && !Calendar_1.Calendar.isIntAndNum(num)) {
            throw new Error(`${num} Not a valid day number. Must be 1-31.`);
        }
        this.dayName = CalendarEnums_1.DayOfTheWeek[dow];
        this.dayNumber = num;
        this.dayMonthOfTheYear = monthOfTheYear;
        this.dayYear = year;
    }
    get name() {
        return this.dayName;
    }
    get number() {
        return this.dayNumber;
    }
    get year() {
        return this.dayYear;
    }
    get monthName() {
        return CalendarEnums_1.MonthOfTheYear[this.dayMonthOfTheYear];
    }
    toDate() {
        return new Date(`${this.monthName} ${this.number} ${this.year}`);
    }
}
exports.CalendarDay = CalendarDay;
