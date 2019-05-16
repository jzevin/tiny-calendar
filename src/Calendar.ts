import { MonthOfTheYear } from './CalendarEnums';
import { CalendarMonth } from './CalendarMonth';

export class Calendar {

  public static isDate(d: any): boolean {
    return d instanceof Date && !isNaN(d.getDay());
  }

  public static isIntAndNum(num: any): boolean {
    return Number.isInteger(num) && !Number.isNaN(num);
  }

  public static isBetween(num: number, min: number, max: number): boolean {
    return num >= min && num <= max;
  }
  
  private calYear: number = new Date().getFullYear();
  private currMonth: CalendarMonth = new CalendarMonth(this.calYear, new Date().getMonth());

  constructor(year?: number, month?: MonthOfTheYear) {
    year = year || this.calYear;
    month = month === MonthOfTheYear.January ? month : month === undefined ? this.currMonth.monthOfTheYear : month;
    this.calYear = year;
    this.setMonth(month);
  }

  public get year(): number {
    return this.calYear;
  }

  public setYear(year: number) {
    this.calYear = year;
    this.setMonth(this.currentMonth.monthOfTheYear);
  }

  public setMonth(moty: MonthOfTheYear) {
    this.currMonth = new CalendarMonth(this.year, moty);
  }

  public get currentMonth(): CalendarMonth {
    return this.currMonth;
  }

  public nextMonth() {
    let nextMonth = this.currMonth.monthOfTheYear + 1;
    let year = this.calYear;
    if (nextMonth > 11) {
      nextMonth = MonthOfTheYear.January;
      this.calYear++;
    }
    this.setMonth(nextMonth);
  }

  public previousMonth() {
    let prevMonth = this.currMonth.monthOfTheYear - 1;
    if (prevMonth < 0) {
      prevMonth = MonthOfTheYear.December;
      this.calYear--;
    }
    this.setMonth(prevMonth);
  }
}
