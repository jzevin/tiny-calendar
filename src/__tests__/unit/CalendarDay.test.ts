import { MonthOfTheYear, DayOfTheWeek } from '../../CalendarEnums';
import CalendarDay from '../../CalendarDay';

// const cal = new Calendar();

const rnd = (min: number, max: number)=> {
    return Math.round( (Math.random()*(max-min)) + min );
}

test(`The days to string to be the same`, () => {
    const date = new Date('September 27 2012');
    const day = new CalendarDay(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear());
    expect(day.year).toBe(date.getFullYear());
    expect(day.number).toBe(date.getDate());
    expect(day.toDate().toString()).toBe(date.toString());
});

test(`The random day test`, () => {
    const rndObj = {
        month: MonthOfTheYear[rnd(0,11)],
        day: rnd(1,28),
        year: rnd(1973, 2019)
    };
    const date = new Date(`${rndObj.month} ${rndObj.day} ${rndObj.year}`);
    const day = new CalendarDay(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear());
    expect(day.year).toBe(rndObj.year);
    expect(day.number).toBe(rndObj.day);
    expect(day.name).toBe(DayOfTheWeek[date.getDay()]);
    expect(day.toDate().toString()).toBe(date.toString());
});