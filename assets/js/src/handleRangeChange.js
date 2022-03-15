function handleRangeChange() {
  const RANGE_LIST = document.querySelectorAll('input[id*="daysRange"]');
  console.log(RANGE_LIST);
  [...RANGE_LIST].forEach(input => {
    let i = input.id.slice(-1);

    input.addEventListener('input', (e) => {
      let value = document.getElementById(`DayValue${i}`)

      value.value = e.target.value;
    })
  });
  [...document.querySelectorAll('input[id*="DayValue"]')].forEach((input, i) => {
    input.addEventListener('change', (e) => {
      let val = document.getElementById(`daysRange${i}`)

      if (e.target.value < 7) {
        e.target.parentElement.parentElement.classList.add('forms__invalid');
        val.value = 7;
        return e.target.value = 7;
      }
      return val.value = e.target.value;
    })
  })
}

export default handleRangeChange;