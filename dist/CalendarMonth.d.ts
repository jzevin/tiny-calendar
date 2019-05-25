import CalendarDay from './CalendarDay';
import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
export default class CalendarMonth {
    private _monthOfTheYear;
    private _days;
    private _year;
    constructor(year: number, month: MonthOfTheYear);
    readonly name: string;
    readonly days: CalendarDay[];
    readonly year: number;
    readonly monthOfTheYear: MonthOfTheYear;
    readonly dayOfTheWeekStartsOn: DayOfTheWeek;
}
