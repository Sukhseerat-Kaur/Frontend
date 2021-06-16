const whiteDivs = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];

var container = document.querySelector(".container");
for (var i = 0; i < 400; i++) {
  container.appendChild(makeDiv(i));
}
container.addEventListener("click", doThis);

function doThis(e) {
  var divEle = e.target;
  switchClass(divEle);
}

function makeDiv(i) {
  var div = document.createElement("div");
  if (whiteDivs.includes(i)) div.classList.add("white");
  else div.classList.add("red");
  return div;
}

function switchClass(element) {
  if (element.className == "red") {
    element.classList.remove("red");
    element.classList.add("white");
  } else {
    element.classList.remove("white");
    element.classList.add("red");
  }
}
