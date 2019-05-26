import { MonthOfTheYear } from './CalendarEnums';

export interface ICalendarOptions {
  year?: number;
  month?: MonthOfTheYear;
  baseColor?: IHSLAColor;
  onDateSelected?: (data: any) => void;
}

export interface IHSLAColor {
  h: number;
  s: number;
  l: number;
  a: number;
}
