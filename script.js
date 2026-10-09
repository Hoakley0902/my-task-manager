const addTaskBtn = document.getElementById("addTaskBtn");
console.log(addTaskBtn);

const newTaskInput = document.getElementById("newTaskInput");


const taskList = document.getElementById("taskList");

const taskPriority = document.getElementById("taskPriority");

const taskCategory = document.getElementById("taskCategory");

const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", function() {
    renderTasks();
});

function renderTasks() {
    //clears the list empty before rendering the tasks again
    taskList.innerHTML = "";

    const selectedCategory = categoryFilter.value;

const filteredTasks = tasks.filter(function(task) {
    if (selectedCategory === "all") {
        return true;
    }

    return task.category === selectedCategory;
});

    filteredTasks.forEach(function(task) {
    const index = tasks.indexOf(task);
    
        const newTask = document.createElement("li");
        newTask.textContent = task.text + " (Priority: " + task.priority + ", Category: " + task.category + ")";

            if (task.completed) {
                newTask.style.textDecoration = "line-through";
            }

        // Create checkbox and set its type and checked state
        const completeCheckBox = document.createElement("input");
        completeCheckBox.type = "checkbox";
        completeCheckBox.checked = task.completed;
        newTask.appendChild(completeCheckBox);  
    
//updates data from checkbox
completeCheckBox.addEventListener("change", function() {
    task.completed = completeCheckBox.checked;
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
                    renderTasks();
    });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            renderTasks();

    });
   
});
}

//creates the array 
const tasks = [];

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
    category: taskCategory.value
};

//adds the new object to the array
tasks.push(newTaskData);
// prints the updated tasks array in the console
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

function calculateCompletionPercentage(completed, total){
    return (completed / total) * 100;
   
}


calculateCompletionPercentage(3,5);
console.log(calculateCompletionPercentage(3,5));

