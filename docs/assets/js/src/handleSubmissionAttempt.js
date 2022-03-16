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
      Promise.resolve()
        .then(() => {
          const inputList = document.querySelectorAll('.form-check-input');
          const selectionArr = [];

          [...inputList].forEach(input => {
            if (input.checked == true) {
              selectionArr.push(input.value)
            }
            return selectionArr;
          })
          const d = new Date;

          d.setHours(0, 0, 0, 0);

          const mm = (d.getMonth() + 1) < 9 ? `0${(d.getMonth() + 1)}` : d.getMonth() + 1,
            dd = (d.getDate() < 9) ? `0${d.getDate()}` : d.getDate(),
            yy = d.getFullYear(),
            today = `${mm}/${dd}/${yy}`;
          let mapped = selectionArr.map((time, i) => {
            return `<div class="card card-body mb-3">
    <div class="row">
      <div class="col-4 d-flex flex-column justify-content-center">
        <h2>${time}</h2>
      </div>
      <div class="col-4">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="startInput${i}" value="${today}" placeholder="${today}" disabled>
          <label for="startInput${i}">Start-date of reservation</label>
        </div>
      </div>
      <div class="col-4 d-flex flex-column justify-content-center">
        <div class="form-floating mb-3">
          <input type="date" class="form-control" id="endInput${i}">
          <label for="endInput${i}">End-date of reservation</label>
        </div>
      </div>
    </div>
  </div>`;
          });

          const form = `<form id="Reserve" class="form my-4 mx-3" action="./">
    <div class="card card-body bg-light">
      ${mapped.join('')}
      <div class="text-center">
        <button type="submit" id="reserveSubmit" class="btn btn-outline-primary">Reserve</button>
      </div>
    </div>
  </form>`;

          return MODAL_ELEMENT.querySelector('.modal-body').innerHTML = form;
        }).then(() => {
          return import('./watchForReservations').then(({default: watchForReservations}) => watchForReservations())
        })
      // return import('./handleRangeChange').then(({default: handleRangeChange}) => handleRangeChange())
    }
  })
}

export default handleSubmissionAttempt;