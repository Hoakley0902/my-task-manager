const addTaskBtn = document.getElementById("addTaskBtn");
console.log(addTaskBtn);

const newTaskInput = document.getElementById("newTaskInput");


const taskList = document.getElementById("taskList");


function renderTasks() {
    //clears the list empty before rendering the tasks again
    taskList.innerHTML = "";
    //renders each task as a list item
    tasks.forEach(function(task, index) {
        const newTask = document.createElement("li");
        newTask.textContent = task.text;
        taskList.appendChild(newTask);
        console.log(task);

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
    completed: false
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