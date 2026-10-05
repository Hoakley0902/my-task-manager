const addTaskBtn = document.getElementById("addTaskBtn");
console.log(addTaskBtn);

const newTaskInput = document.getElementById("newTaskInput");


const taskList = document.getElementById("taskList");

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
console.log(tasks);
 
        
//creates a new list item element and sets its text content to the value of the input
const newTask = document.createElement("li");
    newTask.textContent = newTaskInput.value;
    taskList.appendChild(newTask);
    newTaskInput.value = "";

}


);
