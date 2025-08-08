const todoInput=document.getElementById(`todoInput`);
const todoFilter=document.getElementById(`todoFilter`);
const todoListsContainer=document.getElementById(`todo_lists_container`);
const allTasks=document.getElementById(`allTasks`);
const activeTasks=document.getElementById(`activeTasks`);
const completedTasks=document.getElementById(`completedTasks`);


todoInput.addEventListener(`keypress`,function (e){
    if(e.key===`Enter`&& todoInput.value.trim() !==``){
        console.log("Enter key pressed,adding todo");
        
        addTodo(todoInput.value);
        console.log("before clearing");
        
        todoInput.value=``;
        console.log("cleared");
    }
})

//Function to add a new todo item
function addTodo(todoText){
    const todoItem=document.createElement(`li`);
    todoItem.classList.add(`todo-item`,`flex`,`items-center`,`space-x-2`,`p-3`,`mb-2`,`bg-gray-50`,`rounded-md`,`border`,`border-gray-300`);
  console.log("item1");
    todoItem.innerhtml=`<input type="checkbox" class="todo-checkbox w-5 h-5">
    <span class="todo-text flex-grow">${todoText}</span>
    <button class="delete-btn bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">X</button>`;
    //append the new items to the all section and active section
    allTasks.appendChild(todoItem);
    activeTasks.appendChild(todoItem);


}