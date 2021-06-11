window.onload = () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  const result = document.getElementById("result");

  const addbtn = document.getElementById("add");
  const subbtn = document.getElementById("sub");
  const mulbtn = document.getElementById("mul");
  const divbtn = document.getElementById("div");

  addbtn.addEventListener("click", () => {
    result.innerHTML = "Result: " + (Number(num1.value) + Number(num2.value));
  });

  subbtn.addEventListener("click", () => {
    result.innerHTML = "Result: " + (Number(num1.value) - Number(num2.value));
  });

  mulbtn.addEventListener("click", () => {
    result.innerHTML = "Result: " + Number(num1.value) * Number(num2.value);
  });

  divbtn.addEventListener("click", () => {
    result.innerHTML = "Result: " + Number(num1.value) / Number(num2.value);
  });
};
