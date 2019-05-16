import { CalendarMonth } from "./CalendarMonth";
import { MonthOfTheYear } from "./CalendarEnums";
export declare class Calendar {
    private _year;
    _month: CalendarMonth;
    constructor(year?: number, month?: MonthOfTheYear);
    year: number;
    setMonth(moty: MonthOfTheYear): void;
    getNextMonth(): CalendarMonth;
    getPreviousMonth(): CalendarMonth;
    readonly monthName: string;
    static isDate(d: any): boolean;
    static isIntAndNum(num: any): boolean;
    static isBetween(num: number, min: number, max: number): boolean;
}
