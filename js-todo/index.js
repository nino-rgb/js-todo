const todoInputTextBox = document.getElementById("input-todo");
const todoAddbuton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
todoAddbuton.addEventListener('click', () => {
  const val = todoInputTextBox.value;

  if (val == "") {
    alert("TODOを入力されていません");
    return;
  }

  const listItem = document.createElement('li');
  listItem.className = "todo-li";
  listItem.innerHTML = val;

  todoList.appendChild(listItem);

  const buttonItem = document.createElement('button');
  buttonItem.innerHTML = "DELETE";

  listItem.appendChild(buttonItem);

  console.log(val);

  buttonItem.addEventListener('click', () => {
    todoList.removeChild(listItem);
    console.log(val);
  })


  todoInputTextBox.value = "";
});

