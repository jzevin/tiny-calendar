import Calendar from "./Calendar";
export default class CalendarView {
    container: HTMLDivElement;
    el: HTMLElement;
    private __calendar;
    private __styles;
    private __prevBtn;
    private __nextBtn;
    constructor(el: HTMLElement, calendar: Calendar);
    private render;
    private onClick;
    private onClickPrevNext;
    private onDestroy;
}
