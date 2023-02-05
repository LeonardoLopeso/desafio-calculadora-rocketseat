let displayCalc = document.querySelector('#display-calc')
let showResult = document.querySelector('#result')
let message = document.querySelector('#error')

let getCalc = (number) => displayCalc.value += number;

let result = () => {
  message.style.display = "none";

  try {
    showResult.value = eval(displayCalc.value)
  } catch(e) {

    message.classList.add('error');
    message.innerText = "Operação inválida!";
    message.style.display = "block"

    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  }
};

const delResult = () => displayCalc.value = displayCalc.value.slice(0, -1);

const round = () => {
  showResult.value = Number(showResult.value).toFixed(2);
};

const clearShowResult = () => {
  showResult.value = "0";
  displayCalc.value = "";
}
