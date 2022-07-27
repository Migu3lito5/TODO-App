let todoList = [
   {  
      todoDesc: 'this is a todo description',
      priority: 'its either 1,2,3'
   }

]

// adds the todo to the array and starts the displayTodo function
const addTodo = (todo) => {

   todoList.push({todoDesc: todo, priority: 'still working on it'})
   console.log(todoList)
   displayTodos()
   
}


// delete todo from array and call display todo
const deleteTodo = () => {

}

// displays todoList onto the screen
const displayTodos = () => {

   const todoSection = document.getElementById('todo-container');
   todoSection.innerHTML = '';

   todoList.forEach(i => {
      const todoDiv = document.createElement('div');
      let todoText = document.createElement('p');
      todoText.textContent = i.todoDesc

      todoDiv.appendChild(todoText);
      todoSection.appendChild(todoDiv);
   })

}

//grabs the values and if not empty, sends them over to the addTodo function
const grabInput = () => {
   let inputValue = document.getElementById('todo-input').value
   addTodo(inputValue)
}

displayTodos()
