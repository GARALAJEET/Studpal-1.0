// v 3.3
document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
});

function addTodo() {
  const taskInput = document.getElementById("todoInput").value.trim();
  const taskDate = document.getElementById("todoDate").value;
  const taskTime = document.getElementById("todoTime").value;
  const taskCategory = document.getElementById("todoCategory").value;

  if (taskInput === "") {
    alert("Please enter a task.");
    return;
  }
  const cur_date = new Date();
  const taskDateObj = new Date(taskDate);
  if (taskDateObj < cur_date) {
    alert("Please enter a future date.");
    return;
  }
  const todo = {
    id: Date.now(),
    text: taskInput,
    date: taskDate,
    time: taskTime,
    category: taskCategory,
    completed: false,
  };

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  document.getElementById("todoInput").value = "";
  document.getElementById("todoDate").value = "";
  document.getElementById("todoTime").value = "";

  loadTodos();
}

function loadTodos(filter = "all") {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "today") {
      return todo.date === new Date().toISOString().split("T")[0];
    }
    if (filter === "week") {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of the day
      const taskDate = new Date(todo.date);
      taskDate.setHours(0, 0, 0, 0); // Reset to start of the day
    
      return (taskDate - today) / (1000 * 60 * 60 * 24) <= 7 && taskDate >= today;
    }
    
    return todo.category === filter;
  });

  filteredTodos.forEach(todo => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <span class="${todo.completed ? 'completed' : ''}">${todo.text} (${todo.date} ${todo.time})</span>
      <button style="background-color: green; color: white; border: none; padding: 5px; margin-left: 20px; cursor: pointer;" onclick="deleteTodo(${todo.id})">✔</button>
      <button class="remove-btn" style="background-color: red; color: white; border: none; padding: 5px; margin-left: 10px; cursor: pointer;" onclick="deleteTodo(${todo.id})">Remove</button>
    `;
    todoList.appendChild(li);
  });
}

function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(todo => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos));
  loadTodos();
}

function filterTodos() {
  const filterValue = document.getElementById("todoFilter").value;
  loadTodos(filterValue);
}

