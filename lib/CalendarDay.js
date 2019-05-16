"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarEnums_1 = require("./CalendarEnums");
const Calendar_1 = require("./Calendar");
class CalendarDay {
    constructor(dow, num) {
        if (dow === undefined || num === undefined)
            throw new Error('Must provide a valid day of the week and number.');
        if (!Calendar_1.Calendar.isBetween(num, 1, 31) && !Calendar_1.Calendar.isIntAndNum(num))
            throw new Error(`${num} Not a valid day number. Must be 1-31.`);
        this._name = CalendarEnums_1.DayOfTheWeek[dow];
        this._number = num;
    }
}
exports.CalendarDay = CalendarDay;
