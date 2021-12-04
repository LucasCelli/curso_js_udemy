// Sábado, 23 de Outubro de 2021

const inputTask = document.querySelector('.new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.list-tasks');

function createList() {
    const list = document.createElement('li');
    return list;
}

function createTask(taskText) {
    const list = createList();
    list.innerText = taskText;
    tasks.appendChild(list);
    clearInputTask();
    createDeleteButton(list);
    saveTaskList();
}

function clearInputTask(){
    inputTask.value = null;
    inputTask.focus();
}

function createDeleteButton(li){
    const deleteButton = document.createElement('span');
    //deleteButton.classList.add('material-icons');
    deleteButton.setAttribute('class', 'delete-button material-icons');
    deleteButton.innerText = 'delete';
    li.appendChild(deleteButton);
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnAddTask.addEventListener('click', function (e) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('delete-button')){
        element.parentElement.remove();
        saveTaskList();
    }
})

function saveTaskList(){
    const listTasks = tasks.querySelectorAll('li');
    const listAllTasks = [];

    for(let task of listTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('delete', '').trim();
        listAllTasks.push(taskText);
    }
    const tasksJSON = JSON.stringify(listAllTasks);
    localStorage.setItem('taskList', tasksJSON);
}

function readSavedTasks(){
    const tasks = localStorage.getItem('taskList');
    const taskList = JSON.parse(tasks);

    for(let task of taskList){
        createTask(task);
    }
}
readSavedTasks();