function makeDiv() {
  var div = document.createElement("div");
  div.classList.add("seat-div");
  return div;
}

var seatBox = document.querySelector(".seat-box");
var bookedDiv = document.querySelector(".booked");
var remainingDiv = document.querySelector(".remaining");
var booked = 0;
var rem = 36;
for (var i = 0; i < 36; i++) {
  seatBox.appendChild(makeDiv());
}

seatBox.addEventListener("click", (e) => {
  var seat = e.target;
  if (seat.classList.contains("seat-booked")) {
    seat.classList.remove("seat-booked");
    booked--;
    rem++;
  } else {
    seat.classList.add("seat-booked");
    booked++;
    rem--;
  }
  bookedDiv.innerText = "Booked Seats: " + booked;
  remainingDiv.innerText = "Remaining Seats: " + rem;
});
