import { MonthOfTheYear } from './CalendarEnums';
import { CalendarMonth } from './CalendarMonth';
export declare class Calendar {
    static isDate(d: any): boolean;
    static isIntAndNum(num: any): boolean;
    static isBetween(num: number, min: number, max: number): boolean;
    private calYear;
    private currMonth;
    constructor(year?: number, month?: MonthOfTheYear);
    readonly year: number;
    setYear(year: number): void;
    setMonth(moty: MonthOfTheYear): void;
    readonly currentMonth: CalendarMonth;
    nextMonth(): void;
    previousMonth(): void;
}
