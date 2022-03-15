import handleRangeChange from './handleRangeChange';

const MODAL_ELEMENT = document.getElementById('requestTimeModal');

function handleSubmissionAttempt(e) {
  e.preventDefault();
  
  import('bootstrap/js/dist/modal').then(({ default: Modal }) => {
    const target = e.target;
    const modal = Modal.getOrCreateInstance(MODAL_ELEMENT);

    modal.toggle();
    if (target.querySelector('.form-check-input') == null) {
      // Reject submission here
      MODAL_ELEMENT.querySelector('.modal-body').innerHTML = `<div class="my-5"><h2>Whoops!</h2><h5>Please select a time first.</h5></div>`;
      console.error(`Error: you need to select a time first.`);
    } else {
      let populateModalContent = new Promise((res, rej) => {
        const inputList = document.querySelectorAll('.form-check-input');
        const selectionArr = [];

        [...inputList].forEach(input => {
          if (input.checked == true) {
            selectionArr.push(input.value)
          }
          return selectionArr;
        })
        let mapped = selectionArr.map((time, i) => {
          return `<div class="row">
    <div class="col mb-3">
      <div class="card card-body">
      <div class="row">
        <div class="col-3 d-flex flex-column justify-content-center">
          <h2>${time}</h2>
        </div>
        <div class="col-6">
          <label for="daysRange${i}" class="form-label">Length of reservation (in days)</label>
          <input type="range" class="form-range" min="7" max="90" step="1" id="daysRange${i}">
          <div class="forms__invalid-text">
            <p class="mb-0 text-danger">Please adjust the slider to your desired number of&nbsp;days</p>
          </div>
        </div>
        <div class="col-3 d-flex flex-column justify-content-center">
          <div class="input-group">
          <input id="DayValue${i}" type="text" class="form-control" placeholder="" aria-label="Number of days" aria-describedby="days${i}">
          <span class="input-group-text" id="days${i}">days</span>
          <div class="forms__invalid-text">
            <p class="mb-0 text-danger">Value must be 7 or&nbsp;higher.</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>`;
        });
        const form = `<form id="Reserve" class="form my-4 mx-3" action="./">
  <div class="card card-body">
    ${mapped.join('')}
    <div class="text-center">
      <button type="submit" id="reserveSubmit" class="btn btn-outline-primary">Reserve</button>
    </div>
  </div>
</form>`;
        MODAL_ELEMENT.querySelector('.modal-body').innerHTML = form;
        return res();
      });
      populateModalContent.then(() => handleRangeChange())
        .then(() => {
        return import('./watchForReservations').then(({default: watchForReservations}) => watchForReservations())
      })
      // return import('./handleRangeChange').then(({default: handleRangeChange}) => handleRangeChange())
    }
  })
}

export default handleSubmissionAttempt;