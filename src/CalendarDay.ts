import Calendar from './Calendar';
import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';

export default class CalendarDay {
  private __name: string;
  private __number: number;
  private __monthOfTheYear: MonthOfTheYear;
  private __year: number
  constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number) {
    if (dow === undefined || num === undefined) {
      throw new Error('Must provide a valid day of the week and number.');
    }
    if (!Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num)) {
      throw new Error(`${num} Not a valid day number. Must be 1-31.`);
    }
    this.__name = DayOfTheWeek[dow];
    this.__number = num;
    this.__monthOfTheYear = monthOfTheYear;
    this.__year = year;
  }

  public get name(): string {
    return this.__name;
  }

  public get number(): number {
    return this.__number;
  }

  public get year(): number {
    return this.__year;
  }

  public get monthName(): string {
    return MonthOfTheYear[this.__monthOfTheYear];
  }

  public get monthOfTheYear(): MonthOfTheYear {
    return this.__monthOfTheYear;
  }

  public toDate(): Date {
    return new Date( `${this.monthName} ${this.number} ${this.year}` );
  }
}
