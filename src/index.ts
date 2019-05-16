import { Calendar } from './Calendar'

const log = console.log.bind(console);
const cal = new Calendar();


log(cal.getNextMonth().name);
