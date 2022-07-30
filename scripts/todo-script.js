let todoList = []

// adds the todo to the array and starts the displayTodo function
const addTodo = (todo,urgency) => {

   todoList.push({todoDesc: todo, priority: urgency, date: Date()})
   displayTodos()
   
}


// delete todo from array and call display todo
const deleteTodo = () => {
  let idToDelete = event.srcElement.id;
  

   todoList = todoList.filter( i => {
    if (i.date == idToDelete)
      return false;
    else 
      return true;
  });

  displayTodos()
  
}

// displays todoList onto the screen
const displayTodos = () => {

   let divContainer = document.getElementById('todo-container');
   divContainer.innerHTML = '';

 

   todoList.forEach(i => {
      let todoRow = document.createElement('div');
      let todoDesc = document.createElement('p');
      let todoButton = document.createElement('button');
      assignClassNames(todoRow, todoDesc, todoButton, i)

      todoDesc.textContent = i.todoDesc;
      assignColor(todoRow, i)
      todoRow.appendChild(todoDesc);
      todoRow.appendChild(todoButton);

      divContainer.appendChild(todoRow);
      
   })

}

const sortTodosByPriority = () => {

     todoList.sort(function(x,y){
      return x.priority - y.priority;
   });

   displayTodos();
}

const assignColor = (todoRow, i) => {

   if (i.priority == 1) 
      todoRow.style.backgroundColor = 'rgb(' + 207 + ',' + 162 + ',' + 157 + ')';
   else if (i.priority == 2){
      todoRow.style.backgroundColor = 'rgb(' + 170 + ',' + 207 + ',' + 157 + ')';
   }
   else {
      todoRow.style.backgroundColor = 'rgb(' + 157 + ',' + 189 + ',' + 207 + ')';
   }

}


const assignClassNames = (todoRow, todoDesc, todoButton, i) => {
   todoRow.classList.add('todo-row')
   todoDesc.classList.add('todo-desc')
   todoButton.classList.add('todo-button')
   todoButton.setAttribute('onClick', 'deleteTodo()')
   todoButton.innerText = 'X'
   todoButton.setAttribute('id', i.date)

}

//grabs the values and if not empty, sends them over to the addTodo function
const grabInput = () => {

   let inputValue = document.getElementById('todo-input').value
   let urgentType = document.getElementById('urgency')
   let urgentValue = urgentType.options[urgentType.selectedIndex].value;

   addTodo(inputValue, urgentValue);
}

displayTodos()
