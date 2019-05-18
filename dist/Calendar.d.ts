import { MonthOfTheYear, DayOfTheWeek } from './CalendarEnums';
import CalendarMonth from './CalendarMonth';
export default class Calendar {
    static isDate(d: any): boolean;
    static isIntAndNum(num: any): boolean;
    static isBetween(num: number, min: number, max: number): boolean;
    static monthOfTheYear: typeof MonthOfTheYear;
    static dayOfTheWeek: typeof DayOfTheWeek;
    private __year;
    private __month;
    private __view;
    constructor(el: HTMLElement, year?: number, month?: MonthOfTheYear);
    readonly year: number;
    setYear(year: number): void;
    setMonth(moty: MonthOfTheYear): void;
    readonly currentMonth: CalendarMonth;
    nextMonth(): void;
    previousMonth(): void;
}
