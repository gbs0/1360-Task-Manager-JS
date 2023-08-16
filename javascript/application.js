const todos = [
  {title: "Fazer o JS Funcionar!", done: false},
  {title: "Adicionar um Nova Task", done: false},
  {title: "Finalizar o Livecode!", done: false}
]

const todosContainer = document.querySelector("#todosContainer");
const template = document.querySelector("#taskTemplate");
const button = document.querySelector("#button");

const displayTask = () => { // Mostrar as tasks a partir dos dados
  // 1. Limpar a lista para mostrar todas as Tasks novamente
  todosContainer.innerHTML = ""
  // 2. Iteramos por cada task, e adicionamos dentro do container
  todos.forEach((task) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".title").innerHTML = task.title
    todosContainer.appendChild(clone);
  })
}

// 1. Verificar se o usuário clicou no botão "Add Task"
button.addEventListener('click', (event) => {
  addTask();
})

const addTask = () => {
  // 1. Busca o valor digitado no input.
  const taskInput = document.querySelector("#taskTitle");

  // 2. Adiciona a task na lista de to-dos
  // 2.1 Criamos um objeto {:title, :done}
  // 2.2 Inserimos o objeto criado na lista
  const task = { title: taskInput.value, done: false }
  todos.push(task)

  // 3. Mostramos novamente todas as tasks
  displayTask()
  deleteTask()



  // 4. Limpar o Input após o envio
  taskInput.value = "";
}

const deleteTask = () => {
  const deleteButtons = document.querySelectorAll("#deleteTask");
  deleteButtons.forEach((btn) => {
    console.log("Clicando")
    btn.addEventListener("click", (event) => {
      const task = event.currentTarget.parentNode.parentNode;
      todosContainer.removeChild(task)
    })
  })
}

displayTask()
deleteTask()
