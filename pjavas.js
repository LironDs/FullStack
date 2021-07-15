let arr = [];
let noteId;

function addtask(event) {
  event.preventDefault();
  console.log(event);
  const inputArr = document.getElementsByTagName("input");
  const taskOb = {
    ///מטלה אחת בתוך המערך
    task: inputArr[0].value,
    date: inputArr[1].value,
    time: inputArr[2].value,
    id: new Date().getTime(),
  };
  createNote(taskOb);
  arr.push(taskOb);

  const taskObJSONStr = JSON.stringify(arr); // Object ==> String (JSON format)

  localStorage.setItem("taskOb", taskObJSONStr);
}

function createNote(taskOb) {
  const noteContainer = document.getElementById("noteContainer");
  const taskDiv = document.createElement("div");
  const taskText = document.createElement("p");
  const taskDate = document.createElement("p");
  const taskTime = document.createElement("p");
  const xIcon = document.createElement("span");
  xIcon.addEventListener("click", function () {
    const parent = this.parentElement.parentElement;
    this.removeChild;
  });
  xIcon.classList.add("glyphicon");
  xIcon.classList.add("glyphicon-remove");

  taskText.innerText = taskOb.task; ////מכניס את הערך של המשימה לתוך הפתק
  taskDate.innerText = taskOb.date;
  taskTime.innerText = taskOb.time;
  taskDiv.appendChild(xIcon);
  taskDiv.appendChild(taskText); ///לוקח את המבנה של הפסקה ושם בתוך הדיב
  taskDiv.appendChild(taskDate);
  taskDiv.appendChild(taskTime);
  noteContainer.appendChild(taskDiv);
  taskDiv.classList.add("memo");
}

function load() {
  const task = localStorage.getItem("taskOb");

  arr = JSON.parse(task); // String ==> Object
  if (!arr) {
    arr = [];
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    // i is the index of lements in arr
    createNote(arr[i]);
  }
}
load();
