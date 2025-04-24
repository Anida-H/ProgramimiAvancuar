document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000/api/tasks';
    const taskForm = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks-list');

    // Fetch all tasks
    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const tasks = await response.json();
            displayTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Display tasks in the DOM
    const displayTasks = (tasks) => {
        tasksList.innerHTML = '';
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<p>No tasks yet. Add a task above!</p>';
            return;
        }

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description || 'No description'}</p>
                <p>Status: ${task.completed ? 'Completed' : 'Pending'}</p>
                <button class="delete-btn" data-id="${task._id}">Delete</button>
            `;
            tasksList.appendChild(taskElement);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteTask);
        });
    };

    // Add a new task
    const addTask = async (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, completed: false }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to create task');
            }
            
            // Reset form
            taskForm.reset();
            // Refresh task list
            fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    // Delete a task
    const deleteTask = async (e) => {
        const taskId = e.target.getAttribute('data-id');
        
        try {
            const response = await fetch(`${API_URL}/${taskId}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete task');
            }
            
            // Refresh task list
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // Event listeners
    taskForm.addEventListener('submit', addTask);

    // Initial fetch
    fetchTasks();
});