console.log(2);

var box = document.querySelector(".box");
console.log(box);

window.addEventListener("mousemove", function (e) {
  box.style.top = e.y + "px";
  box.style.left = e.x + "px";
});
