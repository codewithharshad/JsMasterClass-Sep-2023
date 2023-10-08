// DOM SELECTION
let taskInput = document.getElementById('taskInput');
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

// addEventListener
addTask.addEventListener('click', addTaskFun);

// function
function addTaskFun(){
    // console.log(taskInput.value)
    const taskText = taskInput.value;
    if(taskText=='')
        window.alert('Hey it cannot empty!');

    // create a new list item (li)
    const listItem = document.createElement('li')
    listItem.innerHTML= `
    <span>${taskText}</span>
    <button class='delete'>Delete</button>
    `;
    taskList.appendChild(listItem)
    taskInput.value=''
    
    // click even listener to the delete button
    const deleteButton = listItem.querySelector('.delete')
    deleteButton.addEventListener('click', ()=>{
        console.log('deleteButton', deleteButton)
        listItem.remove();
    })
}