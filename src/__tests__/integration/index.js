const out = document.querySelector('#output');
const options = {
  baseColor: {
    h: 220,
    s: 80,
    l: 60,
    a: 1,
  },
  onDateSelected: (d)=>{
    if(!d) return;
    console.log('yo!', d);
    out.value = `${d.monthName} - ${d.number} - ${d.year}`;
  }
};
const cal = new tinyCalendar(document.querySelector('#cal'), options);