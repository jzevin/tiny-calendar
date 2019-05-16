import { MonthOfTheYear } from "./CalendarEnums";
export declare class CalendarMonth {
    private _monthOfTheYear;
    private _days;
    private _year;
    constructor(year: number, month: MonthOfTheYear);
    readonly name: string;
    readonly days: any[];
    readonly year: number;
    readonly monthOfTheYear: MonthOfTheYear;
}
