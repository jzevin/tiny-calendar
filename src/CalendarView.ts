import Calendar from "./Calendar";

const html = `
<header>
    <h1>Calendar!</h1>
</header>
<section>
    <p>body</p>
</section>
<footer>
    <p>Footer</p>
</footer>
`;

export default class CalendarView {

    private __calendar: Calendar;

    public container: HTMLDivElement;
    public el: HTMLElement;

    constructor(el: HTMLElement, calendar: Calendar) {
        this.container = document.createElement('div');
        this.container.classList.add('tiny-cal-wrap');
        this.container.innerHTML = html;
        this.__calendar = calendar;
        this.el = el;
        this.el.appendChild(this.container);
    }
    
    private init() {

    }
}