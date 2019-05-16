"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarEnums_1 = require("./CalendarEnums");
const CalendarDay_1 = require("./CalendarDay");
const Calendar_1 = require("./Calendar");
class CalendarMonth {
    constructor(year, month) {
        this._days = [];
        if (month === undefined || year === undefined)
            throw new Error('Must provide a valid month name and year.');
        this._monthOfTheYear = month;
        this._year = year;
        for (let i = 1; i <= 31; i++) {
            const date = new Date(`${this.name} ${i} ${year}`);
            if (Calendar_1.Calendar.isDate(date) && date.getMonth() === this._monthOfTheYear) {
                const day = new CalendarDay_1.CalendarDay(date.getDay(), i);
                this._days.push(day);
            }
        }
    }
    get name() {
        return CalendarEnums_1.MonthOfTheYear[this._monthOfTheYear];
    }
    get days() {
        return this._days;
    }
    get year() {
        return this._year;
    }
    get monthOfTheYear() {
        return this._monthOfTheYear;
    }
}
exports.CalendarMonth = CalendarMonth;
