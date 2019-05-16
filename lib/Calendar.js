"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarEnums_1 = require("./CalendarEnums");
const CalendarMonth_1 = require("./CalendarMonth");
class Calendar {
    constructor(year, month) {
        this.calYear = new Date().getFullYear();
        this.currMonth = new CalendarMonth_1.CalendarMonth(this.calYear, new Date().getMonth());
        year = year || this.calYear;
        month = month === CalendarEnums_1.MonthOfTheYear.January ? month : month === undefined ? this.currMonth.monthOfTheYear : month;
        this.calYear = year;
        this.setMonth(month);
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
    get year() {
        return this.calYear;
    }
    setYear(year) {
        this.calYear = year;
        this.setMonth(this.currentMonth.monthOfTheYear);
    }
    setMonth(moty) {
        this.currMonth = new CalendarMonth_1.CalendarMonth(this.year, moty);
    }
    get currentMonth() {
        return this.currMonth;
    }
    nextMonth() {
        let nextMonth = this.currMonth.monthOfTheYear + 1;
        let year = this.calYear;
        if (nextMonth > 11) {
            nextMonth = CalendarEnums_1.MonthOfTheYear.January;
            this.calYear++;
        }
        this.setMonth(nextMonth);
    }
    previousMonth() {
        let prevMonth = this.currMonth.monthOfTheYear - 1;
        if (prevMonth < 0) {
            prevMonth = CalendarEnums_1.MonthOfTheYear.December;
            this.calYear--;
        }
        this.setMonth(prevMonth);
    }
}
exports.Calendar = Calendar;
