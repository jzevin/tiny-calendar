import { MonthOfTheYear, DayOfTheWeek } from '../../CalendarEnums';
import CalendarMonth from '../../CalendarMonth';

// const cal = new Calendar();

const rnd = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

test(`New month`, () => {
  const date = new Date('September 27 2012');
  const month = new CalendarMonth(date.getFullYear(), date.getMonth());
  expect(month.name).toBe('September');
  expect(month.year).toBe(2012);
  expect(month.monthOfTheYear).toBe(MonthOfTheYear.September);
  expect(month.days.length).toBe(30);
});

test(`Random month test`, () => {
  const rndObj = {
    month: MonthOfTheYear[rnd(0, 11)],
    year: rnd(1973, 2019),
  };
  const date = new Date(`${rndObj.month} ${rndObj.year}`);
  const month = new CalendarMonth(date.getFullYear(), date.getMonth());
  let numDays = 31;
  for (let i = 31; i >= 0; i--) {
    if (date.getMonth() === new Date(`${rndObj.month} ${i} ${rndObj.year}`).getMonth()) {
      numDays = i;
      break;
    }
  }
  expect(month.name).toBe(MonthOfTheYear[date.getMonth()]);
  expect(month.year).toBe(rndObj.year);
  expect(month.monthOfTheYear).toBe(date.getMonth());
  expect(month.days.length).toBe(numDays);
});
