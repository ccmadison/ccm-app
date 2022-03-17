

function handleSubmission(e) {
  e.preventDefault();

  const target = e.target;
  const START_LIST = target.querySelectorAll('[id*=startInput]');
  const END_LIST = target.querySelectorAll('[id*=endInput]');
  const H2_LIST = target.querySelectorAll('h2');
  const row = target.parentElement.parentElement.parentElement;

  [...START_LIST].forEach((start, i) => {
    const START = new Date(start.value);
    const end = END_LIST[i].value.toString().replace(/(\d{4})-(\d{2})-(\d{2})/, `$2/$3/$1`); // Re-arrange date string
    const END = new Date(end);
    const TIME = H2_LIST[i].innerHTML;
    const html = `<div class="row">
  <div class="col-4">
    <button>Download Calendar file (.ics)</button> with reminders
  </div>
</div>`;
    /**
     * 
     * @TODO - Create ICS download & handle update to Google Sheet
     * 
     */
    const iCalString = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:https://ccmadison.github.io/ccm-app/
METHOD:PUBLISH
BEGIN:VEVENT
UID:
ORGANIZER;CN="Organizer Name":MAILTO:organizer@example.org
SUMMARY:${description}
CLASS:PUBLIC
DTSTART:TZID=America/New_York:19970902T090000
DTEND:20150617T065900Z  
DTSTAMP:20150616T050000Z
END:VEVENT
END:VCALENDAR`;
  });
}

function watchForReservations() {
  const RESERVE_FORM = document.getElementById('Reserve');

  RESERVE_FORM.addEventListener('submit', handleSubmission, false);
}

export default watchForReservations;
