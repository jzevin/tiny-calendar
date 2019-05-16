import { Calendar } from './Calendar';
import { DayOfTheWeek } from './CalendarEnums';

export class CalendarDay {
  private calName: string;
  private calNumber: number;
  constructor(dow: DayOfTheWeek, num: number) {
    if (dow === undefined || num === undefined) {
      throw new Error('Must provide a valid day of the week and number.');
    }
    if (!Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num)) {
      throw new Error(`${num} Not a valid day number. Must be 1-31.`);
    }
    this.calName = DayOfTheWeek[dow];
    this.calNumber = num;
  }

  public get name(): string {
    return this.calName;
  }

  public get number(): number {
    return this.calNumber;
  }
}
