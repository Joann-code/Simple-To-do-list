function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task !== "") {
    const li = document.createElement("li");

    // Span untuk teks task
    const span = document.createElement("span");
    span.textContent = task;
    span.onclick = function () {
      li.classList.toggle("completed");
    };

    // Tombol delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}