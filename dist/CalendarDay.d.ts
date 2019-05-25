import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
export default class CalendarDay {
    private _name;
    private _number;
    private _monthOfTheYear;
    private _year;
    constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number);
    readonly name: string;
    readonly number: number;
    readonly year: number;
    readonly monthName: string;
    readonly monthOfTheYear: MonthOfTheYear;
    toDate(): Date;
}
