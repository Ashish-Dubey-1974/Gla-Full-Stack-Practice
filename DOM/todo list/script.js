const todoContainer = document.getElementById('todoContainer');
        const addTaskBtn = document.getElementById('addTaskBtn');

        // Function to add a new task
        addTaskBtn.onclick = () => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';

            
            const taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.placeholder = 'Input new Task';
            taskInput.required = true;

            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => {
                todoContainer.removeChild(taskItem);
            };

            // Append input and button to the task item
            taskItem.appendChild(taskInput);
            taskItem.appendChild(deleteBtn);

            // Append the task item to the container
            todoContainer.appendChild(taskItem);
        };