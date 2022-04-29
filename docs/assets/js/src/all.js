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
      return import('bootstrap/js/dist/collapse').then(({ default: Collapse }) => [Collapse, Button])
    // }).then(([Collapse, Button]) => {
    //   import('bootstrap/js/dist/tooltip').then(({ default: Tooltip }) => Tooltip)
    //     .then(Tooltip => {
    //       return import('./showTooltipOnMouseOver').then(({default: init}) => init(Tooltip))
    //     })
    //   return [Collapse, Button];
    }).then(([Collapse, Button]) => {
      if ( !document.getElementById('Agenda') )
        return;

      return import('./agenda/createAgenda').then(({ default: createAgenda }) => createAgenda());
    // }).then(() => {
    //   return import('calendar-js/index').then(({ default: calendar }) => {
    //   });
    }).then(() => {
      if (!document.getElementById('themeToggle'))
        return;

      return import('./toggleTheme').then(({default: toggleTheme}) => toggleTheme())
    })
  
});