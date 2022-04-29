const MODAL_ELEMENT = document.getElementById('requestTimeModal');

function handleSubmissionAttempt(e) {
  e.preventDefault(); // Prevents page from reloading on form-submission
  // Import the Bootstrap 5 Modal JS module first:
  import('bootstrap/js/dist/modal').then(({ default: Modal }) => {
    const target = e.target;
    const modal = Modal.getOrCreateInstance(MODAL_ELEMENT); // Bootstrap 5 method for getting a modal

    modal.toggle(); // Bootstrap 5 method for toggling the modal open or closed
    import('./draggableModal').then(({default: init}) => init(MODAL_ELEMENT)) // Provides ability to drag/reposition modals anywhere in the document

    if (target.querySelector('.form-check-input') == null) { // Check that a time slot was chosen
      // Reject the submission here if no time slot was chosen (injects message to user into the modal)
      MODAL_ELEMENT.querySelector('.modal-body').innerHTML = `<div class="my-5"><h2>Whoops!</h2><h5>Please select a time first.</h5></div>`;
      console.error(`Error: you need to select a time first.`);
    } else {
      // Handle submissions in this else { ...block... }
      Promise.resolve()
        .then(() => {
          
          const inputList = document.querySelectorAll('.form-check-input'); // Create a DomTokenList of input elements to loop through
          const selectionArr = []; // Empty array to populate the selected times with

          // Loop over each input element 
          [...inputList].forEach(input => {
            if (input.checked == true) {
              // Populate our array with the selected time slots
              selectionArr.push(input.value);
            }
          });
          const d = new Date;

          d.setHours(0, 0, 0, 0);

          const mm = (d.getMonth() + 1) < 9 ? `0${(d.getMonth() + 1)}` : d.getMonth() + 1;
          const dd = (d.getDate() < 9) ? `0${d.getDate()}` : d.getDate();
          const yy = d.getFullYear();
          const today = `${mm}/${dd}/${yy}`;

          let mapped = selectionArr.map((time, i) => {
            return `<div class="card card-body mb-3">
    <div class="row">
      <div class="col-lg-4 d-flex flex-column justify-content-center">
        <h2>${time}</h2>
      </div>
      <div class="col-lg-4">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="startInput${i}" value="${today}" placeholder="${today}" disabled>
          <label for="startInput${i}">Start date</label>
        </div>
      </div>
      <div class="col-lg-4 d-flex flex-column justify-content-center">
        <div class="form-floating mb-3">
          <input type="date" class="form-control" id="endInput${i}" required>
          <label for="endInput${i}">End date</label>
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