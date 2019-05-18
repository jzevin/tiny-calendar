import Calendar from './Calendar';
import CalendarDay from './CalendarDay';
import { MonthOfTheYear, DayOfTheWeek } from './CalendarEnums';

export default class CalendarMonth {
  private __monthOfTheYear: MonthOfTheYear;
  private __days: CalendarDay[] = [];
  private __year: number;

  constructor(year: number, month: MonthOfTheYear) {
    if (month === undefined || year === undefined) {
      throw new Error('Must provide a valid month name and year.');
    }
    this.__monthOfTheYear = month;
    this.__year = year;
    for (let i = 1; i <= 31; i++) {
      const date = new Date(`${this.name} ${i} ${year}`);
      if (Calendar.isDate(date) && date.getMonth() === this.__monthOfTheYear) {
        const day = new CalendarDay(date.getDay(), i, this.monthOfTheYear, this.year);
        this.__days.push(day);
      }
    }
  }

  public get name(): string {
    return MonthOfTheYear[this.__monthOfTheYear];
  }

  public get days() {
    return this.__days;
  }

  public get year() {
    return this.__year;
  }

  public get monthOfTheYear(): MonthOfTheYear {
    return this.__monthOfTheYear;
  }

  public get dayOfTheWeekStartsOn(): DayOfTheWeek {
    return this.__days[0].toDate().getDay();
  }
}
