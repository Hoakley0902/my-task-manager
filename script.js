const addTaskBtn = document.getElementById("addTaskBtn");
console.log(addTaskBtn);

const newTaskInput = document.getElementById("newTaskInput");


const taskList = document.getElementById("taskList");

const taskPriority = document.getElementById("taskPriority");

const taskCategory = document.getElementById("taskCategory");

const categoryFilter = document.getElementById("categoryFilter");

const taskDueDate = document.getElementById("taskDueDate");

const totalTaskDisplay = document.getElementById("totalTaskDisplay");

const tasksShownDisplay = document.getElementById("tasksShownDisplay");

const completedTasksDisplay = document.getElementById("completedTasksDisplay");

const remainingTasksDisplay = document.getElementById("remainingTasksDisplay");

const completionPercentageDisplay = document.getElementById("completionPercentageDisplay");
const completionProgress = document.getElementById("completionProgress");
const overdueTasksDisplay = document.getElementById("overdueTasksDisplay");






categoryFilter.addEventListener("change", function() {
    renderTasks();
});

function renderTasks() {
    //clears the list empty before rendering the tasks again
    taskList.innerHTML = "";

const today = new Date ();
        today.setHours(0,0,0,0);


const selectedCategory = categoryFilter.value;

const filteredTasks = tasks.filter(function(task) {
    if (selectedCategory === "all") {
        return true;
    }
    return task.category === selectedCategory;
});

totalTaskDisplay.textContent = tasks.length;
tasksShownDisplay.textContent = filteredTasks.length;

const overdueTasks = tasks.filter(function(task) {
    const dueDate = new Date(task.dueDate + "T00:00:00");
    return dueDate < today && !task.completed;
});

overdueTasksDisplay.textContent = overdueTasks.length;


const completedTasks = tasks.filter(function(task) {
     return task.completed;
 });
 completedTasksDisplay.textContent = completedTasks.length;

 remainingTasksDisplay.textContent = tasks.length - completedTasks.length;

const percentage = calculateCompletionPercentage(completedTasks.length, tasks.length);

completionPercentageDisplay.textContent = percentage + "%";
completionProgress.value = percentage;

//sort due dates 
filteredTasks.sort(function(a, b) { 
    if (a.dueDate === "" && b.dueDate === "") {
        return 0;
    }
    if (a.dueDate === "") {
        return 1;
    }
    if (b.dueDate === "") {
        return -1;
    }

    const dateA = new Date (a.dueDate + "T00:00:00");
    const dateB = new Date (b.dueDate + "T00:00:00");
    
    return dateA - dateB;
});

    filteredTasks.forEach(function(task) {
    const index = tasks.indexOf(task);

        const newTask = document.createElement("li");
        newTask.textContent = task.text + " (Priority: " + task.priority + ", Category: " + task.category + ")";

        
        const dueDateDisplay = document.createElement("div");
        dueDateDisplay.textContent = "Due Date: " + task.dueDate;
        newTask.prepend(dueDateDisplay);

            if (task.completed) {
                newTask.style.textDecoration = "line-through";
            }
        
        const dueDate = new Date(task.dueDate + "T00:00:00");
            if (task.dueDate !== "" && dueDate < today && task.completed === false) {
                dueDateDisplay.textContent = "Due " + task.dueDate + " - Overdue";
            }


        // Create checkbox and set its type and checked state
        const completeCheckBox = document.createElement("input");
        completeCheckBox.type = "checkbox";
        completeCheckBox.checked = task.completed;
        newTask.appendChild(completeCheckBox);  
    
//updates data from checkbox
completeCheckBox.addEventListener("change", function() {
    task.completed = completeCheckBox.checked;
    saveTasks();
    renderTasks();
});

        taskList.appendChild(newTask);
        console.log(task);

        // create an option to change priority status
        const prioritySelect = document.createElement("select");
            prioritySelect.innerHTML = taskPriority.innerHTML;
            prioritySelect.value = task.priority;
            newTask.appendChild(prioritySelect);

                 prioritySelect.addEventListener("change", function() {
                // Save the dropdown's new value into this task's priority
                task.priority = prioritySelect.value;
                    saveTasks();
                    renderTasks();
    });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();

    });
   
});
}

//creates the array 
let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
}

renderTasks();

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Runs the function when Add Task Button is clicked
    addTaskBtn.addEventListener("click", function() {
    //print the text currently inside the input
            console.log(newTaskInput.value);

                if (newTaskInput.value === "") {
                    console.log("Please enter a task.");
                    return;
        }

//creates a new task object with the text from the input and a completed status of false
const newTaskData ={
    text: newTaskInput.value,
    completed: false, 
    priority: taskPriority.value,
    category: taskCategory.value,
    dueDate: taskDueDate.value
};

//adds the new object to the array
tasks.push(newTaskData);
// prints the updated tasks array in the console
saveTasks();
renderTasks();

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].text);
}
console.log(tasks);

    newTaskInput.value = "";

});

 const practiceTask = {
    text: "Walk Dog", completed: false, 
 }
 showTask(practiceTask);


function taskManagerLoaded() {
    console.log('Task manager loaded');
  }
    taskManagerLoaded();

function showTask(task){
    console.log(task);
}
showTask("Walk dog");
showTask("Study Javascript");


function calculateCompletionPercentage(completed, total) {
    if (total === 0) {
        return 0;
    }

    return Math.round((completed / total) * 100);
}

console.log(calculateCompletionPercentage(3,5));

