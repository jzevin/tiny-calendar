import { Calendar } from './Calendar';
import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';

export class CalendarDay {
  private dayName: string;
  private dayNumber: number;
  private dayMonthOfTheYear: MonthOfTheYear;
  private dayYear: number
  constructor(dow: DayOfTheWeek, num: number, monthOfTheYear: MonthOfTheYear, year: number) {
    if (dow === undefined || num === undefined) {
      throw new Error('Must provide a valid day of the week and number.');
    }
    if (!Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num)) {
      throw new Error(`${num} Not a valid day number. Must be 1-31.`);
    }
    this.dayName = DayOfTheWeek[dow];
    this.dayNumber = num;
    this.dayMonthOfTheYear = monthOfTheYear;
    this.dayYear = year;
  }

  public get name(): string {
    return this.dayName;
  }

  public get number(): number {
    return this.dayNumber;
  }

  public get year(): number {
    return this.dayYear;
  }

  public get monthName(): string {
    return MonthOfTheYear[this.dayMonthOfTheYear];
  }

  public toDate(): Date {
    return new Date( `${this.monthName} ${this.number} ${this.year}` );
  }
}
