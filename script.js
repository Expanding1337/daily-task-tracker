let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(index);
    ul.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if(input.value.trim() !== ""){
    taskList.push(input.value.trim());
    input.value = "";
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTasks();
  }
}

function removeTask(index){
  taskList.splice(index,1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTasks();
}

renderTasks();