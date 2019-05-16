import { MonthOfTheYear } from './CalendarEnums';
export declare class CalendarMonth {
    private cmMonthOfTheYear;
    private cmDays;
    private cmYear;
    constructor(year: number, month: MonthOfTheYear);
    readonly name: string;
    readonly days: any[];
    readonly year: number;
    readonly monthOfTheYear: MonthOfTheYear;
}
