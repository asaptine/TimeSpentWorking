const submitBtn = document.querySelector("button");
const DEFAULT_HOURS_OF_WORK = 8;
const userInputs = document.querySelectorAll("input");

const calculate = () => {
  const payment = userInputs[0].value;
  const workingDays = userInputs[1].value;
  const amount = userInputs[2].value;

  if (
    payment < 4094 ||
    amount < 0 ||
    workingDays < 0
  ) {
    return alert(
      "Krivi podaci unešeni! Plaća mora biti veća od minimalne(4094hrk u Hrvatskoj). Ostale vrijednosti moraju biti veće od 0 i ne smiju biti prazne!"
    );
  }

  const oneWorkingDay = payment / workingDays;
  const hourlyRate = oneWorkingDay / DEFAULT_HOURS_OF_WORK;
  const hourWorkedAmount = (amount / hourlyRate).toFixed(2);
  const daysWorkedAmount = hourWorkedAmount / DEFAULT_HOURS_OF_WORK;

  return daysWorkedAmount;
};

const clearInput = () => {
  userInputs[0].value = "";
  userInputs[1].value = "";
  userInputs[2].value = "";
};

const render = (daysAmount) => {
  const h2 = document.querySelector(".result-amount");
  const daysAmountString = daysAmount.toFixed(2).toString();
  const daysArray = daysAmountString.split(".");
  const hourPercentage = DEFAULT_HOURS_OF_WORK * (daysArray[1] / 100);
  h2.textContent = daysArray[0] + " dana " + hourPercentage + " sati";
};

submitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const daysWorkedAmount = calculate();
  render(daysWorkedAmount);

  clearInput();
});
