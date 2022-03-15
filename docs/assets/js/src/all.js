import '../../scss/main.scss';

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => {
      return import('bootstrap/js/dist/button').then(({ default: Button }) => Button)
    }).then((Button) => {
    //   return import('bootstrap/js/dist/popover').then(({default: Popover}) =>  Popover)
    // }).then(([Button, Popover]) => {
    //   return import('bootstrap/js/dist/tooltip').then(({default: Tooltip}) => Tooltip)
    // }).then(([Button, Popover, Tooltip]) => {
    //   return import('bootstrap/js/dist/tab').then(({default: Tab}) => Tab)
    // }).then(([Button, Popover, Tooltip, Tab]) => {
    //   console.log(Button);
      // console.log(Button);
      return import('./createAgenda')
        .then(({ default: createAgenda }) => createAgenda())
    // }).then(() => {
    //   return import('calendar-js/index').then(({ default: calendar }) => {
    //   });
      
    })
  
});