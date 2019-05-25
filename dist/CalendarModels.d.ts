import { MonthOfTheYear } from "./CalendarEnums";
export interface HSLAColor {
    h: number;
    s: number;
    l: number;
    a: number;
}
export interface CalendarOptions {
    year?: number;
    month?: MonthOfTheYear;
    baseColor?: HSLAColor;
}
