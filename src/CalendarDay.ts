import Calendar from './Calendar';
import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';

export default class CalendarDay {
  private _name: string;
  private _number: number;
  private _monthOfTheYear: MonthOfTheYear;
  private _year: number;
  constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number) {
    if (dow === undefined || num === undefined) {
      throw new Error('Must provide a valid day of the week and number.');
    }
    if (!Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num)) {
      throw new Error(`${num} Not a valid day number. Must be 1-31.`);
    }
    this._name = DayOfTheWeek[dow];
    this._number = num;
    this._monthOfTheYear = monthOfTheYear;
    this._year = year;
  }

  public get name(): string {
    return this._name;
  }

  public get number(): number {
    return this._number;
  }

  public get year(): number {
    return this._year;
  }

  public get monthName(): string {
    return MonthOfTheYear[this._monthOfTheYear];
  }

  public get monthOfTheYear(): MonthOfTheYear {
    return this._monthOfTheYear;
  }

  public toDate(): Date {
    return new Date(`${this.monthName} ${this.number} ${this.year}`);
  }
}
