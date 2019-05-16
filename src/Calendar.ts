import { CalendarMonth } from "./CalendarMonth";
import { MonthOfTheYear } from "./CalendarEnums";

export class Calendar {
  
    private _year: number; 
    days: string[];
    _month: CalendarMonth;
  
    constructor(year?: number, month?: MonthOfTheYear) {
      year = year || new Date().getFullYear();
      month = month || new Date().getMonth();
      this.year = year;
      this.setMonth(month);
    }
  
    get year (): number {
      return this._year;
    }
  
    set year (year) {
      this._year = year;
      // month must be changed on year change
    }
  
    public setMonth(moty: MonthOfTheYear) {
      this._month = new CalendarMonth(this.year, moty)
    }
  
    public getNextMonth(): CalendarMonth {
      let nextMonth = this._month.monthOfTheYear+1;
      let year = this._year;
      if(nextMonth > 11) {
        nextMonth = MonthOfTheYear.January;
        year++;
      } 
      return new CalendarMonth(year, nextMonth)
    }
  
    public getPreviousMonth(): CalendarMonth {
      let nextMonth = this._month.monthOfTheYear-1;
      let year = this._year;
      if(nextMonth < 0) {
        nextMonth = MonthOfTheYear.December;
        year--;
      } 
      return new CalendarMonth(year, nextMonth)
    }
  
    public get monthName (): string {
      return this._month.name;
    }
  
    public static isDate (d: any): boolean {
      return d instanceof Date && !isNaN(d.getDay());
    }
  
    public static isIntAndNum(num: any): boolean{
      return Number.isInteger(num) && !Number.isNaN(num);
    }
  
    public static isBetween(num: number, min: number, max: number) : boolean{
      return num >= min && num <= max;
    }
  
  }