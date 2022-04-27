const firstNumber = document.getElementById('number1');
const secondNumber = document.getElementById('number2');
const getGCDButton = document.getElementById('getGCDButton');
const resetButton = document.getElementById('resetButton');
const answer = document.getElementById('answer');
const steps = document.getElementById('steps');



let stepsArr = [];


function findQ(A, B) {
  return parseInt(A/B);
}



function addStep(equation) {
  const stepDiv = document.createElement('div');
  stepDiv.classList.add('step');
  stepDiv.textContent = equation;
  steps.appendChild(stepDiv);
}



function addSteps() {
  stepsArr.forEach((step) => {
    addStep(step);
  })
}



function resetInputs() {
  firstNumber.value = '';
  secondNumber.value = '';
}



function deleteSteps() {
  let child = steps.lastElementChild;

  while (child) {
    steps.removeChild(child);
    child = steps.lastElementChild;
  }
}



// FORMULA IS A = Bq + r
// A = first number
// B = second number
// q = number to multiply to second number to make equal or less than A
// r = A - Bq

// recurse until r is equal to zero then return B
function getGCDOfTwoNumbers(e, A, B) {
  e.preventDefault();
  deleteSteps();

  let q = findQ(A, B);
  const Bq = B*q;
  const r = A - Bq;

  const equation = `${A} = ${B}(${q}) - ${r}`;
  stepsArr.push(equation);

  if (r === 0) {
    answer.textContent = `Answer: ${B}`;
    addSteps();
    stepsArr = [];
    // resetInputs();
  } else {
    getGCDOfTwoNumbers(e, B, r);
  }

}



getGCDButton.addEventListener('click', (e) => {
  getGCDOfTwoNumbers(e, parseInt(firstNumber.value), parseInt(secondNumber.value));
});


resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  resetInputs();
  deleteSteps();
  stepsArr = [];
  answer.textContent = '';
})