function handleSubmission(e) {
  e.preventDefault();

  console.log(e.target);
  const target = e.target;

  const inputList = target.querySelectorAll('input[id*="daysRange"]');

  [...inputList].forEach((input) => {
    if (input.value == '49') {
      console.log(input.value);
      input.parentElement.classList.add('forms__invalid');
    }
  })
  
}

function watchForReservations() {
  const RESERVE_FORM = document.getElementById('Reserve');

  RESERVE_FORM.addEventListener('submit', handleSubmission, false);
}

export default watchForReservations;
