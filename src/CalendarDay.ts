import { DayOfTheWeek } from "./CalendarEnums";
import { Calendar } from "./Calendar";

export class CalendarDay {
    _name: string;
    _number: number;
    constructor(dow: DayOfTheWeek, num: number) {
      if(dow === undefined || num === undefined) throw new Error('Must provide a valid day of the week and number.');
      if( !Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num) ) throw new Error(`${num} Not a valid day number. Must be 1-31.`);
      this._name = DayOfTheWeek[dow];
      this._number = num;
    }
  }