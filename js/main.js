//get all needed elements from DOM
let userInput = document.getElementById("title");
let addTask = document.getElementById("addTask");
let content = document.getElementById("tasks");

let container;
//check if there is data in local storage
if (window.localStorage.getItem("tasks") != null) {
  container = JSON.parse(window.localStorage.getItem("tasks"));
  display();
} else container = [];
//add function for adding new taske
function add() {
  let task = {
    title: userInput.value,
  };
  container.push(task);
  window.localStorage.setItem("tasks", JSON.stringify(container));
  userInput.value = "";
  display();
}
//to display the content in the container
function display() {
  let str = "";
  for (let i = 0; i < container.length; i++) {
    str += `
    <div class="d-flex justify-content-between flex-wrap my-3 bg-white p-2 rounded mb-3 mb-md-0">
    <p>${container[i].title}</p>
     <button id="deleteTask" class="btn btn-outline-success" onclick="del(${i})">Delete</button>
    </div>`;
  }
  content.innerHTML = str;
}
//delete function
function del(i) {
  container.splice(i, 1);
  window.localStorage.setItem("tasks", JSON.stringify(container));
  display();
}
addTask.addEventListener("click", () => {
  if (userInput.value != "") add();
});
