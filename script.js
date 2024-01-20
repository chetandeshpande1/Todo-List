
    function addTodo() {
      // Function to add a new to-do item
      const inputText = document.getElementById("todoInput");
      const todoText = inputText.value.trim();

      if (todoText !== "") {
        const ul = document.getElementById("todoList");
        const li = createTodoItem(todoText, createCheckbox, createDeleteButton);
        
        ul.appendChild(li);

        inputText.value = "";
        updateTaskCount();
      } else {
        alert('List cannot be empty');
      }
    }

    function createTodoItem(todoText, createCheckbox, createDeleteButton) {
      // Function to create a new to-do item
      const li = document.createElement("li");
      const checkbox = createCheckbox();
      const deleteBtn = createDeleteButton();

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(todoText));
      li.appendChild(deleteBtn);

      return li;
    }

    function createCheckbox() {
      // Function to create a checkbox for a to-do item
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        const li = checkbox.closest("li");
        li.classList.toggle("completed", checkbox.checked);
        updateTaskCount();
      });
      return checkbox;
    }

    function createDeleteButton() {
      // Function to create a delete button for a to-do item
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.classList.add('btn', 'btn-danger');
      deleteBtn.addEventListener("click", function () {
        const li = deleteBtn.closest("li");
        const ul = li.parentElement;
        ul.removeChild(li);
        updateTaskCount();
      });
      return deleteBtn;
    }

    function clearAll() {
      // Function to clear all to-do items
      const ul = document.getElementById("todoList");
      ul.innerHTML = "";
      updateTaskCount();
    }

    function updateTaskCount() {
      // Function to update the total tasks and completed tasks count
      const taskCount = document.getElementById("task-count");
      const totalTasks = document.querySelectorAll("#todoList li").length;
      const completedTasks = document.querySelectorAll("#todoList li.completed").length;
      taskCount.textContent = `Total Tasks: ${totalTasks} | Completed: ${completedTasks}`;
    }