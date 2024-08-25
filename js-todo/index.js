const todoInputTextBox = document.getElementById("input-todo");
const todoAddbuton = document.getElementById("add-todo");

todoAddbuton.addEventListener('click', () => {
  const val = todoInputTextBox.value;

  if (val == "") {
    alert("TODOを入力されていません");
    return;
  }

  console.log(val);

  todoInputTextBox.value = "";
});

