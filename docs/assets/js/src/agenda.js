const TABLE = document.getElementById('agendaTable');

function agenda() {
  TABLE.addEventListener('click', (e) => {
    if (!e.target.matches('.Select'))
      return;
    
    
  })
}

export default agenda;