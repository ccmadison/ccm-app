import '../../scss/main.scss';

// const PARENT = document.getElementById('Schedule');

// function createDays(week) {
//   let html = ''
  
//   week.forEach(day => {
//     html += day != 0 ? `<td>${day}</td>` : '<td>&nbsp;</td>'
//   })
//   return html
// }

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => {
      return import('bootstrap/js/dist/button').then(({default: Button}) => Button)
    }).then((Button) => {
    //   return import('bootstrap/js/dist/popover').then(({default: Popover}) =>  Popover)
    // }).then(([Button, Popover]) => {
    //   return import('bootstrap/js/dist/tooltip').then(({default: Tooltip}) => Tooltip)
    // }).then(([Button, Popover, Tooltip]) => {
    //   return import('bootstrap/js/dist/tab').then(({default: Tab}) => Tab)
    // }).then(([Button, Popover, Tooltip, Tab]) => {
    //   console.log(Button);
      // console.log(Button);
      return import('./createAgenda').then(({ default: createAgenda }) => {
        return gapi.load('client', createAgenda);
      })
    }).then(() => {
      return import('calendar-js/index').then(({ default: calendar }) => {

  //       const d = new Date;

  //       d.setHours(0, 0, 0, 0);

  //       const currentMonthObj = calendar().of(d.getFullYear(), d.getMonth());
        
  //       console.log(currentMonthObj);
  //       const currentMonth = currentMonthObj.calendar;
  //       let html = `<table class="table table-striped table-hover">
  // <thead>
  //   <tr>
  //     <th>Sun.</th>
  //     <th>Mon.</th>
  //     <th>Tues.</th>
  //     <th>Wed.</th>
  //     <th>Thur.</th>
  //     <th>Fri.</th>
  //     <th>Sat.</th>
  //   </tr>
  // </thead>
  // <tbody>`;

  //       currentMonth.forEach(week => {
  //         html += `<tr>
  //           ${createDays(week)}
  //         </tr>`;
  //       });
        
  //       html += '</tbody></table>';
  //       PARENT.innerHTML = '';
  //       PARENT.innerHTML = html;
       // End imports 
      })
    })
  
});