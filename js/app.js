// User interaction doesnt provide desired results
//solution: Add interactivity so the user can manage dialy tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //complete-tasks


// add a new task
var addTask = function() {
	console.log("add task...");
	//when button pressed
	//create new list item with text from #new-task
	//input (checkbox)
	//label
	//input (text)
	//button.edit
	//button.delete
	//EAch elements, needs modified and appended
}

// edit existing task
var editTask = function() {
	console.log("edit task...");
	//When edi button press
		//if class of parent is .editMode
			//Switch from .editMode
			//label text become the input's value
		//else
			//Switch to .editMode
			//input value becomes the label's text

		//Toggle .editMode of the parent
}


// delete existing task
var deleteTask = function() {
	console.log("delete task...");
	//when delete button pressed
		//Remove the parent list item fron the ul
}

// mark a task as complete
var taskComplete = function() {	
	console.log("complete task...");
	//When checkbox is checked
		//Append the task list item to the #completed-task
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("incomplete task...");
	//When checkbox is unchecked
		//Appedn the task list item to the #incompleted-task
}

addButton.onclick = addTask;





// mark a task as incomplete