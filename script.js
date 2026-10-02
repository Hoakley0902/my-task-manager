const addTaskBtn = document.getElementById("addTaskBtn");
console.log(addTaskBtn);

const newTaskInput = document.getElementById("newTaskInput");

const taskList = document.getElementById("taskList");

const tasks = [];
 

        addTaskBtn.addEventListener("click", function() {
            console.log(newTaskInput.value);

                if (newTaskInput.value === "") {
                    console.log("Please enter a task.");
                    return;
        }

tasks.push(newTaskInput.value);
console.log(tasks);
 
        
    


const newTask = document.createElement("li");
    newTask.textContent = newTaskInput.value;
    taskList.appendChild(newTask);
    newTaskInput.value = "";

});

