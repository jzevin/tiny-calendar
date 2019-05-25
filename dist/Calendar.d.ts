import { MonthOfTheYear, DayOfTheWeek } from './CalendarEnums';
import CalendarMonth from './CalendarMonth';
import { CalendarOptions } from './CalendarModels';
export default class Calendar {
    static isDate(d: any): boolean;
    static isIntAndNum(num: any): boolean;
    static isBetween(num: number, min: number, max: number): boolean;
    static monthOfTheYear: typeof MonthOfTheYear;
    static dayOfTheWeek: typeof DayOfTheWeek;
    options: CalendarOptions;
    private __year;
    private month;
    private view;
    constructor(el: HTMLElement | null, options?: CalendarOptions);
    readonly year: number;
    setYear(year: number): void;
    setMonth(moty: MonthOfTheYear): void;
    readonly currentMonth: CalendarMonth;
    nextMonth(): void;
    previousMonth(): void;
}
