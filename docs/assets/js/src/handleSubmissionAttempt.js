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
        <div class="col-5">
          <label for="daysRange${i}" class="form-label">Number of days to reserve</label>
          <input type="range" class="form-range" min="7" max="90" step="1" id="daysRange${i}">
        </div>
        <div class="col-3 d-flex flex-column justify-content-center">
          <div class="input-group">
          <input id="DayValue${i}" type="text" class="form-control" placeholder="" aria-label="Number of days" aria-describedby="days${i}" disabled>
          <span class="input-group-text" id="days${i}">days</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>`;
        });
        MODAL_ELEMENT.querySelector('.modal-body').innerHTML = mapped.join('');
        return res();
      });
      populateModalContent.then(() => handleRangeChange())
      // return import('./handleRangeChange').then(({default: handleRangeChange}) => handleRangeChange())
    }
  })
}

export default handleSubmissionAttempt;