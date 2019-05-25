import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
import { ICalendarOptions } from './CalendarModels';
import CalendarMonth from './CalendarMonth';
export default class Calendar {
    static monthOfTheYear: typeof MonthOfTheYear;
    static dayOfTheWeek: typeof DayOfTheWeek;
    static isDate(d: any): boolean;
    static isIntAndNum(num: any): boolean;
    static isBetween(num: number, min: number, max: number): boolean;
    options: ICalendarOptions;
    private _year;
    private month;
    private view;
    constructor(el: HTMLElement | null, options?: ICalendarOptions);
    readonly year: number;
    setYear(year: number): void;
    setMonth(moty: MonthOfTheYear): void;
    readonly currentMonth: CalendarMonth;
    nextMonth(): void;
    previousMonth(): void;
}
