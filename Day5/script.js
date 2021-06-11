window.onload = () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  const result = document.getElementById("result");

  const addbtn = document.getElementById("add");
  const subbtn = document.getElementById("sub");
  const mulbtn = document.getElementById("mul");
  const divbtn = document.getElementById("div");

  addbtn.addEventListener("click", () => {
    if (isNaN(num1.value) || isNaN(num2.value)) {
      result.innerHTML = "Please enter VALID numbers";
    } else {
      result.innerHTML = "Result: " + (Number(num1.value) + Number(num2.value));
    }
  });

  subbtn.addEventListener("click", () => {
    if (isNaN(num1.value) || isNaN(num2.value)) {
      result.innerHTML = "Please enter VALID numbers";
    } else {
      result.innerHTML = "Result: " + (Number(num1.value) - Number(num2.value));
    }
  });

  mulbtn.addEventListener("click", () => {
    if (isNaN(num1.value) || isNaN(num2.value)) {
      result.innerHTML = "Please enter VALID numbers";
    } else {
      result.innerHTML = "Result: " + Number(num1.value) * Number(num2.value);
    }
  });

  divbtn.addEventListener("click", () => {
    if (isNaN(num1.value) || isNaN(num2.value)) {
      result.innerHTML = "Please enter VALID numbers";
    } else {
      result.innerHTML = "Result: " + Number(num1.value) / Number(num2.value);
    }
  });
};
