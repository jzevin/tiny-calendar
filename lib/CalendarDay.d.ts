import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
export declare class CalendarDay {
    private dayName;
    private dayNumber;
    private dayMonthOfTheYear;
    private dayYear;
    constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number);
    readonly name: string;
    readonly number: number;
    readonly year: number;
    readonly monthName: string;
    toDate(): Date;
}
