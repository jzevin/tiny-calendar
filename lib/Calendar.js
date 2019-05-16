"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarMonth_1 = require("./CalendarMonth");
const CalendarEnums_1 = require("./CalendarEnums");
class Calendar {
    constructor(year, month) {
        this._year = new Date().getFullYear();
        this._month = new CalendarMonth_1.CalendarMonth(this._year, CalendarEnums_1.MonthOfTheYear.January);
        year = year || this._year;
        month = month || this._month.monthOfTheYear;
        this.year = year;
        this.setMonth(month);
    }
    get year() {
        return this._year;
    }
    set year(year) {
        this._year = year;
        // month must be changed on year change
    }
    setMonth(moty) {
        this._month = new CalendarMonth_1.CalendarMonth(this.year, moty);
    }
    getNextMonth() {
        let nextMonth = this._month.monthOfTheYear + 1;
        let year = this._year;
        if (nextMonth > 11) {
            nextMonth = CalendarEnums_1.MonthOfTheYear.January;
            year++;
        }
        return new CalendarMonth_1.CalendarMonth(year, nextMonth);
    }
    getPreviousMonth() {
        let nextMonth = this._month.monthOfTheYear - 1;
        let year = this._year;
        if (nextMonth < 0) {
            nextMonth = CalendarEnums_1.MonthOfTheYear.December;
            year--;
        }
        return new CalendarMonth_1.CalendarMonth(year, nextMonth);
    }
    get monthName() {
        return this._month.name;
    }
    static isDate(d) {
        return d instanceof Date && !isNaN(d.getDay());
    }
    static isIntAndNum(num) {
        return Number.isInteger(num) && !Number.isNaN(num);
    }
    static isBetween(num, min, max) {
        return num >= min && num <= max;
    }
}
exports.Calendar = Calendar;
