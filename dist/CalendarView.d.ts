import Calendar from "./Calendar";
export default class CalendarView {
    private __calendar;
    private __styles;
    private __prevBtn;
    private __nextBtn;
    container: HTMLDivElement;
    el: HTMLElement;
    constructor(el: HTMLElement, calendar: Calendar);
    private render;
    private onClick;
    private onClickPrevNext;
    onDestroy(): void;
}
