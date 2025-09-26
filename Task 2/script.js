const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.className = "task";

  const check = document.createElement("div");
  check.className = "check";
  check.addEventListener("click", () => {
    check.classList.toggle("checked");
    li.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.textContent = taskText;

  const del = document.createElement("div");
  del.className = "delete";
  del.innerHTML = "&#128465;"; // trash icon
  del.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(del);

  taskList.appendChild(li);
  taskInput.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
