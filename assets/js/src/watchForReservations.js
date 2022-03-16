

function handleSubmission(e) {
  e.preventDefault();

  const target = e.target;
  const START_LIST = target.querySelectorAll('[id*=startInput]');
  const END_LIST = target.querySelectorAll('[id*=endInput]');
  const H2_LIST = target.querySelectorAll('h2');

  [...START_LIST].forEach((start, i) => {
    const START = new Date(start.value);
    const end = END_LIST[i].value.toString().replace(/(\d{4})-(\d{2})-(\d{2})/, `$2/$3/$1`); // Re-arrange date string
    const END = new Date(end);
    const TIME = H2_LIST[i].innerHTML;
    /**
     * 
     * @TODO - Create ICS download & handle update to Google Sheet
     * 
     */
  });
}

function watchForReservations() {
  const RESERVE_FORM = document.getElementById('Reserve');

  RESERVE_FORM.addEventListener('submit', handleSubmission, false);
}

export default watchForReservations;
