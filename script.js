const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(span) {
    span.parentElement.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentElement.remove();
}

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
