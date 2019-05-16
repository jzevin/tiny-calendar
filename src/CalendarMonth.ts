import { Calendar } from './Calendar';
import { CalendarDay } from './CalendarDay';
import { MonthOfTheYear } from './CalendarEnums';

export class CalendarMonth {
  private cmMonthOfTheYear: MonthOfTheYear;
  private cmDays: any[] = [];
  private cmYear: number;

  constructor(year: number, month: MonthOfTheYear) {
    if (month === undefined || year === undefined) {
      throw new Error('Must provide a valid month name and year.');
    }
    this.cmMonthOfTheYear = month;
    this.cmYear = year;
    for (let i = 1; i <= 31; i++) {
      const date = new Date(`${this.name} ${i} ${year}`);
      if (Calendar.isDate(date) && date.getMonth() === this.cmMonthOfTheYear) {
        const day = new CalendarDay(date.getDay(), i, this.monthOfTheYear, this.year);
        this.cmDays.push(day);
      }
    }
  }

  get name(): string {
    return MonthOfTheYear[this.cmMonthOfTheYear];
  }

  get days() {
    return this.cmDays;
  }

  get year() {
    return this.cmYear;
  }

  get monthOfTheYear(): MonthOfTheYear {
    return this.cmMonthOfTheYear;
  }
}
