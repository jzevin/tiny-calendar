import Calendar from "./Calendar";
import { DayOfTheWeek } from "./CalendarEnums";

const html = `
<header>
    <h1>Calendar!</h1>
    <button class="prev-btn">&lt; prev</button>
    <button class="next-btn">next &gt;</button>
</header>
<section>
    <table>
        <thead><tr></tr></thead>
        <tbody></tbody>
    </table>
</section>
<footer>
    <p>Footer</p>
</footer>
<template class="day-template">
    <td class="day-td">
        <div class="day">
            <div class="day-number"></div>
        </div>
    </td>
</template>
`;

export default class CalendarView {

    public container: HTMLDivElement;
    public el: HTMLElement;

    private __calendar: Calendar;
    private __styles: CSSStyleSheet;
    private __prevBtn: HTMLButtonElement;
    private __nextBtn: HTMLButtonElement;

    constructor(el: HTMLElement, calendar: Calendar) {
        this.container = document.createElement('div');
        this.container.classList.add('tiny-cal-wrap');
        this.container.innerHTML = html;
        this.__calendar = calendar;
        this.el = el;
        this.el.appendChild(this.container);
        // styles
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        document.head.appendChild(styleEl);
        this.__styles = styleEl.sheet! as CSSStyleSheet;
        this.__styles.insertRule('.tiny-cal-wrap { font-family: sans-serif; }', 0);
        this.__styles.insertRule('table { width: 100%; }', 1);
        this.__styles.insertRule('table thead td { text-transform: uppercase; }', 2);
        this.__styles.insertRule(`
        table tbody td .day {
            display: flex;
            justify-content: center;
            background-color: #efefef; 
            padding: 0.25em;
        }`, 3);
        // events
        this.onClick = this.onClick.bind(this);
        this.container.addEventListener('click', this.onClick);
        this.__prevBtn = this.container.querySelector<HTMLButtonElement>('.prev-btn')!;
        this.__nextBtn = this.container.querySelector<HTMLButtonElement>('.next-btn')!;
        this.onClickPrevNext = this.onClickPrevNext.bind(this);
        this.__prevBtn.addEventListener('click', this.onClickPrevNext);
        this.__nextBtn.addEventListener('click', this.onClickPrevNext);
        // render
        this.render();
    }
    
    private render() {
        const temp = document.querySelector<HTMLTemplateElement>('.day-template');
        this.container.querySelector('table thead tr')!.innerHTML = '';
        this.container.querySelector('table tbody')!.innerHTML = '';
        for (let i = 0; i <= 6; i++) {
            const el = document.createElement('td');
            el.classList.add('day-name')
            el.innerHTML = `<div>${DayOfTheWeek[i].substr(0,3)}</div>`;
            this.container.querySelector('table thead tr')!.appendChild(el);
        }
        const startsOn = this.__calendar.currentMonth.dayOfTheWeekStartsOn;
        for (let row = 0, i = 0; row < 6; row++) {
            const rowEl = document.createElement('tr');
            for (let col = 0; col < 7; col++) {
                const day = this.__calendar.currentMonth.days[i-startsOn];
                const clone = document.importNode(temp!.content, true);
                clone.querySelector('.day-number')!.innerHTML = `${day ? day.number : '-'}`;
                clone.querySelector('.day-number')!.setAttribute('data-day-index', day ? `${i-startsOn}` : '');
                rowEl.appendChild(clone);
                i++;
            }
            this.container.querySelector('table tbody')!.appendChild(rowEl);
        }
    }

    private onClick(e: MouseEvent) {
        const t: HTMLElement = e.target as HTMLTemplateElement;
        if(t.classList.contains('day-number')) {
            console.log(this.__calendar.currentMonth.days[Number(t.dataset[`dayIndex`])]);
        }
    }

    private onClickPrevNext(e: MouseEvent) {
        const target: HTMLButtonElement = e.target as HTMLButtonElement;
        if (target.classList.contains('prev-btn')) {
            console.log('prev');
            this.__calendar.previousMonth();
            this.render();
        } else if (target.classList.contains('next-btn')) {
            console.log('next');
            this.__calendar.nextMonth();
            this.render();
        }
    }

    private onDestroy() {
        this.container.removeEventListener('click', this.onClick);
        this.__prevBtn.removeEventListener('click', this.onClickPrevNext);
        this.__nextBtn.removeEventListener('click', this.onClickPrevNext);
    }
}