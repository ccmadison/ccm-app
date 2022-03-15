function handleRangeChange() {
  const RANGE_LIST = document.querySelectorAll('input[id*="daysRange"]');
  console.log(RANGE_LIST);
  [...RANGE_LIST].forEach(input => {
    let i = input.id.slice(-1);

    input.addEventListener('input', (e) => {
      let value = document.getElementById(`DayValue${i}`)

      value.placeholder = e.target.value;
    })
  });

  // range.addEventListener('input', (e) => {
  //   value.placeholder = e.target.value;
  // })
}

export default handleRangeChange;