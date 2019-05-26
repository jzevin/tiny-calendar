import { DayOfTheWeek, MonthOfTheYear } from './CalendarEnums';
import { ICalendarOptions } from './CalendarModels';
import CalendarMonth from './CalendarMonth';
import CalendarView from './CalendarView';

const defaultOptions: ICalendarOptions = {
  baseColor: {
    a: 1,
    h: 0,
    l: 50,
    s: 0,
  },
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

export default class Calendar {
  public static monthOfTheYear = MonthOfTheYear;
  public static dayOfTheWeek = DayOfTheWeek;

  public static isDate(d: any): boolean {
    return d instanceof Date && !isNaN(d.getDay());
  }

  public static isIntAndNum(num: any): boolean {
    return Number.isInteger(num) && !Number.isNaN(num);
  }

  public static isBetween(num: number, min: number, max: number): boolean {
    return num >= min && num <= max;
  }

  public options: ICalendarOptions;

  private _year: number;
  private month: CalendarMonth; // = new CalendarMonth(this.__year, new Date().getMonth());
  private view: CalendarView | null;

  constructor(el: HTMLElement | null, options: ICalendarOptions = {}) {
    const { baseColor, month, year, onDateSelected } = options;
    this.options = {
      baseColor: baseColor || defaultOptions.baseColor,
      month: month === MonthOfTheYear.January ? month : month === undefined ? defaultOptions.month : month,
      onDateSelected,
      year: year || defaultOptions.year,
    };
    this._year = this.options.year!;
    this.setMonth(this.options.month!);
    this.month = new CalendarMonth(this.options.year!, this.options.month!);
    this.view = el === null ? null : new CalendarView(el, this);
  }

  public get year(): number {
    return this._year;
  }

  public setYear(year: number) {
    this._year = year;
    this.setMonth(this.currentMonth.monthOfTheYear);
  }

  public setMonth(moty: MonthOfTheYear) {
    this.month = new CalendarMonth(this.year, moty);
  }

  public get currentMonth(): CalendarMonth {
    return this.month;
  }

  public nextMonth() {
    let nextMonth = this.month.monthOfTheYear + 1;
    if (nextMonth > 11) {
      nextMonth = MonthOfTheYear.January;
      this._year++;
    }
    this.setMonth(nextMonth);
  }

  public previousMonth() {
    let prevMonth = this.month.monthOfTheYear - 1;
    if (prevMonth < 0) {
      prevMonth = MonthOfTheYear.December;
      this._year--;
    }
    this.setMonth(prevMonth);
  }

  public getPreviousMonth() {
    let prevMonth = this.month.monthOfTheYear - 1;
    let year = this._year;
    if (prevMonth < 0) {
      prevMonth = MonthOfTheYear.December;
      year--;
    }
    return new CalendarMonth(year, prevMonth);
  }

  public getNextMonth() {
    let nextMonth = this.month.monthOfTheYear + 1;
    let year = this._year;
    if (nextMonth > 11) {
      nextMonth = MonthOfTheYear.January;
      year++;
    }
    return new CalendarMonth(year, nextMonth);
  }
}
