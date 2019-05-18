import { MonthOfTheYear, DayOfTheWeek } from './CalendarEnums';
import CalendarMonth from './CalendarMonth';

export default class Calendar {

  public static isDate(d: any): boolean {
    return d instanceof Date && !isNaN(d.getDay());
  }

  public static isIntAndNum(num: any): boolean {
    return Number.isInteger(num) && !Number.isNaN(num);
  }

  public static isBetween(num: number, min: number, max: number): boolean {
    return num >= min && num <= max;
  }

  public static monthOfTheYear = MonthOfTheYear;
   public static dayOfTheWeek = DayOfTheWeek;
  
  private __year: number = new Date().getFullYear();
  private __month: CalendarMonth = new CalendarMonth(this.__year, new Date().getMonth());

  constructor(year?: number, month?: MonthOfTheYear) {
    year = year || this.__year;
    month = month === MonthOfTheYear.January ? month : month === undefined ? this.__month.monthOfTheYear : month;
    this.__year = year;
    this.setMonth(month);
  }

  public get year(): number {
    return this.__year;
  }

  public setYear(year: number) {
    this.__year = year;
    this.setMonth(this.currentMonth.monthOfTheYear);
  }

  public setMonth(moty: MonthOfTheYear) {
    this.__month = new CalendarMonth(this.year, moty);
  }

  public get currentMonth(): CalendarMonth {
    return this.__month;
  }

  public nextMonth() {
    let nextMonth = this.__month.monthOfTheYear + 1;
    let year = this.__year;
    if (nextMonth > 11) {
      nextMonth = MonthOfTheYear.January;
      this.__year++;
    }
    this.setMonth(nextMonth);
  }

  public previousMonth() {
    let prevMonth = this.__month.monthOfTheYear - 1;
    if (prevMonth < 0) {
      prevMonth = MonthOfTheYear.December;
      this.__year--;
    }
    this.setMonth(prevMonth);
  }
}