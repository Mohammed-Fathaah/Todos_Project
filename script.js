const todoInput=document.getElementById(`todoInput`);
const todoFilter=document.getElementById(`todoFilter`);
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