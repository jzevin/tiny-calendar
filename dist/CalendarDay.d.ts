import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
export default class CalendarDay {
    private __name;
    private __number;
    private __monthOfTheYear;
    private __year;
    constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number);
    readonly name: string;
    readonly number: number;
    readonly year: number;
    readonly monthName: string;
    readonly monthOfTheYear: MonthOfTheYear;
    toDate(): Date;
}
