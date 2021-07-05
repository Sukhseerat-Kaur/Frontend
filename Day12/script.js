//For date
let dateDiv = document.querySelector(".date");
const options = { day: "numeric", month: "short", weekday: "long" };
const date = new Date();
dateDiv.innerHTML = date.toLocaleDateString("en-US", options);
//For date ends

const UNCHECK_CLASS1 = "far";
const UNCHECK_CLASS2 = "fa-circle";
const CHECK_CLASS1 = "fas";
const CHECK_CLASS2 = "fa-check-circle";

const LINE_THROUGH_CLASS = "line-through";
let listDiv = document.querySelector(".list");
let taskDiv = document.querySelector(".task");
let inputField = document.querySelector("input");
let LIST, id;

//get item from local storge
let data = localStorage.getItem("todo");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  displayList(LIST);
} else {
  LIST = [];
  id = 0;
}

function displayList(arr) {
  arr.forEach((element) => {
    addTodoToScreen(element.name, element.id, element.done, element.trash);
  });
}

function addTodoToScreen(task, id, done, trash) {
  if (trash) return;
  const class1ToApply = done ? CHECK_CLASS1 : UNCHECK_CLASS1;
  const class2ToApply = done ? CHECK_CLASS2 : UNCHECK_CLASS2;
  const isLineThrough = done ? LINE_THROUGH_CLASS : "";
  const htmlToAdd = ` <li>
                        
                          <i class="${class1ToApply} ${class2ToApply} pointed" id="${id}" job="check-box")></i>
                        
                        <p class="task ${isLineThrough}">${task}</p>
                       
                          <i class="fas fa-trash-alt trash pointed" id="${id}" job="trash")></i>
                    </li>`;
  listDiv.insertAdjacentHTML("beforeend", htmlToAdd);
}

//add item on enter key press
document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") add();
});

document.querySelector(".fa-plus-circle").addEventListener("click", add);

function add() {
  const task = inputField.value;
  if (task) {
    addTodoToScreen(task, id, false, false);

    LIST.push({
      name: task,
      id: id,
      done: false,
      trash: false,
    });
    //add item to local storage
    localStorage.setItem("todo", JSON.stringify(LIST));
    id++;
  }
  inputField.value = "";
}

function completed(element) {
  if (element.classList.contains(UNCHECK_CLASS1)) {
    element.classList.remove(UNCHECK_CLASS1);
    element.classList.remove(UNCHECK_CLASS2);
    element.classList.add(CHECK_CLASS1);
    element.classList.add(CHECK_CLASS2);
  } else {
    element.classList.remove(CHECK_CLASS1);
    element.classList.remove(CHECK_CLASS2);
    element.classList.add(UNCHECK_CLASS1);
    element.classList.add(UNCHECK_CLASS2);
  }
  element.parentNode
    .querySelector(".task")
    .classList.toggle(LINE_THROUGH_CLASS);

  LIST[element.id].done = LIST[element.id].done ? false : true; //as should toggle between completed and not completed
}

function removeElement(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

listDiv.addEventListener("click", function (e) {
  if (e.target.attributes.job.value == "check-box") {
    completed(e.target);
  } else if (e.target.attributes.job.value == "trash") {
    removeElement(e.target);
  } else {
    //do nothing
  }
  //update local storage list
  localStorage.setItem("todo", JSON.stringify(LIST));
});

document.querySelector(".clear-all").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
