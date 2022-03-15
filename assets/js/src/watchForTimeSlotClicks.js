import handleSubmissionAttempt from './handleSubmissionAttempt';

const TABLE = document.getElementById('AgendaTable'); // Table element
const FORM = document.getElementById('Form'); // Form element
const SUBMIT = FORM.querySelector('#Submit'); // Form's submit button
const SELECT_BUTTONS_QUERY = '.Select';

function createInputElements(selector) {
  return [...document.querySelectorAll(selector)].forEach(btn => {
    const hour = btn.dataset.hour;
    const html = `<input class="form-check-input" type="radio" name="" id="${hour.replace(/^(\d\d?):.+([A,P]M)/, `$1$2`)}" value="${hour}">
    &nbsp;<label class="form-check-label" for="${hour.replace(/^(\d\d?):.+([A,P]M)/, `$1$2`)}">
      Select
    </label>`;

    btn.innerHTML = html;
  });
}

function toggleButton(target, checkedState, text) {
  const input = target.querySelector('.form-check-input');
  const label = target.querySelector('.form-check-label');

  input.checked = checkedState;
  label.textContent = text;
  target.classList.toggle('btn-primary');
  target.classList.toggle('btn-outline-primary');
}

function clickHandler(e) {
  if (!e.target.matches(SELECT_BUTTONS_QUERY))
    return;

  const target = e.target;
  if (target.querySelector('.form-check-input') == null) {
    // Inject all the input elements if they aren't already
    createInputElements(SELECT_BUTTONS_QUERY);
    FORM.querySelector('#Submit').disabled = false;
  }

  if (target.querySelector('.form-check-input').checked == false) {
    toggleButton(target, true, 'Selected');
  } else {
    toggleButton(target, false, 'Select');
  }
}

function watchForTimeSlotClicks() {
  TABLE.addEventListener('click', clickHandler);
  FORM.addEventListener('submit', handleSubmissionAttempt, false);
}

export default watchForTimeSlotClicks;