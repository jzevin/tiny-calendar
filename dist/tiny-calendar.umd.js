!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.tinyCalendar=e()}(this,function(){var n,e;!function(n){n[n.Sunday=0]="Sunday",n[n.Monday=1]="Monday",n[n.Tuesday=2]="Tuesday",n[n.Wednesday=3]="Wednesday",n[n.Thursday=4]="Thursday",n[n.Friday=5]="Friday",n[n.Saturday=6]="Saturday"}(n||(n={})),function(n){n[n.January=0]="January",n[n.February=1]="February",n[n.March=2]="March",n[n.April=3]="April",n[n.May=4]="May",n[n.June=5]="June",n[n.July=6]="July",n[n.August=7]="August",n[n.September=8]="September",n[n.October=9]="October",n[n.November=10]="November",n[n.December=11]="December"}(e||(e={}));var t=function(e,t,a,r){if(void 0===e||void 0===t)throw new Error("Must provide a valid day of the week and number.");if(!l.isBetween(t,1,31)&&!l.isIntAndNum(t))throw new Error(t+" Not a valid day number. Must be 1-31.");this.__name=n[e],this.__number=t,this.__monthOfTheYear=a,this.__year=r},a={name:{configurable:!0},number:{configurable:!0},year:{configurable:!0},monthName:{configurable:!0},monthOfTheYear:{configurable:!0}};a.name.get=function(){return this.__name},a.number.get=function(){return this.__number},a.year.get=function(){return this.__year},a.monthName.get=function(){return e[this.__monthOfTheYear]},a.monthOfTheYear.get=function(){return this.__monthOfTheYear},t.prototype.toDate=function(){return new Date(this.monthName+" "+this.number+" "+this.year)},Object.defineProperties(t.prototype,a);var r=function(n,e){if(this.__days=[],void 0===e||void 0===n)throw new Error("Must provide a valid month name and year.");this.__monthOfTheYear=e,this.__year=n;for(var a=1;a<=31;a++){var r=new Date(this.name+" "+a+" "+n);if(l.isDate(r)&&r.getMonth()===this.__monthOfTheYear){var i=new t(r.getDay(),a,this.monthOfTheYear,this.year);this.__days.push(i)}}},i={name:{configurable:!0},days:{configurable:!0},year:{configurable:!0},monthOfTheYear:{configurable:!0},dayOfTheWeekStartsOn:{configurable:!0}};function o(n,e){return"hsla("+n.h+", "+n.s+"%, "+(n.l+e)+"%, "+n.a+")"}i.name.get=function(){return e[this.__monthOfTheYear]},i.days.get=function(){return this.__days},i.year.get=function(){return this.__year},i.monthOfTheYear.get=function(){return this.__monthOfTheYear},i.dayOfTheWeekStartsOn.get=function(){return this.__days[0].toDate().getDay()},Object.defineProperties(r.prototype,i);var s=function(n,e){var t;this.container=n,this.container.innerHTML='\n        <div class="tiny-calendar-wrap">\n            <header>\n                <div class="title">Tiny Calendar</div>\n                <nav class="controls">\n                    <div class="action">\n                        <button class="btn btn-prev">&lt;</button>\n                    </div>\n                    <div class="action">\n                        <button class="btn btn-month">September</button>\n                    </div>\n                    <div class="action">\n                        <button class="btn btn-year">2020</button>\n                    </div>\n                    <div class="action">\n                        <button class="btn btn-next">&gt;</button>\n                    </div>\n                </nav>\n            </header>\n            <section class="pick-months">\n                <ul>\n                    <template class="pick-month-template">\n                        <li>\n                            <div>Jan</div>\n                        </li>\n                    </template>\n                </ul>\n            </section>\n            <section class="pick-years">\n                <ul>\n                    <template class="pick-year-template">\n                        <li class="year">xxxx</li>\n                    </template>\n                </ul>\n            </section>\n            <section class="pick-days">\n                <table class="cal-table" cellspacing="0" cellpadding="0">\n                    <thead class="days">\n                        <tr>\n                            <template>\n                                <td>\n                                    <div class="day-name">xxxx</div>\n                                </td>\n                            </template>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <template class="pick-day-template">\n                                <td>\n                                    <div class="day">\n                                        <div class="day-inner">xxxx</div>\n                                    </div>\n                                </td>\n                            </template>\n                        </tr>\n                    </tbody>\n                </table>\n            </section>\n        </div>\n    ',this.el=this.container.querySelector(".tiny-calendar-wrap"),this.calendar=e,this.templates={day:this.el.querySelector("template.pick-day-template"),month:this.el.querySelector("template.pick-month-template"),year:this.el.querySelector("template.pick-year-template")},this.styles=document.createElement("style"),this.styles.type="text/css",this.styles.innerHTML="\n        .tiny-calendar-wrap {\n            overflow: hidden;\n            box-shadow: 8px 8px 7px rgba(0, 0, 0, 0.07);\n            font-family: sans-serif;\n            border-radius: 0.35em;\n        }\n\n        .tiny-calendar-wrap * {\n            box-sizing: border-box;\n        }\n\n        .tiny-calendar-wrap header {\n            height: auto;\n        }\n\n        .tiny-calendar-wrap .title {\n            padding: 0.35em 0;\n            background-color: "+o((t=this.calendar.options).baseColor,0)+";\n            color: #eee;\n            text-align: center;\n        }\n\n        .tiny-calendar-wrap .controls {\n            display: flex;\n        }\n\n        .tiny-calendar-wrap .controls .action {\n            display: flex;\n            flex: 1 1 auto;\n            background-color: "+o(t.baseColor,0)+";\n        }\n\n        .tiny-calendar-wrap .controls .action .btn {\n            border: none;\n            outline: none;\n            background-color: "+o(t.baseColor,-20)+";\n            flex: 1 1 auto;\n            padding: 0.5em;\n            color: #eee;\n            text-transform: uppercase;\n            font-size: 100%;\n            line-height: 1.15;\n            margin: 0;\n            cursor: pointer;\n        }\n\n        .tiny-calendar-wrap .controls .action .btn:hover {\n            background-color: "+o(t.baseColor,-30)+";\n        }\n\n        .tiny-calendar-wrap .day {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 0.25em;\n            color: #555;\n            border: 1px solid #ccc;\n        }\n\n        .tiny-calendar-wrap .day.on.today{\n            background-color: #fff;\n        }\n\n        .tiny-calendar-wrap .day.on {\n            background-color: #eee;\n            cursor: pointer;\n        }\n\n        .tiny-calendar-wrap .day.on:hover {\n            background-color: #fff;\n        }\n\n        .tiny-calendar-wrap .day.off {\n            background-color: #dedede;\n        }\n\n        .tiny-calendar-wrap .cal-table {\n            width: 100%;\n        }\n\n        .tiny-calendar-wrap .cal-table .days {\n            background-color: "+o(t.baseColor,-40)+";\n            text-align: center;\n        }\n\n        .tiny-calendar-wrap .cal-table .day-name {\n            padding: 0.25em 0.75em;\n            color: #bbb;\n            text-transform: uppercase;\n            border: 1px solid "+o(t.baseColor,-50)+";\n        }\n\n        .tiny-calendar-wrap section.pick-months, .tiny-calendar-wrap section.pick-years {\n            height: 0;\n            overflow: hidden;\n            transition: height 120ms;\n        }\n\n        .tiny-calendar-wrap section.pick-months.open, .tiny-calendar-wrap section.pick-years.open {\n            height: calc(100% - 63px);\n        }\n\n        .tiny-calendar-wrap section.pick-months ul, .tiny-calendar-wrap section.pick-years ul {\n            height: 100%;\n            display: flex;\n            flex-wrap: wrap;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        .tiny-calendar-wrap section.pick-months ul li, .tiny-calendar-wrap section.pick-years ul li {\n            background-color: #dedede;\n            padding: 0.25em;\n            flex: 0 0 25%;\n            margin: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-transform: uppercase;\n            transition: background-color 250ms;\n            cursor: pointer;\n            border: 1px solid #ccc;\n        }\n\n        .tiny-calendar-wrap section.pick-months ul li:hover, .tiny-calendar-wrap section.pick-years ul li:hover {\n            background-color: #fff;\n        }\n        ",this.el.appendChild(this.styles),this.btns={previous:this.el.querySelector(".btn-prev"),next:this.el.querySelector(".btn-next"),month:this.el.querySelector(".btn-month"),year:this.el.querySelector(".btn-year")},this.sections={pickMonths:this.el.querySelector("section.pick-months"),pickYears:this.el.querySelector("section.pick-years")},this.onClick=this.onClick.bind(this),this.el.addEventListener("click",this.onClick),this.render()};s.prototype.onClick=function(n){var e=n.target;e.classList.contains("day-inner")||e.classList.contains("day")?console.log(this.calendar.currentMonth.days[Number(e.dataset.dayIndex)]):e.classList.contains("btn")?e.classList.contains("btn-month")?this.toggleSection(this.sections.pickMonths):e.classList.contains("btn-year")?this.toggleSection(this.sections.pickYears):e.classList.contains("btn-prev")?this.onClickPrevNext("prev"):e.classList.contains("btn-next")&&this.onClickPrevNext("next"):e.classList.contains("year")?this.changeYear(+e.innerText):e.classList.contains("month")&&this.changeMonth(+e.dataset.monthIndex)},s.prototype.changeMonth=function(n){this.calendar.setMonth(n),this.toggleSection(this.sections.pickMonths),this.render()},s.prototype.changeYear=function(n){this.calendar.setYear(n),this.toggleSection(this.sections.pickYears),this.render()},s.prototype.toggleSection=function(n){this.el.querySelectorAll(".open").forEach(function(e){e!==n&&e.classList.remove("open")}),n.classList.toggle("open")},s.prototype.render=function(){this.el.querySelector(".cal-table thead tr").innerHTML="",this.el.querySelector(".cal-table tbody").innerHTML="",this.sections.pickYears.querySelector("ul").innerHTML="",this.sections.pickMonths.querySelector("ul").innerHTML="";for(var t=0;t<=6;t++){var a=document.createElement("td");a.classList.add("day-name"),a.innerHTML="<div>"+n[t].substr(0,1)+"</div>",this.el.querySelector("table thead tr").appendChild(a)}for(var r=this.sections.pickMonths.querySelector("ul"),i=0;i<12;i++){var o=document.createElement("li");o.innerText=e[i].slice(0,3),o.classList.add("month"),o.setAttribute("data-month-index",""+i),r.appendChild(o)}for(var s=this.calendar.year-12;s<this.calendar.year+12;s++){var c=document.importNode(this.templates.year.content,!0);c.querySelector("li").innerHTML=""+s,this.sections.pickYears.querySelector("ul").appendChild(c)}for(var l=this.calendar.currentMonth.dayOfTheWeekStartsOn,h=new Date,d=new Date(e[h.getMonth()]+" "+h.getDate()+" "+h.getFullYear()),u=0,y=0;u<6;u++){for(var p=document.createElement("tr"),m=0;m<7;m++){var f=this.calendar.currentMonth.days[y-l],b=document.importNode(this.templates.day.content,!0),g=b.querySelector(".day-inner"),v=b.querySelector(".day");g.innerHTML=""+(f?f.number:"&nbsp;"),v.classList.add(f?"on":"off"),f&&d.toString()===f.toDate().toString()&&v.classList.add("today"),g.setAttribute("data-day-index",f?""+(y-l):""),p.appendChild(b),y++}this.el.querySelector("table tbody").appendChild(p)}this.btns.month.innerHTML=""+this.calendar.currentMonth.name,this.btns.year.innerHTML=""+this.calendar.currentMonth.year,this.el.style.height=this.el.clientHeight+"px"},s.prototype.onClickPrevNext=function(n){"prev"===n?(this.calendar.previousMonth(),this.render()):"next"===n&&(this.calendar.nextMonth(),this.render())},s.prototype.onDestroy=function(){this.el.removeEventListener("click",this.onClick)};var c={year:(new Date).getFullYear(),month:(new Date).getMonth(),baseColor:{h:0,s:0,l:50,a:1}},l=function(n,t){void 0===t&&(t={});var a=t.month;this.options={year:t.year||c.year,month:a===e.January?a:void 0===a?c.month:a,baseColor:t.baseColor||c.baseColor},this.__year=this.options.year,this.setMonth(this.options.month),this.month=new r(this.options.year,this.options.month),this.view=null===n?null:new s(n,this)},h={year:{configurable:!0},currentMonth:{configurable:!0}};return l.isDate=function(n){return n instanceof Date&&!isNaN(n.getDay())},l.isIntAndNum=function(n){return Number.isInteger(n)&&!Number.isNaN(n)},l.isBetween=function(n,e,t){return n>=e&&n<=t},h.year.get=function(){return this.__year},l.prototype.setYear=function(n){this.__year=n,this.setMonth(this.currentMonth.monthOfTheYear)},l.prototype.setMonth=function(n){this.month=new r(this.year,n)},h.currentMonth.get=function(){return this.month},l.prototype.nextMonth=function(){var n=this.month.monthOfTheYear+1;n>11&&(n=e.January,this.__year++),this.setMonth(n)},l.prototype.previousMonth=function(){var n=this.month.monthOfTheYear-1;n<0&&(n=e.December,this.__year--),this.setMonth(n)},Object.defineProperties(l.prototype,h),l.monthOfTheYear=e,l.dayOfTheWeek=n,l});
//# sourceMappingURL=tiny-calendar.umd.js.map
