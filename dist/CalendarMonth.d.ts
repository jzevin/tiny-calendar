import { MonthOfTheYear } from './CalendarEnums';
export declare class CalendarMonth {
    private __monthOfTheYear;
    private __days;
    private __year;
    constructor(year: number, month: MonthOfTheYear);
    readonly name: string;
    readonly days: any[];
    readonly year: number;
    readonly monthOfTheYear: MonthOfTheYear;
}
