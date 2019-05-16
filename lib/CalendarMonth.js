"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_1 = require("./Calendar");
const CalendarDay_1 = require("./CalendarDay");
const CalendarEnums_1 = require("./CalendarEnums");
class CalendarMonth {
    constructor(year, month) {
        this.cmDays = [];
        if (month === undefined || year === undefined) {
            throw new Error('Must provide a valid month name and year.');
        }
        this.cmMonthOfTheYear = month;
        this.cmYear = year;
        for (let i = 1; i <= 31; i++) {
            const date = new Date(`${this.name} ${i} ${year}`);
            if (Calendar_1.Calendar.isDate(date) && date.getMonth() === this.cmMonthOfTheYear) {
                const day = new CalendarDay_1.CalendarDay(date.getDay(), i, this.monthOfTheYear, this.year);
                this.cmDays.push(day);
            }
        }
    }
    get name() {
        return CalendarEnums_1.MonthOfTheYear[this.cmMonthOfTheYear];
    }
    get days() {
        return this.cmDays;
    }
    get year() {
        return this.cmYear;
    }
    get monthOfTheYear() {
        return this.cmMonthOfTheYear;
    }
}
exports.CalendarMonth = CalendarMonth;
