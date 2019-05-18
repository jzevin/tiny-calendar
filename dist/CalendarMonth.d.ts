import CalendarDay from './CalendarDay';
import { MonthOfTheYear, DayOfTheWeek } from './CalendarEnums';
export default class CalendarMonth {
    private __monthOfTheYear;
    private __days;
    private __year;
    constructor(year: number, month: MonthOfTheYear);
    readonly name: string;
    readonly days: CalendarDay[];
    readonly year: number;
    readonly monthOfTheYear: MonthOfTheYear;
    readonly dayOfTheWeekStartsOn: DayOfTheWeek;
}
