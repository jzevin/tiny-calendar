import Calendar from "./Calendar";
import { DayOfTheWeek } from "./CalendarEnums";

const html = `
<div class="tc-wrap">
    <header>
        <h1>Calendar!</h1>
        <button class="prev-btn">&lt; prev</button>
        <button class="next-btn">next &gt;</button>
    </header>
    <section>
    </section>
    <footer>
        <p>Footer</p>
    </footer>
</div>
<template class="day-template">
    <div class="day">
        <div class="day-number"></div>
    </div>
</template>
`;

interface ViewTemplate {
    [key: string]: HTMLTemplateElement;
}

export default class CalendarView {

    private __calendar: Calendar;
    private __styles: CSSStyleSheet;
    private __prevBtn: HTMLButtonElement;
    private __nextBtn: HTMLButtonElement;

    public container: HTMLDivElement;
    public el: HTMLElement;

    constructor(el: HTMLElement, calendar: Calendar) {
        this.container = document.createElement('div');
        this.container.classList.add('tiny-cal-wrap');
        this.container.innerHTML = html;
        this.__calendar = calendar;
        this.el = el;
        this.el.appendChild(this.container);
        //styles
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        document.head.appendChild(styleEl);
        this.__styles = <CSSStyleSheet>styleEl.sheet!;
        this.__styles.insertRule('.tc-wrap * { box-sizing: border-box; }');
        this.__styles.insertRule('.tc-wrap section { display: flex; flex-wrap: wrap; }');
        this.__styles.insertRule('.tc-wrap section .day { flex: 0 0 14.286%; border:1px solid #ddd; padding: 0.25em; }');
        this.__styles.insertRule('.tc-wrap section .day-name { flex: 0 0 14.286%; border:1px solid #ddd; padding: 0.25em; }');
        //events
        this.onClick = this.onClick.bind(this);
        this.container.addEventListener('click', this.onClick);
        this.__prevBtn = this.container.querySelector<HTMLButtonElement>('.prev-btn')!;
        this.__nextBtn = this.container.querySelector<HTMLButtonElement>('.next-btn')!;
        this.onClickPrevNext = this.onClickPrevNext.bind(this);
        this.__prevBtn.addEventListener('click', this.onClickPrevNext);
        this.__nextBtn.addEventListener('click', this.onClickPrevNext);
        //render
        this.render();
    }
    
    private render() {
        const temp = document.querySelector<HTMLTemplateElement>('.day-template');
        this.container.querySelector('section')!.innerHTML = '';
        for (let i = 0; i <= 6; i++) {
            const el = document.createElement('div');
            el.classList.add('day-name')
            el.innerHTML = `<div>${DayOfTheWeek[i]}</div>`;
            this.container.querySelector('section')!.appendChild(el);
        }
        const startsOn = this.__calendar.currentMonth.dayOfTheWeekStartsOn;
        for (let i = 0; i < 42; i++) {
            const day = this.__calendar.currentMonth.days[i-startsOn];
            const clone = document.importNode(temp!.content, true);
            clone.querySelector('.day-number')!.innerHTML = `${day ? day.number : '-'}`;
            clone.querySelector('.day-number')!.setAttribute('data-day-index', day ? `${i-startsOn}` : '');
            this.container.querySelector('section')!.appendChild(clone);
        }
    }

    private onClick(e: MouseEvent) {
        const t: HTMLElement = <HTMLTemplateElement>e.target;
        if(t.classList.contains('day-number')) {
            console.log(this.__calendar.currentMonth.days[Number(t.dataset['dayIndex'])]);
        }
    }

    private onClickPrevNext(e: MouseEvent) {
        const target: HTMLButtonElement = <HTMLButtonElement>e.target;
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

    public onDestroy() {
        this.container.removeEventListener('click', this.onClick);
        this.__prevBtn.removeEventListener('click', this.onClickPrevNext);
        this.__nextBtn.removeEventListener('click', this.onClickPrevNext);
    }
}