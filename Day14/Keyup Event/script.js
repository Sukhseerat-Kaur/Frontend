var body = document.querySelector(".body");
var container = document.querySelector(".container");

window.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const newDiv = `<div class="box"><div/>`;
    container.insertAdjacentHTML("beforeend", newDiv);
  }
  if (e.key === "Delete") {
    if (container.lastChild === null) {
      alert("nothing to delete");
    } else {
      container.removeChild(container.lastChild);
    }
  }
});
