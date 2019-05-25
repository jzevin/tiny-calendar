import Calendar from './Calendar';
import CalendarDay from './CalendarDay';
import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';

export default class CalendarMonth {
  private _monthOfTheYear: MonthOfTheYear;
  private _days: CalendarDay[] = [];
  private _year: number;

  constructor(year: number, month: MonthOfTheYear) {
    if (month === undefined || year === undefined) {
      throw new Error('Must provide a valid month name and year.');
    }
    this._monthOfTheYear = month;
    this._year = year;
    for (let i = 1; i <= 31; i++) {
      const date = new Date(`${this.name} ${i} ${year}`);
      if (Calendar.isDate(date) && date.getMonth() === this._monthOfTheYear) {
        const day = new CalendarDay(date.getDay(), i, this.monthOfTheYear, this.year);
        this._days.push(day);
      }
    }
  }

  public get name(): string {
    return MonthOfTheYear[this._monthOfTheYear];
  }

  public get days() {
    return this._days;
  }

  public get year() {
    return this._year;
  }

  public get monthOfTheYear(): MonthOfTheYear {
    return this._monthOfTheYear;
  }

  public get dayOfTheWeekStartsOn(): DayOfTheWeek {
    return this._days[0].toDate().getDay();
  }
}
