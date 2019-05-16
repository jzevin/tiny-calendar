import { MonthOfTheYear } from "./CalendarEnums";
import { CalendarDay } from "./CalendarDay";
import { Calendar } from "./Calendar";

export class CalendarMonth {
  
    private _name: string;
    private _monthOfTheYear: MonthOfTheYear;
    private _days: any[] = [];
    private _year: number; 
    
    constructor(year: number, month: MonthOfTheYear) {
      if(month === undefined || year === undefined) throw new Error('Must provide a valid month name and year.');
      this._monthOfTheYear = month;
      this._year = year;
      for(let i = 1; i <= 31; i++) {
        const date = new Date(`${this.name} ${i} ${year}`);
        if(Calendar.isDate(date) && date.getMonth() === this._monthOfTheYear) {
          const day = new CalendarDay(date.getDay(), i);
          this._days.push(day);
        }
      }
    }
  
    get name(): string {
      return MonthOfTheYear[this._monthOfTheYear];
    }
  
    get days() {
      return this._days;
    }
  
    get year() {
      return this._year;
    }
  
    get monthOfTheYear(): MonthOfTheYear {
      return this._monthOfTheYear;
    }
  }