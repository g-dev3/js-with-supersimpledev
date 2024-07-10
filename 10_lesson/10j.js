let Calculator = localStorage.getItem("calculator") || "";
fn(Calculator);
function updateCalculation(num) {
  Calculator += num;
  console.log(Calculator);
  fn(Calculator);
}

function equal(Calculator) {
  Calculator = eval(Calculator);
  console.log(Calculator);
  localStorage.setItem("calculator", Calculator);
  fn(Calculator);
}

function fn(Calculator) {
  const result = document.querySelector(".result");
  result.innerHTML = Calculator;
}
