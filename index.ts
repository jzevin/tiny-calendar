// Import stylesheetsss
import './style.css';
const log = console.log.bind(console);

enum DayOfTheWeek {
  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

enum MonthOfTheYear {
  January, February, March, April, May, June, July, August, September, October, November, December
}

class CalendarDay {
  _name: string;
  _number: number;
  constructor(dow: DayOfTheWeek, num: number) {
    if(dow === undefined || num === undefined) throw new Error('Must provide a valid day of the week and number.');
    if( !Calendar.isBetween(num, 1, 31) && !Calendar.isIntAndNum(num) ) throw new Error(`${num} Not a valid day number. Must be 1-31.`);
    this._name = DayOfTheWeek[dow];
    this._number = num;
  }
}

class CalendarMonth {
  
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

class Calendar {
  
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
    return d instanceof Date && !isNaN(d);
  }

  public static isIntAndNum(num: any): boolean{
    return Number.isInteger(num) && !Number.isNaN(num);
  }

  public static isBetween(num: number, min: number, max: number) : boolean{
    return num >= min && num <= max;
  }

}

// const cal = new Calendar(1973);
// log(cal.monthName);
// cal.setMonth(MonthOfTheYear.January);
// log(cal.monthName);
// log(cal.getPreviousMonth().year);
// log(cal.monthName);
// for(const d of new CalendarMonth(MonthOfTheYear.September, 1973).days) {
//   console.log( d );
// }
