import Calendar from './Calendar';
export default class CalendarView {
    private el;
    private container;
    private calendar;
    private styles;
    private btns;
    private templates;
    private sections;
    constructor(el: HTMLElement, calendar: Calendar);
    private onClick;
    private changeMonth;
    private changeYear;
    private toggleSection;
    private render;
    private onClickPrevNext;
    private onDestroy;
}
