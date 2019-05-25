import Calendar from '../../Calendar';
import { MonthOfTheYear, DayOfTheWeek } from '../../CalendarEnums';

const cal = new Calendar(null);
const date = new Date();

test(`The month and year should be the current month and year since no arguments were given.`, () => {
  expect(cal.year).toBe(date.getFullYear());
  expect(cal.currentMonth.name).toBe(MonthOfTheYear[date.getMonth()]);
});

const cal2 = new Calendar(null, { year: 1973 });
test(`The year should be 1973 and month should be the current month`, () => {
  expect(cal2.year).toBe(1973);
  expect(cal2.currentMonth.name).toBe(MonthOfTheYear[date.getMonth()]);
});

const cal3 = new Calendar(null, { year: 1973, month: 8 });
test(`The year should be 1973 and month should be September`, () => {
  expect(cal3.year).toBe(1973);
  expect(cal3.currentMonth.name).toBe('September');
});

const cal4 = new Calendar(null, { year: 2012, month: 11 });
test(`The calendar should start at December 2012 and then be January 2013`, () => {
  expect(cal4.year).toBe(2012);
  expect(cal4.currentMonth.name).toBe('December');
  cal4.nextMonth();
  expect(cal4.year).toBe(2013);
  expect(cal4.currentMonth.name).toBe('January');
});

const cal5 = new Calendar(null, { year: 2017, month: 0 });
test(`The calendar should start at January 2017 and then be December 2016`, () => {
  expect(cal5.year).toBe(2017);
  expect(cal5.currentMonth.name).toBe('January');
  cal5.previousMonth();
  expect(cal5.year).toBe(2016);
  expect(cal5.currentMonth.name).toBe('December');
});

const cal6 = new Calendar(null, { year: 2017, month: 0 });
test(`Changing the calendar year should also change the month.`, () => {
  expect(cal6.currentMonth.days[0].name).toBe(DayOfTheWeek[DayOfTheWeek.Sunday]);
  cal6.setYear(2019);
  expect(cal6.currentMonth.days[0].name).toBe(DayOfTheWeek[DayOfTheWeek.Tuesday]);
  // cal6.currentMonth.days[0].toDate()
  // expect(cal6.currentMonth.days[0].toDate().toString()).toBe(new Date('January 1 2019').toString());
});
