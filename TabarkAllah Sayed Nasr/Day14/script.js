function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Oops!',
      text: 'Please enter a task!'
    });
    return;
  }

  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.innerHTML = "✔️";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "❌";

  doneBtn.addEventListener("click", function () {
    taskDiv.classList.toggle("completed");
    doneBtn.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", function () {
    taskDiv.remove();
  });

  buttonsDiv.appendChild(doneBtn);
  buttonsDiv.appendChild(deleteBtn);

  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(buttonsDiv);

  taskList.appendChild(taskDiv);

  Swal.fire({
    icon: 'success',
    title: 'Task Added',
    text: `"${taskText}" has been added!`,
    timer: 1200,
    showConfirmButton: false
  });

  input.value = "";
}
